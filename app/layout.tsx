import "./globals.scss";
import { Sulphur_Point, Roboto } from "next/font/google";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";

//SET UP SULPHURE POINT GOOGLE FONT
const sulphurPoint = Sulphur_Point({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sulphur-point",
});

//SET UP ROBOTO GOOGLE FONT TO USE IT WITH VARIABLE
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

//SET UP METADATA
export const metadata = {
  title: "Reapply Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sulphurPoint.variable} ${roboto.variable}`}>
      <body>
        {/* NAVIGATION COMPONENT APPEARS ON EVERY PAGE OF THE WEBSITE */}
        <NavigationComponent />

        {children}
      </body>
    </html>
  );
}
