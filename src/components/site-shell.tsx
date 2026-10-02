import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" className="group flex items-center gap-3" aria-label="مبلمان اسلامی، صفحه اصلی"><span className={`grid size-11 place-items-center rounded-full border border-gold text-lg font-bold transition-colors group-hover:bg-gold ${inverse ? "text-gold" : "text-primary"}`}>م</span><span><strong className={`font-brand block pb-1 text-xl font-bold leading-8 ${inverse ? "text-primary-foreground" : "text-primary"}`}>مبلمان اسلامی</strong><small className={`block text-[10px] ${inverse ? "text-primary-foreground/60" : "text-muted-foreground"}`}>اصالت در متن زندگی</small></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-md" dir="rtl"><div className="section-shell flex h-20 items-center justify-between"><Brand /><nav className="hidden items-center gap-7 lg:flex" aria-label="منوی اصلی">{navItems.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="text-sm font-medium text-foreground transition-colors hover:text-gold" activeProps={{ className: "text-gold" }}>{item.label}</Link>)}</nav><Button asChild variant="gold" size="lg" className="hidden lg:inline-flex"><Link to="/contact"><Phone />مشاوره و سفارش</Link></Button><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "بستن منو" : "باز کردن منو"}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="border-t border-border bg-background px-4 py-5 lg:hidden" aria-label="منوی موبایل"><div className="mx-auto flex max-w-md flex-col gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium hover:bg-secondary">{item.label}</Link>)}<Button asChild variant="gold" className="mt-3"><Link to="/contact" onClick={() => setOpen(false)}>مشاوره و سفارش</Link></Button></div></nav>}</header>;
}

export function Footer() {
  return <footer className="bg-primary text-primary-foreground" dir="rtl"><div className="section-shell grid gap-10 py-14 md:grid-cols-3"><div><Brand inverse /><p className="mt-5 max-w-xs text-sm leading-7 text-primary-foreground/70">اصالت، زیبایی، ماندگاری.</p></div><div><h3 className="mb-5 font-bold text-gold">لینک‌های سریع</h3><div className="grid grid-cols-2 gap-3">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-primary-foreground/75 hover:text-gold">{item.label}</Link>)}</div></div><div><h3 className="mb-5 font-bold text-gold">ارتباط با ما</h3><p className="mb-3 flex items-center gap-2 text-sm text-primary-foreground/75"><Phone className="size-4 text-gold" /> ۰۲۱-XXXX XXXX</p><p className="flex items-start gap-2 text-sm leading-6 text-primary-foreground/75"><MapPin className="mt-1 size-4 shrink-0 text-gold" /> تهران، آدرس نمایشگاه شما</p></div></div><div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/55">© کلیه حقوق این وب‌سایت محفوظ است.</div></footer>;
}

export function PageHero({ title, eyebrow, text }: { title: string; eyebrow?: string; text?: string }) {
  return <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground" dir="rtl"><div className="pattern-line absolute inset-0 opacity-15" /><div className="section-shell relative"><span className="text-sm font-bold text-gold">{eyebrow ?? "مبلمان اسلامی"}</span><h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>{text && <p className="mt-5 max-w-2xl leading-8 text-primary-foreground/70">{text}</p>}</div></section>;
}