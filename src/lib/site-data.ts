import homeImage from "@/assets/product-home.jpg";
import officeImage from "@/assets/product-office.jpg";
import classicImage from "@/assets/product-classic.jpg";
import customImage from "@/assets/product-custom.jpg";
import coffeeTablesImage from "@/assets/product-coffee-tables.jpg";
import bedroomImage from "@/assets/product-bedroom.jpg";
import wardrobeImage from "@/assets/product-wardrobe.jpg";
import shoeCabinetImage from "@/assets/product-shoe-cabinet.jpg";
import dresserImage from "@/assets/product-dresser.jpg";
import tableImage from "@/assets/product-table.jpg";
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
  { id: "home", title: "مبلمان منزل", description: "زیبایی و راحتی برای فضای خانه.", image: homeImage, images: [homeImage, classicImage, customImage], category: "home", features: ["طراحی متناسب با نشیمن ایرانی", "پارچه و متریال قابل انتخاب", "ساخت دقیق و ماندگار"] },
  { id: "office", title: "مبلمان اداری", description: "طراحی حرفه‌ای برای محیط‌های کاری.", image: officeImage, images: [officeImage, tableImage, customImage], category: "office", features: ["طراحی ارگونومیک", "مناسب فضای رسمی و مدیریتی", "امکان هماهنگی با هویت سازمانی"] },
  { id: "classic", title: "مبلمان کلاسیک", description: "اصالت و شکوه در طراحی.", image: classicImage, images: [classicImage, homeImage, coffeeTablesImage], category: "classic", features: ["جزئیات ظریف و اصیل", "ترکیب چوب و پارچه ممتاز", "پرداخت حرفه‌ای و بادوام"] },
  { id: "custom", title: "مبلمان سفارشی", description: "طراحی متناسب با نیاز شما.", image: customImage, images: [customImage, homeImage, officeImage], category: "custom", features: ["ابعاد متناسب با فضای شما", "انتخاب رنگ و متریال", "مشاوره از طراحی تا تحویل"] },
  { id: "coffee-tables", title: "جلو مبلی و عسلی", description: "میزهایی هماهنگ و زیبا برای تکمیل دکوراسیون.", image: coffeeTablesImage, images: [coffeeTablesImage, homeImage, classicImage], category: "coffee-tables", features: ["ست‌های هماهنگ و کاربردی", "جزئیات الهام‌گرفته از هنر ایرانی", "چوب و یراق باکیفیت"] },
  { id: "bedroom", title: "سرویس خواب", description: "ترکیبی از زیبایی، آرامش و کیفیت برای اتاق خواب.", image: bedroomImage, images: [bedroomImage, dresserImage, wardrobeImage], category: "bedroom", features: ["طراحی آرام و هماهنگ", "ساخت مستحکم و ماندگار", "امکان سفارش اجزای هماهنگ"] },
  { id: "wardrobe", title: "کمد", description: "کمدهای کاربردی و زیبا با طراحی متناسب با فضا.", image: wardrobeImage, images: [wardrobeImage, bedroomImage, dresserImage], category: "wardrobe", features: ["تقسیم‌بندی داخلی کاربردی", "ابعاد قابل سفارش", "هماهنگ با دکوراسیون اتاق"] },
  { id: "shoe-cabinet", title: "جای کفش", description: "طراحی کاربردی و شیک برای نظم و زیبایی ورودی منزل.", image: shoeCabinetImage, images: [shoeCabinetImage, wardrobeImage, coffeeTablesImage], category: "shoe-cabinet", features: ["استفاده بهینه از فضای ورودی", "تهویه و طبقه‌بندی مناسب", "نمای ظریف و هماهنگ"] },
  { id: "dresser", title: "دراور", description: "دراورهای زیبا و کاربردی برای نظم بیشتر.", image: dresserImage, images: [dresserImage, bedroomImage, wardrobeImage], category: "dresser", features: ["کشوهای روان و جادار", "جزئیات چوبی ظریف", "مناسب اتاق خواب و فضای شخصی"] },
  { id: "table", title: "میز", description: "میزهای متنوع برای خانه، دفتر و فضاهای مختلف.", image: tableImage, images: [tableImage, officeImage, coffeeTablesImage], category: "table", features: ["کاربری خانگی و اداری", "سطح مقاوم و خوش‌ساخت", "ابعاد و چیدمان قابل انتخاب"] },
] as const;

export const productFilters = [["all", "همه"], ...products.map((product) => [product.category, product.title] as const)] as const;

export const galleryImages = [
  { src: videoImage, alt: "فضای داخلی لوکس مبلمان اسلامی" },
  { src: classicImage, alt: "مبلمان کلاسیک ایرانی" },
  { src: homeImage, alt: "مبلمان منزل با طراحی اصیل" },
  { src: officeImage, alt: "مبلمان اداری لوکس" },
  { src: bedroomImage, alt: "سرویس خواب با طراحی ایرانی" },
  { src: coffeeTablesImage, alt: "جلو مبلی و عسلی چوبی" },
  { src: dresserImage, alt: "دراور چوبی با نقش ایرانی" },
  { src: aboutImage, alt: "فضای نمایشگاه مبلمان اسلامی" },
];

export { videoImage, aboutImage };

export const benefits = [
  ["طراحی بااصالت", "طراحی چشم‌نواز با هویت و اصالت.", classicImage],
  ["کیفیت ماندگار", "انتخاب متریال و ساخت باکیفیت.", coffeeTablesImage],
  ["اصالت ایرانی", "الهام از هنر بومی با بیانی مدرن.", customImage],
  ["اقتصادی در بلندمدت", "سرمایه‌گذاری هوشمند برای سال‌ها استفاده.", wardrobeImage],
  ["همکاری با سازمان‌ها و ادارات", "تعامل پایدار و حرفه‌ای با نهادها و ادارات.", officeImage],
  ["همراه با مشتری", "از انتخاب تا تحویل همراه شما.", aboutImage],
  ["اقساط بلندمدت", "خرید آسان‌تر با شرایط پرداخت منعطف و اقساط بلندمدت.", homeImage],
] as const;
