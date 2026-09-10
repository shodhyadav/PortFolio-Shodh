"use client";

import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

import { gsap, prefersReducedMotion } from "../../utils/motion";
import { profile } from "../../data/profile";
import { certifications, education } from "../../data/certifications";

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, href: profile.socials.email, label: "Email" },
  { icon: FaPhone, href: profile.socials.phone, label: "Phone" },
];

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.8,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative overflow-hidden border-t border-white/10 bg-[#050816]"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-600/10 blur-[200px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-32 lg:px-20">
        {/* Certifications */}
        <div className="contact-reveal">
          <span className="text-sm font-medium uppercase tracking-[0.45em] text-blue-400">
            Certifications
          </span>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
              >
                <span className="font-semibold text-white">{cert.title}</span>
                <span className="text-sm text-blue-400">{cert.issuer}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-400">
            <span className="text-white">{education.degree}</span> ·{" "}
            {education.school} · {education.period}
          </p>
        </div>

        {/* CTA */}
        <div className="contact-reveal mt-28 max-w-4xl">
          <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
            Let&apos;s build
            <br />
            something{" "}
            <span className="accent-serif bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text pr-2 text-transparent">
              great
            </span>
            .
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Have a project, a role or an idea worth building? I&apos;m always
            open to a good conversation.
          </p>

          <a
            href={profile.socials.email}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 font-semibold text-[#050816] transition-all duration-300 hover:shadow-[0_0_60px_rgba(59,130,246,.35)]"
          >
            {profile.email}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Socials */}
        <div className="contact-reveal mt-20 flex flex-wrap gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={label}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
