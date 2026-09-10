"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../../utils/motion";
import { skillGroups } from "../../data/skills";
import SectionGlow from "../cinematic/SectionGlow";

export default function Skills() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".skills-head", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      const cards = root.current!.querySelectorAll(".skill-card");
      gsap.set(cards, { opacity: 0, y: 60 });
      ScrollTrigger.create({
        trigger: root.current!,
        start: "top 70%",
        once: true,
        onEnter: () =>
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
          }),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={root}
      className="relative mx-auto w-full max-w-[1500px] px-6 py-32 lg:px-20"
    >
      <SectionGlow />

      <div className="skills-head relative z-10">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-blue-400">
          Toolbox
        </span>
        <h2 className="mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          The stack I use to ship{" "}
          <span className="accent-serif bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text pr-1 text-transparent">
            production systems
          </span>
          .
        </h2>
      </div>

      <div className="skills-grid relative z-10 mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="skill-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 transition-colors duration-300 group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
