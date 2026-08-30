import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <span>(c) {new Date().getFullYear()} Qamar Abbas</span>
      <span>Meta Ads / Shopify growth / Social media marketing</span>
      <Link href="/contact">Discuss your project <span aria-hidden="true">→</span></Link>
    </footer>
  );
}
