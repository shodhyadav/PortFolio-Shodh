"use client";

import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

import { gsap, prefersReducedMotion } from "../../utils/motion";

export default function HeroScrollIndicator() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const line = root.current!.querySelector(".scroll-line");
      const dot = root.current!.querySelector(".scroll-dot");
      const text = root.current!.querySelectorAll(".scroll-letter");

      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.fromTo(
        line,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      tl.to(dot, {
        y: 70,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(dot, {
        opacity: 0,
        duration: 0.3,
      });

      tl.set(dot, {
        y: 0,
        opacity: 1,
      });

      gsap.from(text, {
        opacity: 0.25,
        stagger: 0.08,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
      });

      gsap.to(root.current, {
        opacity: 0,
        y: 80,
        scrollTrigger: {
          trigger: ".hero",
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="
      absolute
      bottom-12
      left-1/2
      z-30
      flex
      -translate-x-1/2
      flex-col
      items-center
      gap-5
      "
    >
      <div
        className="
        flex
        gap-[3px]
        text-[10px]
        font-medium
        tracking-[0.45em]
        text-slate-500
        "
      >
        {"SCROLL".split("").map((letter, index) => (
          <span
            key={index}
            className="scroll-letter"
          >
            {letter}
          </span>
        ))}
      </div>

      <div
        className="
        relative
        h-20
        w-[2px]
        overflow-hidden
        rounded-full
        bg-white/10
        "
      >
        <div
          className="
          scroll-line
          absolute
          left-0
          top-0
          h-full
          w-full
          rounded-full
          bg-gradient-to-b
          from-blue-500
          via-cyan-400
          to-violet-500
          "
        />

        <div
          className="
          scroll-dot
          absolute
          left-1/2
          top-0
          h-3
          w-3
          -translate-x-1/2
          rounded-full
          bg-white
          shadow-[0_0_20px_rgba(255,255,255,.9)]
          "
        />
      </div>

      <FaChevronDown
        className="
        text-xs
        text-slate-500
        animate-bounce
        "
      />
    </div>
  );
}