import { Eye, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/site-data";

export function GalleryGrid({ extended = false }: { extended?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const items = extended ? [...galleryImages, ...galleryImages] : galleryImages;
  const active = selected === null ? undefined : items[selected];
  return <><div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map((image, index) => <button type="button" key={`${image.alt}-${index}`} onClick={() => setSelected(index)} className={`group relative overflow-hidden rounded-lg ${!extended && (index === 0 || index === 5) ? "lg:col-span-2" : ""}`} aria-label={`نمایش ${image.alt}`}><img src={image.src} alt={image.alt} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center bg-primary/0 text-hero-foreground opacity-0 transition-all group-hover:bg-primary/55 group-hover:opacity-100"><Eye className="size-8" /></span></button>)}</div>{active && <div className="fixed inset-0 z-50 grid place-items-center bg-primary/90 p-4" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setSelected(null)}><Button variant="light" size="icon" className="absolute left-5 top-5" onClick={() => setSelected(null)} aria-label="بستن تصویر"><X /></Button><img src={active.src} alt={active.alt} className="max-h-[84vh] max-w-[92vw] rounded-lg object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} /></div>}</>;
}