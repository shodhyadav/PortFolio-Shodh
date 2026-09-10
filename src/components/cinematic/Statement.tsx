"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";

import { gsap, prefersReducedMotion } from "../../utils/motion";

const text =
  "I turn complex enterprise problems into elegant, scalable systems — bridging integration, cloud and intelligent automation into products people trust.";

export default function Statement() {
  const root = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current || prefersReducedMotion()) return;

    const split = new SplitType(textRef.current, { types: "words" });
    if (!split.words) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }, root);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative mx-auto max-w-[1300px] px-6 py-40 lg:px-20"
    >
      <span className="mb-10 block text-sm font-medium uppercase tracking-[0.45em] text-blue-400">
        Philosophy
      </span>
      <p
        ref={textRef}
        className="serif-display text-3xl leading-[1.4] text-white md:text-5xl md:leading-[1.3] lg:text-[66px] lg:leading-[1.24]"
      >
        {text}
      </p>
    </section>
  );
}
