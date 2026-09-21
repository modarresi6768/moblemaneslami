import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "تماس با ما | مبلمان اسلامی" }, { name: "description", content: "برای مشاوره، سفارش و دریافت اطلاعات بیشتر با مبلمان اسلامی در ارتباط باشید." },
  { property: "og:title", content: "تماس با مبلمان اسلامی" }, { property: "og:description", content: "راه‌های ارتباط، ساعات کاری و فرم درخواست مشاوره." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });
function ContactPage() { return <><PageHero title="تماس با ما" text="برای مشاوره، سفارش و دریافت اطلاعات بیشتر با ما در تماس باشید." /><section className="section-space"><div className="section-shell"><ContactSection showMap /></div></section></>; }