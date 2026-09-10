"use client";

import IdentityCards from "./IdentityCards";
import useIdentityAnimation from "./useIdentityAnimation";
import { profile } from "../../data/profile";

export default function Identity() {
  useIdentityAnimation();

  return (
    <section
      id="identity"
      className="
      relative
      mx-auto
      w-full
      max-w-[1500px]
      px-6
      py-32
      lg:px-20
      "
    >
      <span
        className="
        identity-tag
        inline-block
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-2
        text-sm
        font-medium
        tracking-wide
        text-blue-400
        "
      >
        What I Do
      </span>

      <h2
        className="
        identity-title
        mt-8
        max-w-4xl
        text-4xl
        font-bold
        leading-tight
        text-white
        md:text-6xl
        "
      >
        Engineering enterprise systems that{" "}
        <span className="accent-serif bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text pr-1 text-transparent">
          scale, integrate and adapt
        </span>
        .
      </h2>

      <IdentityCards />

      <div className="identity-tag mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-14 md:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <div className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
              {stat.value}
            </div>
            <div className="mt-3 text-sm uppercase tracking-wider text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}