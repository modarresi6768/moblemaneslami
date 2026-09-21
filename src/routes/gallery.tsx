import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({ head: () => ({ meta: [
  { title: "گالری | مبلمان اسلامی" }, { name: "description", content: "گالری فضاها، محصولات و جزئیات ساخت مبلمان اسلامی." },
  { property: "og:title", content: "گالری مبلمان اسلامی" }, { property: "og:description", content: "نگاهی نزدیک به طراحی‌ها و محصولات مبلمان اسلامی." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: GalleryPage });
function GalleryPage() { return <><PageHero title="گالری" text="نگاهی نزدیک‌تر به فضاها، محصولات و جزئیاتی که هر اثر را متمایز می‌کند." /><section className="section-space"><div className="section-shell"><GalleryGrid extended /></div></section></>; }