"use client";

import { useEffect } from "react";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../../utils/motion";

export default function useIdentityAnimation() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const section = document.querySelector("#identity");
      if (!section) return;

      const tag = section.querySelectorAll(".identity-tag");
      const title = section.querySelector(".identity-title");
      const cards = section.querySelectorAll(".identity-card");

      gsap.set(tag, { opacity: 0, y: 30 });
      gsap.set(title, { opacity: 0, y: 100 });
      gsap.set(cards, { opacity: 0, y: 80 });

      ScrollTrigger.create({
        trigger: "#identity",
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap
            .timeline()
            .to(tag, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
            .to(
              title,
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
              "-=0.3"
            )
            .to(
              cards,
              {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.3"
            );
        },
      });
    });

    return () => ctx.revert();
  }, []);
}