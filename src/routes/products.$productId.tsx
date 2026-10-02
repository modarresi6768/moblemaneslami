import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product-gallery";
import { PageHero } from "@/components/site-shell";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = products.find((item) => item.id === params.productId);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "محصول";
    const description = loaderData?.description ?? "معرفی محصولات مبلمان اسلامی.";
    return { meta: [
      { title: `${title} | مبلمان اسلامی` }, { name: "description", content: description },
      { property: "og:title", content: `${title} | مبلمان اسلامی` }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const product = Route.useLoaderData();
  return <><PageHero eyebrow="مجموعه محصولات" title={product.title} text={product.description} /><section className="section-space"><div className="section-shell grid items-start gap-10 lg:grid-cols-[1.1fr_.9fr]"><ProductGallery images={product.images} title={product.title} /><div className="lg:sticky lg:top-28"><p className="text-sm font-bold text-gold">{product.title}</p><h2 className="mt-3 text-3xl font-bold text-primary">طراحی اصیل، متناسب با فضای شما</h2><p className="mt-5 leading-8 text-muted-foreground">هر محصول با توجه به زیبایی، کارایی و ماندگاری انتخاب و ارائه می‌شود. برای مشاهده نمونه‌های بیشتر، انتخاب متریال و هماهنگی ابعاد با کارشناسان ما در ارتباط باشید.</p><ul className="mt-7 space-y-4">{product.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground"><span className="grid size-7 place-items-center rounded-full bg-secondary text-gold"><Check className="size-4" /></span>{feature}</li>)}</ul><div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="gold" size="lg"><Link to="/contact"><MessageCircle />مشاوره و سفارش</Link></Button><Button asChild variant="outline" size="lg"><Link to="/products">همه محصولات<ArrowLeft /></Link></Button></div></div></div></section></>;
}
