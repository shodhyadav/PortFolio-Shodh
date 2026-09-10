"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import { scrollToSection } from "../../hooks/useSmoothScroll";
import { profile } from "../../data/profile";

const links = [
  { label: "About", target: "#identity" },
  { label: "Skills", target: "#skills" },
  { label: "Work", target: "#work" },
  { label: "Experience", target: "#experience" },
  { label: "Contact", target: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    scrollToSection(target);
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 lg:px-20">
        <button
          onClick={() => go("#home")}
          className="group flex items-center gap-2 text-lg font-black tracking-tight text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm">
            SY
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.target}
              onClick={() => go(link.target)}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.socials.resume}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050816] transition-transform duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={clsx(
              "h-0.5 w-6 bg-white transition-transform duration-300",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-6 bg-white transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "h-0.5 w-6 bg-white transition-transform duration-300",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => go(link.target)}
                className="text-left text-base font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.socials.resume}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#050816]"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
