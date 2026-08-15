import { SiteHeader } from "@/src/components/SiteHeader";
import { SiteFooter } from "@/src/components/SiteFooter";
import { MediaGallery } from "@/src/components/MediaGallery";
import { creativeImages } from "@/src/data/media";
export const metadata = { title: "Creative Portfolio — Qamar Abbas" };
export default function Creatives(){return <><SiteHeader/><main><section className="page-hero"><p className="section-index">25 supplied assets · Complete collection</p><h1>Creative<br/><em>direction.</em></h1><p>Social-first product storytelling, creator-led visuals and campaign content from the supplied creative archive.</p></section><section className="gallery-section"><div className="gallery-heading"><h2>All creatives</h2><span>Click any image to explore</span></div><MediaGallery images={creativeImages} label="Creative portfolio"/></section></main><SiteFooter/></>}
