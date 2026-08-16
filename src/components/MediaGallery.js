"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function MediaGallery({ images, label = "Gallery" }) {
  const [active, setActive] = useState(null);
  const activeImage = active !== null ? images[active] : null;

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (active === null) return;
      if (event.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActive((active + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, images.length]);

  return (
    <>
      <div className="media-gallery">
        {images.map((image, index) => (
          <button className="gallery-item" onClick={() => setActive(index)} key={image.src} aria-label={`Open ${label} image ${index + 1}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            <span>{String(index + 1).padStart(2, "0")}</span>
            {image.title && (
              <div className="gallery-caption">
                <small>{image.meta}</small>
                <strong>{image.title}</strong>
                <p>{image.detail}</p>
              </div>
            )}
          </button>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${label} image preview`} onClick={() => setActive(null)}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close preview">x</button>
          <button className="lightbox-arrow prev" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + images.length) % images.length); }} aria-label="Previous image">&lt;</button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="95vw" />
          </div>
          <button className="lightbox-arrow next" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % images.length); }} aria-label="Next image">&gt;</button>
          <div className="lightbox-caption" onClick={(event) => event.stopPropagation()}>
            <span>{active + 1} / {images.length}</span>
            {activeImage.title && <h3>{activeImage.title}</h3>}
            {activeImage.detail && <p>{activeImage.detail}</p>}
          </div>
        </div>
      )}
    </>
  );
}
