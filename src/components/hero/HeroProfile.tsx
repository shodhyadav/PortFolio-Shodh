"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLocationDot, FaBuilding } from "react-icons/fa6";

import { gsap, prefersReducedMotion } from "../../utils/motion";
import { profile } from "../../data/profile";
import { experience } from "../../data/experience";

const current = experience[0];
const stack = ["Spring Boot", "Angular", "Azure", "Agentic AI"];

export default function HeroProfile() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 1.1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[380px]">
      {/* Ambient glow */}
      <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-br from-blue-500/25 via-violet-500/20 to-cyan-500/25 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/images/shodh.jpg"
            alt={profile.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 380px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/10 to-transparent" />

          {/* Availability */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for work
          </div>

          {/* Name overlay */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xl font-bold text-white">{profile.name}</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
              <FaBuilding className="text-blue-400" />
              {current.role} @ {current.company}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="px-4 pb-3 pt-5">
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <FaLocationDot className="text-blue-400" />
            {profile.location}
          </div>
        </div>
      </div>
    </div>
  );
}
