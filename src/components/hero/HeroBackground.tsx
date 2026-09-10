"use client";

import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../../utils/motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const glow1 = container.querySelector(".glow-1") as HTMLElement;
      const glow2 = container.querySelector(".glow-2") as HTMLElement;
      const glow3 = container.querySelector(".glow-3") as HTMLElement;
      const grid = container.querySelector(".hero-grid") as HTMLElement;

      const move = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;

        gsap.to(glow1, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 1.5,
          ease: "power3.out",
        });

        gsap.to(glow2, {
          x: x * -0.15,
          y: y * -0.15,
          duration: 2,
          ease: "power3.out",
        });

        gsap.to(glow3, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 2.5,
          ease: "power3.out",
        });

        gsap.to(grid, {
          x: x * 0.08,
          y: y * 0.08,
          duration: 2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);

      gsap.to(glow1, {
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glow2, {
        scale: 1.3,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glow3, {
        scale: 1.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => window.removeEventListener("mousemove", move);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Grid */}

      <div
        className="
        hero-grid
        absolute
        inset-0
        opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow 1 */}

      <div
        className="
        glow-1
        absolute
        -left-60
        -top-60
        h-[900px]
        w-[900px]
        rounded-full
        bg-blue-500/20
        blur-[180px]
        "
      />

      {/* Glow 2 */}

      <div
        className="
        glow-2
        absolute
        right-[-250px]
        bottom-[-250px]
        h-[900px]
        w-[900px]
        rounded-full
        bg-violet-600/20
        blur-[220px]
        "
      />

      {/* Glow 3 */}

      <div
        className="
        glow-3
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      {/* Rings */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[900px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/[0.04]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[1200px]
        w-[1200px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-white/[0.03]
        "
      />

      {/* Noise */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Vignette */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle,transparent_40%,#050816_100%)]
        "
      />
    </div>
  );
}