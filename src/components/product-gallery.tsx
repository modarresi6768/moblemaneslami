import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ProductGallery({ images, title }: { images: readonly string[]; title: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];
  if (!current) return null;
  return <div>
    <div className="overflow-hidden rounded-lg bg-secondary"><img src={current} alt={`${title}، نمای ${active + 1}`} width={1200} height={900} className="aspect-[4/3] w-full object-cover" /></div>
    <div className="mt-3 grid grid-cols-3 gap-3">{images.map((image, index) => <Button key={`${image}-${index}`} type="button" variant="ghost" onClick={() => setActive(index)} aria-label={`نمایش تصویر ${index + 1} از ${title}`} aria-pressed={active === index} className={`h-auto overflow-hidden rounded-md border-2 p-0 ${active === index ? "border-gold" : "border-transparent"}`}><img src={image} alt="" loading="lazy" width={400} height={300} className="aspect-[4/3] w-full object-cover" /></Button>)}</div>
  </div>;
}
