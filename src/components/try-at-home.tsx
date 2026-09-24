import { Camera, Download, Loader2, Sofa, Upload, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/site-data";

const EVENT = "open-try-at-home";
export function openTryAtHome(index = 0) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: index }));
}

export function TryAtHomeButton({ index, className = "" }: { index: number; className?: string }) {
  return <Button variant="gold" size="sm" className={className} onClick={() => openTryAtHome(index)}><Camera />امتحان این مبل در خانه</Button>;
}

export function TryAtHome() {
  const [open, setOpen] = useState(false);
  const [sofa, setSofa] = useState(0);
  const [room, setRoom] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => { setSofa((e as CustomEvent<number>).detail ?? 0); setResult(null); setMessage(null); setOpen(true); };
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  const pick = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) { setMessage("لطفاً یک عکس انتخاب کنید."); return; }
    setRoom(file); setResult(null); setMessage(null);
    setPreview(URL.createObjectURL(file));
  };

  const run = async () => {
    if (!room) return;
    setLoading(true); setMessage(null); setResult(null);
    try {
      const sofaBlob = await (await fetch(products[sofa]!.image)).blob();
      const form = new FormData();
      form.append("room", room);
      form.append("sofa", new File([sofaBlob], "sofa.jpg", { type: sofaBlob.type || "image/jpeg" }));
      const res = await fetch("/api/try-sofa", { method: "POST", body: form });
      const json = (await res.json()) as { ok: boolean; image?: string; message?: string };
      if (json.ok && json.image) setResult(json.image);
      else setMessage(json.message ?? "متأسفانه این بار موفق نشدیم؛ لطفاً دوباره امتحان کنید.");
    } catch {
      setMessage("ارتباط برقرار نشد؛ لطفاً چند لحظه بعد دوباره امتحان کنید.");
    } finally { setLoading(false); }
  };

  return <>
    <button type="button" onClick={() => openTryAtHome(sofa)} className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border-2 border-gold bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-gold transition-transform hover:-translate-y-1" aria-label="مبل را در خانه‌ی من ببین">
      <Sofa className="size-5 text-gold" />مبل را در خانه‌ی من ببین
    </button>
    {open && <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-primary/80 p-4" dir="rtl" role="dialog" aria-modal="true" aria-label="مبل را در خانه‌ی من ببین">
      <div className="relative w-full max-w-3xl rounded-lg border border-gold bg-background p-6 shadow-2xl">
        <Button variant="ghost" size="icon" className="absolute left-3 top-3" onClick={() => setOpen(false)} aria-label="بستن"><X /></Button>
        <p className="text-sm font-bold text-gold">ابزار ویژه</p>
        <h2 className="mt-1 text-2xl font-bold text-primary">مبل را در خانه‌ی من ببین</h2>
        <p className="mt-2 text-sm text-muted-foreground">۱. عکس پذیرایی خود را انتخاب کنید ۲. مبل دلخواه را برگزینید ۳. نتیجه را ببینید.</p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{products.map((p, i) => <button type="button" key={p.title} onClick={() => { setSofa(i); setResult(null); }} className={`overflow-hidden rounded-md border-2 text-right transition ${sofa === i ? "border-gold shadow-gold" : "border-border"}`}><img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" /><span className="block p-2 text-xs font-bold text-primary">{p.title}</span></button>)}</div>

        <label className="mt-5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gold/60 bg-secondary p-4 text-center text-sm text-primary hover:bg-secondary/70">
          <input type="file" accept="image/*" className="hidden" onChange={(e) => pick(e.target.files?.[0])} />
          {result ? <img src={result} alt="نتیجه قرارگیری مبل در پذیرایی شما" className="max-h-80 rounded-md object-contain" /> : preview ? <img src={preview} alt="عکس پذیرایی شما" className="max-h-80 rounded-md object-contain" /> : <><Upload className="size-8 text-gold" />برای انتخاب عکس پذیرایی کلیک کنید</>}
        </label>

        {message && <p className="mt-4 rounded-md bg-secondary p-3 text-sm text-primary">{message}</p>}

        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="gold" size="lg" disabled={!room || loading} onClick={run}>{loading ? <><Loader2 className="animate-spin" />در حال چیدن مبل... (حدود یک دقیقه)</> : <><Sofa />نمایش مبل در خانه من</>}</Button>
          {result && <Button asChild variant="outline" size="lg"><a href={result} download="mobl-dar-khane.png"><Download />دریافت تصویر</a></Button>}
        </div>
      </div>
    </div>}
  </>;
}
