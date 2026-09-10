"use client";

import HeroBackground from "./HeroBackground";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroActions from "./HeroActions";
import HeroProfile from "./HeroProfile";
import HeroScrollIndicator from "./HeroScrollIndicator";
import useHeroScroll from "./useHeroScroll";

export default function Hero() {
  useHeroScroll();
  return (
    <section
      id="home"
      className="
      hero
      relative
      flex
      min-h-screen
      items-center
      overflow-hidden
      bg-[#050816]
      "
    >
      <HeroBackground />

      <div
        className="
        relative
        z-20
        mx-auto
        flex
        w-full
        max-w-[1500px]
        flex-col
        gap-16
        px-8
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-12
        lg:px-20
        "
      >
        <div className="w-full lg:max-w-[60%]">
          <div className="hero-title">
            <HeroHeading />
          </div>

          <div className="hero-description">
            <HeroDescription />
          </div>

          <div className="hero-buttons">
            <HeroActions />
          </div>
        </div>

        <div className="hero-visual hidden lg:block lg:flex-shrink-0">
          <HeroProfile />
        </div>
      </div>
      <HeroScrollIndicator />
    </section>
  );
}