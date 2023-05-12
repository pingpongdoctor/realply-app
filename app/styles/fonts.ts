import { Sulphur_Point, Roboto, Rubik } from "next/font/google";

//SET UP SULPHURE POINT GOOGLE FONT
const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sulphur-point",
});

//SET UP ROBOTO GOOGLE FONT
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

//SET UP ROBOTO GOOGLE FONT
const rubik = Rubik({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export { sulphurPoint, roboto, rubik };
