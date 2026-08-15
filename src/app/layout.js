import { DM_Sans, Oswald } from "next/font/google";
import "./globals.css";
import "./profile-overrides.css";
import { MotionObserver } from "@/src/components/MotionObserver";

const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const displayFont = Oswald({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata = {
  title: "Qamar Abbas — Performance Marketer",
  description: "Selected Meta Ads, Shopify growth and social media creative work by Qamar Abbas.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${bodyFont.variable} ${displayFont.variable}`}><MotionObserver />{children}</body></html>;
}
