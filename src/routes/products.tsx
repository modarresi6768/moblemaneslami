import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site-shell";
import { productFilters, products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({ head: () => ({ meta: [
  { title: "محصولات | مبلمان اسلامی" }, { name: "description", content: "مشاهده مجموعه کامل مبلمان، میز، سرویس خواب و محصولات چوبی مبلمان اسلامی." },
  { property: "og:title", content: "محصولات | مبلمان اسلامی" }, { property: "og:description", content: "ده گروه محصول با طراحی اصیل و کیفیت ماندگار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProductsPage });

function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? products : products.filter((item) => item.category === filter);
  return <><PageHero title="محصولات" text="انتخابی برای هر فضا؛ از آرامش خانه تا اعتبار محیط کار." /><section className="section-space"><div className="section-shell"><div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="فیلتر دسته‌بندی محصولات">{productFilters.map(([value, label]) => <Button key={value} variant={filter === value ? "gold" : "outline"} onClick={() => setFilter(value)} aria-pressed={filter === value}>{label}</Button>)}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item) => <article key={item.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="p-6"><p className="text-xs font-bold text-gold">{item.title}</p><h2 className="mt-2 text-xl font-bold text-primary">{item.title}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{item.description}</p><Button asChild variant="link" className="mt-4 px-0 text-gold"><Link to="/products/$productId" params={{ productId: item.id }}>مشاهده جزئیات<ArrowLeft /></Link></Button></div></article>)}</div></div></section></>;
}
