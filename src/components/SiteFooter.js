import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <span>(c) {new Date().getFullYear()} Qamar Abbas</span>
      <span>Performance marketing / Social media / E-commerce</span>
      <Link href="/contact">Start a project -&gt;</Link>
    </footer>
  );
}
