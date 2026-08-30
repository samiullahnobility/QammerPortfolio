import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { MediaGallery } from "@/src/components/MediaGallery";
import { creativeImages } from "@/src/data/media";
export const metadata = { title: "Social Media Creative Portfolio", description: "Explore 25 social media marketing creatives by Qamar Abbas, including product storytelling, campaign visuals and conversion-focused e-commerce content." };
export default function Creatives(){return <><SiteHeader/><main><section className="page-hero"><p className="section-index">Social media marketing · 25 creative assets</p><h1>Performance<br/><em>creative portfolio.</em></h1><p>Explore social-first product storytelling, creator-led visuals and campaign content designed to strengthen brand communication and support paid-media performance.</p></section><section className="gallery-section"><div className="gallery-heading"><h2>Social media campaign creatives</h2><span>Click any image to view the full design</span></div><MediaGallery images={creativeImages} label="Social media creative portfolio"/></section></main><SiteFooter/></>}
