import "./globals.scss";
import { Roboto } from "next/font/google";

//SET UP ROBOTO GOOGLE FONT
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
