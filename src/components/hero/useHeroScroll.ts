"use client";

import { useEffect } from "react";

import { gsap, prefersReducedMotion } from "../../utils/motion";

export default function useHeroScroll() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const title = hero.querySelector(".hero-title");
      const description = hero.querySelector(".hero-description");
      const buttons = hero.querySelector(".hero-buttons");
      const visual = hero.querySelector(".hero-visual");

      const glow1 = hero.querySelector(".glow-1");
      const glow2 = hero.querySelector(".glow-2");
      const glow3 = hero.querySelector(".glow-3");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=120%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
      .to(
        title,
        {
          y: -180,
          scale: 0.85,
          opacity: 0.2,
          ease: "none",
        },
        0
      )
      .to(
        description,
        {
          y: -120,
          opacity: 0,
          ease: "none",
        },
        0
      )
      .to(
        buttons,
        {
          y: -80,
          opacity: 0,
          ease: "none",
        },
        0
      )
      .to(
        glow1,
        {
          x: -250,
          y: -120,
          scale: 1.5,
          ease: "none",
        },
        0
      )
      .to(
        glow2,
        {
          x: 250,
          y: 150,
          scale: 1.5,
          ease: "none",
        },
        0
      )
      .to(
        glow3,
        {
          scale: 2,
          opacity: 0,
          ease: "none",
        },
        0
      )
      .to(
        hero,
        {
          scale: 0.95,
          filter: "blur(8px)",
          ease: "none",
        },
        0
      );

      if (visual) {
        timeline.to(
          visual,
          {
            y: -100,
            opacity: 0,
            ease: "none",
          },
          0
        );
      }
    }, hero as HTMLElement);

    return () => ctx.revert();
  }, []);
}