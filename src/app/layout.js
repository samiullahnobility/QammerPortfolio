import "./globals.css";
import "./profile-overrides.css";
import { MotionObserver } from "@/src/components/MotionObserver";

export const metadata = {
  title: {
    default: "Qamar Abbas | Meta Ads & Shopify Growth Specialist",
    template: "%s | Qamar Abbas",
  },
  description: "Qamar Abbas is a digital marketer and Shopify specialist helping e-commerce brands grow through Meta Ads, conversion-focused stores, social media strategy and performance creative.",
  keywords: ["Meta Ads specialist", "Shopify developer", "e-commerce marketer", "social media marketer", "Facebook Ads manager", "Shopify growth specialist", "Qamar Abbas"],
  authors: [{ name: "Qamar Abbas" }],
  creator: "Qamar Abbas",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><MotionObserver />{children}</body></html>;
}
