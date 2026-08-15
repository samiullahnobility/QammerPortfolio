export const creativeImages = Array.from({ length: 25 }, (_, index) => ({
  src: `/images/qamar/creatives/creative-${String(index + 1).padStart(2, "0")}${index < 10 ? ".png" : ".jpeg"}`,
  alt: `Social media creative ${index + 1}`,
}));

export const metaImages = Array.from({ length: 20 }, (_, index) => ({
  src: `/images/qamar/meta-ads/meta-ads-result-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Updated Meta Ads performance dashboard ${index + 1}`,
}));

export const shopifyImages = Array.from({ length: 16 }, (_, index) => ({
  src: `/images/qamar/shopify/shopify-dashboard-${String(index + 1).padStart(2, "0")}.png`,
  alt: `Shopify performance dashboard ${index + 1}`,
}));

export const caseStudies = [
  { slug: "meta-ads", eyebrow: "Paid Social", title: "Meta Ads Performance Archive", summary: "Campaign and ad-set reporting across multiple accounts, objectives and reporting windows.", cover: metaImages[19].src, count: 20 },
  { slug: "shopify-growth", eyebrow: "E-commerce", title: "Shopify Growth Dashboards", summary: "Commerce reporting across sales, sessions, orders and conversion-rate movement.", cover: shopifyImages[0].src, count: 16 },
];
