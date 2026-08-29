export const creativeImages = Array.from({ length: 25 }, (_, index) => ({
  src: `/images/qamar/creatives/creative-${String(index + 1).padStart(2, "0")}${index < 10 ? ".png" : ".jpeg"}`,
  alt: `Social media creative ${index + 1}`,
}));

const metaImageDetails = [
  {
    title: "Campaign Overview",
    detail: "High-level Meta Ads table view used to review campaign status, delivery, spend and early performance signals before optimizing.",
  },
  {
    title: "Active Campaign Review",
    detail: "Campaign-level reporting screen showing how active ad campaigns are monitored for reach, impressions, clicks and result movement.",
  },
  {
    title: "Ad Set Performance",
    detail: "Ad-set breakdown used to compare audiences, budgets and delivery quality across the same campaign objective.",
  },
  {
    title: "Cost Control Check",
    detail: "Performance view focused on cost per result, helping decide which campaigns need budget scaling, pausing or creative refresh.",
  },
  {
    title: "Traffic Quality Review",
    detail: "Reporting screen used to judge click quality through CTR, CPC, landing page views and traffic engagement indicators.",
  },
  {
    title: "Purchase Funnel View",
    detail: "Conversion-focused dashboard view connecting paid clicks with checkout activity, purchases and cost efficiency.",
  },
  {
    title: "Creative Test Evidence",
    detail: "Ad reporting view used to compare creatives and understand which message or visual direction is getting stronger response.",
  },
  {
    title: "Audience Delivery Snapshot",
    detail: "Audience and delivery data used to understand whether spend is reaching the right segment at a useful frequency.",
  },
  {
    title: "Optimization Window",
    detail: "A working reporting view for identifying underperforming rows, stronger campaign pockets and next optimization actions.",
  },
  {
    title: "Campaign Scaling Review",
    detail: "Dashboard evidence for reviewing whether performance can support budget increases without losing result quality.",
  },
  {
    title: "Retargeting Signal View",
    detail: "Performance table used to inspect warmer-audience activity such as product interest, checkout behavior and purchase response.",
  },
  {
    title: "Sales Objective Tracking",
    detail: "Meta Ads sales reporting view focused on purchase outcomes and the cost required to generate those results.",
  },
  {
    title: "Engagement Performance",
    detail: "Campaign evidence showing how ads are building interaction signals that support stronger traffic and remarketing pools.",
  },
  {
    title: "Daily Performance Check",
    detail: "A snapshot-style view used for daily monitoring of spend, delivery changes and short-term campaign movement.",
  },
  {
    title: "Result Quality Comparison",
    detail: "Side-by-side campaign data used to compare results across multiple ad sets or campaign rows without mixing reporting windows.",
  },
  {
    title: "Landing Page View Analysis",
    detail: "Traffic reporting used to separate basic link clicks from stronger landing-page engagement and post-click intent.",
  },
  {
    title: "ROAS And Purchase Review",
    detail: "Conversion reporting screen used to evaluate purchase value, return indicators and paid media efficiency.",
  },
  {
    title: "Account Learning View",
    detail: "Dashboard evidence showing campaign learning signals, result changes and practical performance monitoring inside Ads Manager.",
  },
  {
    title: "Complete Reporting Context",
    detail: "A supporting account view kept in the archive so the case study shows the full supplied evidence set, not only the best screenshots.",
  },
  {
    title: "Featured Account Summary",
    detail: "Primary case-study screenshot showing 46 campaigns, 1,098 purchases, 973,873 impressions and 3.23% all-click CTR in one view.",
  },
];

export const metaImages = metaImageDetails.map((item, index) => ({
  src: `/images/qamar/meta-ads/meta-ads-result-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Updated Meta Ads performance dashboard ${index + 1}: ${item.title}`,
  title: item.title,
  detail: item.detail,
  meta: `Meta Ads evidence ${String(index + 1).padStart(2, "0")} / 20`,
}));

export const shopifyImages = Array.from({ length: 20 }, (_, index) => ({
  src: `/images/qamar/shopify/shopify-case-study-2026-${String(index + 1).padStart(2, "0")}.png`,
  alt: `Shopify performance dashboard ${index + 1}`,
}));

export const caseStudies = [
  { slug: "meta-ads", eyebrow: "Paid Social", title: "Meta Ads Performance Archive", summary: "Campaign and ad-set reporting across multiple accounts, objectives and reporting windows.", cover: "/images/qamar/homepagepics/Meta Home Pic.jpeg", count: 20 },
  { slug: "shopify-growth", eyebrow: "E-commerce", title: "Shopify Growth Dashboards", summary: "Commerce reporting across sales, sessions, orders and conversion-rate movement.", cover: "/images/qamar/homepagepics/Shopify Home pic.jpeg", count: 20 },
];
