"use client";

import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../../utils/motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const root = document.documentElement;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
    root.classList.add("has-custom-cursor");

    const xDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const move = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const enter = () =>
      gsap.to(ring, { scale: 2.4, opacity: 0.6, duration: 0.3, ease: "power3.out" });
    const leave = () =>
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" });

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-9 w-9 rounded-full border border-white/70 mix-blend-difference md:block"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 rounded-full bg-white mix-blend-difference md:block"
      />
    </>
  );
}
