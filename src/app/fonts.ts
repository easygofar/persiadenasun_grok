import localFont from "next/font/local";

export const Vazirmatn = localFont({
  src: "./fonts/Vazirmatn-VariableFont_wght.ttf",
  variable: "--font-vazir",
  display: "swap",
});

export const Lalezar = localFont({
  src: "./fonts/Lalezar-Regular.ttf",
  variable: "--font-lalezar",
  display: "swap",
});

// const vazir = Vazirmatn({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-vazir",
//   display: "swap",
// });

// const lalezar = Lalezar({
//   subsets: ["arabic", "latin"],
//   weight: "400",
//   variable: "--font-lalezar",
//   display: "swap",
// });
