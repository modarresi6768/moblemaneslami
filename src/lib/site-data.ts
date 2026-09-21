import homeImage from "@/assets/product-home.jpg";
import officeImage from "@/assets/product-office.jpg";
import classicImage from "@/assets/product-classic.jpg";
import customImage from "@/assets/product-custom.jpg";
import videoImage from "@/assets/showroom-video.jpg";
import aboutImage from "@/assets/about-showroom.jpg";

export const navItems = [
  { label: "خانه", to: "/" as const },
  { label: "محصولات", to: "/products" as const },
  { label: "درباره ما", to: "/about" as const },
  { label: "گالری", to: "/gallery" as const },
  { label: "تماس با ما", to: "/contact" as const },
];

export const products = [
  { title: "مبلمان منزل", description: "زیبایی و راحتی برای فضای خانه.", image: homeImage, category: "home" },
  { title: "مبلمان اداری", description: "طراحی حرفه‌ای برای محیط‌های کاری.", image: officeImage, category: "office" },
  { title: "مبلمان کلاسیک", description: "اصالت و شکوه در طراحی.", image: classicImage, category: "classic" },
  { title: "مبلمان سفارشی", description: "طراحی متناسب با نیاز شما.", image: customImage, category: "custom" },
];

export const galleryImages = [
  { src: videoImage, alt: "فضای داخلی لوکس مبلمان اسلامی" },
  { src: classicImage, alt: "مبلمان کلاسیک ایرانی" },
  { src: homeImage, alt: "مبلمان منزل با طراحی اصیل" },
  { src: officeImage, alt: "مبلمان اداری لوکس" },
  { src: customImage, alt: "جزئیات ساخت چوب و پارچه" },
  { src: aboutImage, alt: "فضای نمایشگاه مبلمان اسلامی" },
];

export { videoImage, aboutImage };

export const benefits = [
  ["طراحی بااصالت", "طراحی چشم‌نواز با هویت و اصالت."],
  ["کیفیت ماندگار", "انتخاب متریال و ساخت باکیفیت."],
  ["اصالت ایرانی", "الهام از هنر بومی با بیانی مدرن."],
  ["اقتصادی در بلندمدت", "سرمایه‌گذاری هوشمند برای سال‌ها استفاده."],
  ["همکاری با سازمان‌ها و ادارات", "تعامل پایدار و حرفه‌ای با نهادها و ادارات."],
  ["همراه با مشتری", "از انتخاب تا تحویل همراه شما."],
  ["اقساط بلندمدت", "خرید آسان‌تر با شرایط پرداخت منعطف و اقساط بلندمدت."],
];