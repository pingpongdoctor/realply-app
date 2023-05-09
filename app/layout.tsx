import "./globals.scss";
import { Quicksand } from "next/font/google";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";

//SET UP ROBOTO GOOGLE FONT
const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <body className={quicksand.className}>
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
