import { createFileRoute } from "@tanstack/react-router";

const fabricColors: Record<string, string> = {
  ivory: "warm ivory cream",
  beige: "soft neutral beige",
  olive: "muted olive green",
  emerald: "deep emerald green",
  petrol: "deep petrol blue",
  gray: "medium warm gray",
  burgundy: "deep burgundy red",
  walnut: "warm walnut brown",
};

const friendly = (status = 200) =>
  Response.json({ ok: false, message: "متأسفانه این بار نتوانستیم مبل را در تصویر شما قرار دهیم. لطفاً عکسی روشن‌تر از پذیرایی انتخاب کنید و دوباره امتحان کنید." }, { status });

export const Route = createFileRoute("/api/try-sofa")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const input = await request.formData();
          const room = input.get("room");
          const sofa = input.get("sofa");
          const colorId = input.get("color");
          if (!(room instanceof File) || !(sofa instanceof File) || room.size === 0 || room.size > 10_000_000) return friendly();
          const color = typeof colorId === "string" ? fabricColors[colorId] : undefined;
          if (!color) return friendly(400);
          const form = new FormData();
          form.append("model", "openai/gpt-image-2.5-sunburst");
          form.append("prompt", `The first image is a photo of a customer's living room. The second image shows a sofa product. Place exactly this sofa naturally into the living room, on the floor at a realistic position, scale and perspective, with matching lighting and soft shadows. Change only the sofa upholstery fabric color to ${color}. Preserve the exact sofa shape, proportions, stitching, tufting, cushions, legs, wood or metal details, and materials other than the upholstery. Keep the room itself unchanged. Photorealistic.`);
          form.append("image[]", room, room.name || "room.jpg");
          form.append("image[]", sofa, "sofa.jpg");
          const res = await fetch("https://ai.gateway.lovable.dev/v1/images/edits", {
            method: "POST",
            headers: { Authorization: `Bearer ${process.env["LOVABLE_API_KEY"]}` },
            body: form,
          });
          if (!res.ok) { console.error("try-sofa", res.status, await res.text()); return friendly(); }
          const json = (await res.json()) as { data?: { b64_json?: string }[] };
          const b64 = json.data?.[0]?.b64_json;
          if (!b64) return friendly();
          return Response.json({ ok: true, image: `data:image/png;base64,${b64}` });
        } catch (e) {
          console.error("try-sofa", e);
          return friendly();
        }
      },
    },
  },
});
