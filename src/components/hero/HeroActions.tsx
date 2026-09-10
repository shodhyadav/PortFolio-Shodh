"use client";

import { FaArrowRight as ArrowRight } from "react-icons/fa6";

import { gsap, prefersReducedMotion } from "../../utils/motion";
import { scrollToSection } from "../../hooks/useSmoothScroll";

export default function HeroActions() {
  const magnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return;

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const reset = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "elastic.out(1,0.4)",
    });
  };

  return (
    <div className="mt-16 flex flex-wrap items-center gap-6">

      {/* Primary */}

      <a
        href="#work"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#work");
        }}
        onMouseMove={magnetic}
        onMouseLeave={reset}
        className="
        group
        relative
        overflow-hidden
        rounded-full
        bg-white
        px-8
        py-5
        text-black
        transition-all
        duration-300
        hover:shadow-[0_0_60px_rgba(59,130,246,.35)]
      "
      >
        <span
          className="
          absolute
          inset-0
          scale-x-0
          origin-left
          bg-gradient-to-r
          from-blue-500
          to-violet-500
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
        />

        <span
          className="
          relative
          z-10
          flex
          items-center
          gap-3
          font-semibold
          text-[#050816]
          transition-colors
          duration-300
          group-hover:text-white
        "
        >
          Explore Work

          <ArrowRight
            className="
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
          />
        </span>
      </a>

      {/* Secondary */}

      <a
        href="/resume.pdf"
        onMouseMove={magnetic}
        onMouseLeave={reset}
        className="
        group
        rounded-full
        border
        border-white/15
        bg-white/5
        px-8
        py-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/60
        hover:bg-white/10
      "
      >
        <span
          className="
          flex
          items-center
          gap-3
          text-white
          transition
          duration-300
          group-hover:text-blue-400
        "
        >
          Download Resume

          <ArrowRight
            className="
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
          />
        </span>
      </a>

    </div>
  );
}