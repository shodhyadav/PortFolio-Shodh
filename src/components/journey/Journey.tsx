"use client";

import { experience } from "../../data/experience";
import JourneyItem from "./JourneyItem";
import useJourneyAnimation from "./useJourneyAnimation";

export default function Journey() {
  useJourneyAnimation();

  return (
    <section
      id="experience"
      className="
      relative
      bg-[#050816]
      py-32
      "
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-20">

        <p
          className="
          journey-tag
          uppercase
          tracking-[0.45em]
          text-blue-400
        "
        >
          EXPERIENCE
        </p>

        <h2
          className="
          journey-title
          mt-8
          max-w-5xl
          text-[56px]
          font-black
          leading-[0.9]
          tracking-[-0.06em]
          text-white
          md:text-[72px]
          lg:text-[90px]
        "
        >
          Where I&apos;ve
          <br />
          made impact.
        </h2>

        <div className="mt-24 border-t border-white/10">

          {experience.map((item) => (
            <JourneyItem
              key={item.company}
              {...item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}