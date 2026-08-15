"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selectors = [
      ".section-head", ".page-hero > *", ".case-hero > *",
      ".number-grid article", ".study-stats article", ".case-study-card",
      ".service-card", ".case-narrative article", ".gallery-heading",
      ".gallery-item", ".contact-cards > a", ".timeline-item",
      ".education-card", ".skill-chip", ".personal-card", ".reference-card",
    ];
    const elements = document.querySelectorAll(selectors.join(","));
    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 6) * 55}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
