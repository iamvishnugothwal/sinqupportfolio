import GTMRouteTracker from "./GTMRouteTracker";
import { Poppins, Unbounded } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-primary",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Poppins", "sans-serif"],
});

export const metadata = {
  title: "SINQUP - A Virtual Creative Branding Studio",
  description: "A creative strategic branding studio based in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> <head>
      <GoogleTagManager gtmId="GTM-N3XNDFP5"/>
      <head/>
      <body
        className={`${poppins.variable}  ${unbounded.variable} `}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
