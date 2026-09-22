import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Gem, Handshake, Landmark, Play, ShieldCheck, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryGrid } from "@/components/gallery-grid";
import { ContactSection } from "@/components/contact-section";
import { aboutImage, benefits, products, videoImage } from "@/lib/site-data";
import heroImage from "@/assets/islamic-furniture-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "مبلمان اسلامی | اصالت، زیبایی، ماندگاری" },
    { name: "description", content: "مجموعه مبلمان منزل، اداری، کلاسیک و سفارشی با طراحی اصیل ایرانی و کیفیت ماندگار." },
    { property: "og:title", content: "مبلمان اسلامی | اصالت، زیبایی، ماندگاری" },
    { property: "og:description", content: "انتخابی شایسته برای خانه و محیط کار با طراحی اصیل و کیفیت ماندگار." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const icons = [Gem, ShieldCheck, Landmark, BadgeCheck, Handshake, Handshake, WalletCards];
  return <div dir="rtl">
    <section className="relative flex min-h-[calc(100svh-5rem)] max-h-[700px] items-center overflow-hidden text-hero-foreground md:min-h-[620px]"><img src={heroImage} alt="فضای نشیمن لوکس با مبلمان ایرانی" width={1920} height={1104} className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-primary/70" /><div className="section-shell relative py-20"><div className="max-w-2xl"><p className="mb-5 flex items-center gap-3 text-sm font-bold text-gold"><span className="h-px w-10 bg-gold" />هنر ایرانی در خانه امروز</p><h1 className="text-4xl font-extrabold leading-[1.4] md:text-6xl">مبلمان اسلامی؛<br />اصالت، زیبایی، ماندگاری</h1><p className="mt-6 max-w-xl text-base leading-8 text-hero-foreground/80 md:text-lg">ترکیبی از طراحی اصیل، کیفیت ماندگار و انتخابی شایسته برای خانه و محیط کار.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="gold" size="lg"><Link to="/products">مشاهده محصولات<ArrowLeft /></Link></Button><Button asChild variant="light" size="lg"><Link to="/contact">مشاوره و سفارش</Link></Button></div></div></div></section>

    <section className="section-space"><div className="section-shell"><SectionHeading eyebrow="مجموعه‌ها" title="محصولات مبلمان اسلامی" text="انتخابی متنوع برای فضاهای مختلف با طراحی و کیفیت متمایز." /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products.map((product) => <article key={product.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[4/3] overflow-hidden"><img src={product.image} alt={product.title} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="p-5"><h3 className="text-xl font-bold text-primary">{product.title}</h3><p className="mt-2 text-sm text-muted-foreground">{product.description}</p><Button asChild variant="link" className="mt-4 px-0 text-gold"><Link to="/products">مشاهده محصولات<ArrowLeft /></Link></Button></div></article>)}</div></div></section>

    <section className="bg-secondary"><div className="section-shell section-space grid items-center gap-10 lg:grid-cols-2"><div className="group relative aspect-[16/10] overflow-hidden rounded-lg"><img src={videoImage} alt="نمایشگاه مبلمان اسلامی" loading="lazy" width={1600} height={1008} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-primary/25" /><Button variant="gold" size="icon" className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full" aria-label="پخش ویدئوی معرفی"><Play className="size-6 fill-current" /></Button></div><div><SectionHeading eyebrow="روایت یک انتخاب" title="نگاهی به مبلمان اسلامی" text="با مجموعه‌ای از طراحی‌ها و محصولات ما بیشتر آشنا شوید؛ از انتخاب تا تحویل، همراه شما هستیم." align="right" /><Button asChild variant="gold" size="lg" className="mt-7"><Link to="/gallery">مشاهده گالری کامل<ArrowLeft /></Link></Button></div></div></section>

    <section className="section-space bg-secondary/60"><div className="section-shell"><SectionHeading eyebrow="مزیت‌های ما" title="چرا مبلمان اسلامی؟" text="ترکیبی از اصالت، کیفیت و همراهی با مشتری." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title, text], index) => { const Icon = icons[index] ?? Gem; return <article key={title} className={`rounded-lg border bg-background p-6 ${index === 6 ? "border-gold shadow-gold lg:col-span-2" : "border-border"}`}><span className="mb-5 grid size-11 place-items-center rounded-full bg-secondary text-gold"><Icon /></span><h3 className="font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p></article>; })}</div></div></section>

    <section className="section-space"><div className="section-shell"><SectionHeading eyebrow="منتخب آثار" title="گالری محصولات" text="نگاهی به بخشی از محصولات و طراحی‌های مبلمان اسلامی." /><div className="mt-10"><GalleryGrid /></div><div className="mt-8 text-center"><Button asChild variant="outline" size="lg"><Link to="/gallery">مشاهده همه تصاویر<ArrowLeft /></Link></Button></div></div></section>

    <section className="section-space bg-primary text-primary-foreground"><div className="section-shell grid items-center gap-12 lg:grid-cols-2"><img src={aboutImage} alt="کارشناس مجموعه مبلمان اسلامی" loading="lazy" width={1408} height={1104} className="aspect-[5/4] w-full rounded-lg object-cover" /><div><p className="text-sm font-bold text-gold">داستان ما</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">درباره مبلمان اسلامی</h2><p className="mt-6 max-w-xl leading-8 text-primary-foreground/70">مجموعه‌ای با تمرکز بر اصالت، زیبایی و کیفیت که تلاش می‌کند تجربه‌ای مطمئن و حرفه‌ای برای انتخاب مبلمان فراهم کند.</p><Button asChild variant="gold" size="lg" className="mt-8"><Link to="/about">بیشتر بدانید<ArrowLeft /></Link></Button></div></div></section>

    <section className="section-space"><div className="section-shell"><SectionHeading eyebrow="مشاوره تخصصی" title="با ما در ارتباط باشید" text="برای مشاوره، سفارش و دریافت اطلاعات بیشتر با ما در تماس باشید." /><div className="mt-10"><ContactSection /></div></div></section>
  </div>;
}

function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: string; text: string; align?: "center" | "right" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-right"}><p className="text-sm font-bold text-gold">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{title}</h2><p className="mt-4 leading-8 text-muted-foreground">{text}</p></div>;
}
