"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/src/app/home.module.css";

export function HomePortrait({ profile, highlights }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const escape = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", escape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", escape); document.body.style.overflow = ""; };
  }, [open]);
  const modal = open ? <div className={styles.overlay} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="experience-title"><header><div><span>About Qamar Abbas</span><h2 id="experience-title">Experience highlights</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="Close experience highlights">×</button></header><ul>{highlights.map((highlight, index) => <li className={index < 4 ? styles.stat : undefined} key={highlight}>{highlight}</li>)}</ul></section></div> : null;
  return <div className={`portrait-stage ${styles.stage}`} onMouseEnter={() => setOpen(true)}><button className={styles.imageButton} type="button" onClick={() => setOpen(true)} aria-label="Show experience highlights"/><div className="portrait-word" aria-hidden="true">QAMAR</div><div className="portrait-frame"><Image src="/images/qammer/profile/qamar-abbas-founder.jpg" alt="Qamar Abbas, Meta Ads and Shopify growth specialist" fill priority sizes="(max-width:900px) 100vw,50vw"/></div><div className={styles.profile}><div className={styles.name}><div><span>Performance marketer</span><b>{profile.name}</b></div><Link href="/contact">Contact me <span aria-hidden="true">→</span></Link></div><div className={styles.prompt}>View experience highlights <span aria-hidden="true">+</span></div></div><div className="hero-scroll-cue" aria-hidden="true">Scroll</div>{modal}</div>;
}
