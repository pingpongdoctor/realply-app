import "./globals.scss";
import { sulphurPoint, roboto, rubik } from "./styles/fonts";
import NavigationComponent from "./components/NavigationComponent/NavigationComponent";

//SET UP METADATA
export const metadata = {
  title: "Reaply Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sulphurPoint.variable} ${roboto.variable} ${rubik.variable}`}
    >
      <body>
        {/* NAVIGATION COMPONENT APPEARS ON EVERY PAGE OF THE WEBSITE */}
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
