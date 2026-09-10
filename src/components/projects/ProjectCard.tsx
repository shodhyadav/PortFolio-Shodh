"use client";

import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import type { Project } from "../../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer noopener"
      className="project-card group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 md:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-400">
          {project.category}
        </span>
        <FaGithub className="text-xl text-slate-500 transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="relative z-10 mt-8 text-2xl font-bold text-white md:text-3xl">
        {project.title}
      </h3>

      <p className="relative z-10 mt-4 flex-1 leading-8 text-slate-400">
        {project.description}
      </p>

      <div className="relative z-10 mt-8 flex flex-wrap gap-2.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-semibold text-white">
        View on GitHub
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </a>
  );
}
