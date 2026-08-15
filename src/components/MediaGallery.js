"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function MediaGallery({ images, label = "Gallery" }) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const close = (event) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <>
    <div className="media-gallery">{images.map((image, index) => <button className="gallery-item" onClick={() => setActive(index)} key={image.src} aria-label={`Open ${label} image ${index + 1}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${label} image preview`} onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close preview">×</button><button className="lightbox-arrow prev" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Previous image">←</button><div className="lightbox-image" onClick={(e) => e.stopPropagation()}><Image src={images[active].src} alt={images[active].alt} fill sizes="95vw" /></div><button className="lightbox-arrow next" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Next image">→</button><p>{active + 1} / {images.length}</p></div>}
  </>;
}
