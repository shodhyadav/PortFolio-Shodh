"use client";

import { useEffect } from "react";

import { gsap, prefersReducedMotion } from "../../utils/motion";

export default function useJourneyAnimation() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".journey-tag", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#experience",
          start: "top 75%",
        },
      });

      gsap.from(".journey-title", {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: "#experience",
          start: "top 70%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 120,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}