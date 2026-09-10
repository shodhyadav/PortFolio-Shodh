"use client";

import { useEffect, useRef } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

import { gsap, ScrollTrigger, prefersReducedMotion } from "../../utils/motion";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";
import ProjectCard from "./ProjectCard";
import SectionGlow from "../cinematic/SectionGlow";

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".projects-head", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });

      const cards = root.current!.querySelectorAll(".project-card");
      gsap.set(cards, { opacity: 0, y: 80 });
      ScrollTrigger.create({
        trigger: root.current!,
        start: "top 70%",
        once: true,
        onEnter: () =>
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          }),
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={root}
      className="relative mx-auto w-full max-w-[1500px] px-6 py-32 lg:px-20"
    >
      <SectionGlow />

      <div className="projects-head relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-blue-400">
            Selected Work
          </span>
          <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Things I&apos;ve{" "}
            <span className="accent-serif bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text pr-1 text-transparent">
              designed & built
            </span>
            .
          </h2>
        </div>

        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-3 self-start rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 md:self-auto"
        >
          <FaGithub className="text-lg" />
          All repositories
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
      </div>

      <div className="projects-grid relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
