import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TryAtHomeButton } from "@/components/try-at-home";
import { PageHero } from "@/components/site-shell";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({ head: () => ({ meta: [
  { title: "محصولات | مبلمان اسلامی" }, { name: "description", content: "مشاهده مجموعه مبلمان منزل، اداری، کلاسیک و سفارشی مبلمان اسلامی." },
  { property: "og:title", content: "محصولات | مبلمان اسلامی" }, { property: "og:description", content: "مجموعه‌ای متنوع از مبلمان اصیل و ماندگار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProductsPage });

const filters = [["all", "همه"], ["home", "مبلمان منزل"], ["office", "مبلمان اداری"], ["classic", "مبلمان کلاسیک"], ["custom", "مبلمان سفارشی"]] as const;
function ProductsPage() { const [filter, setFilter] = useState("all"); const visible = filter === "all" ? [...products, ...products] : [...products, ...products].filter((item) => item.category === filter); return <><PageHero title="محصولات" text="انتخابی برای هر فضا؛ از آرامش خانه تا اعتبار محیط کار." /><section className="section-space"><div className="section-shell"><div className="mb-10 flex flex-wrap justify-center gap-2">{filters.map(([value, label]) => <Button key={value} variant={filter === value ? "gold" : "outline"} onClick={() => setFilter(value)}>{label}</Button>)}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item, index) => <article key={`${item.title}-${index}`} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="p-6"><h2 className="text-xl font-bold text-primary">{item.title} {index > 3 ? "ویژه" : ""}</h2><p className="mt-2 text-sm text-muted-foreground">{item.description}</p><Button variant="link" className="mt-4 px-0 text-gold">مشاهده جزئیات<ArrowLeft /></Button><TryAtHomeButton index={products.indexOf(item)} className="mt-2 w-full" /></div></article>)}</div></div></section></>; }