"use client";
import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className={`nav-wrap${open ? " menu-open" : ""}`}><Link className="logo" href="/" aria-label="Qamar Abbas digital marketing portfolio" onClick={close}><span>QA</span>Qamar Abbas</Link><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><i/><i/></button><nav id="primary-navigation" aria-label="Primary navigation"><Link href="/work" onClick={close}>Case Studies</Link><Link href="/creatives" onClick={close}>Creative Portfolio</Link><Link href="/about" onClick={close}>About</Link><Link href="/contact" onClick={close}>Contact</Link></nav><Link className="nav-cta" href="/contact" onClick={close}>Discuss a project <span aria-hidden="true">→</span></Link></header>;
}
