"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion";
import { isPhone } from "../utils/device";

let lenisInstance: Lenis | null = null;

/** Smoothly scroll to a section; falls back to native scroll when Lenis is off. */
export function scrollToSection(target: string) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -20, duration: 1.2 });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Drives Lenis smooth scrolling and keeps GSAP ScrollTrigger in sync with it.
 * Disabled automatically when the user prefers reduced motion.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || isPhone()) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Layout is final now that content has mounted; recompute trigger positions.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
