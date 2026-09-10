"use client";

import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../../utils/motion";

const lines = [
  "BUILDING",
  "DIGITAL",
  "SYSTEMS",
];

export default function HeroHeading() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const words =
        titleRef.current!.querySelectorAll(".hero-line");

      const tag =
        titleRef.current!.querySelector(".hero-tag");

      const underline =
        titleRef.current!.querySelector(".hero-underline");

      gsap.set(words, {
        y: 180,
        opacity: 0,
      });

      gsap.set(tag, {
        opacity: 0,
        y: -20,
      });

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
      });

      const tl = gsap.timeline({
        delay: 0.3,
      });

      tl.to(tag, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.to(
        words,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power4.out",
        },
        "-=0.2"
      );

      tl.to(
        underline,
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={titleRef}
      className="relative max-w-[1200px]"
    >
      {/* Tag */}

      <p
        className="
        hero-tag
        mb-8
        text-xs
        font-medium
        uppercase
        tracking-[0.7em]
        text-blue-400
        md:text-sm
      "
      >
        SHODH YADAV • FULL STACK • INTEGRATION • AI
      </p>

      {/* Title */}

      <div
        className="
        space-y-1
        overflow-hidden
      "
      >
        {lines.map((line) => (
          <div
            key={line}
            className="overflow-hidden"
          >
            <h1
              className="
              hero-line
              text-[54px]
              font-black
              leading-[0.88]
              tracking-[-0.08em]
              text-white

              sm:text-[70px]

              lg:text-[92px]

              xl:text-[112px]

              2xl:text-[128px]
            "
            >
              {line}
            </h1>
          </div>
        ))}
      </div>

      {/* Underline */}

      <div
        className="
        hero-underline
        mt-10
        h-[2px]
        w-[180px]
        rounded-full
        bg-gradient-to-r
        from-blue-500
        to-violet-500
      "
      />
    </div>
  );
}