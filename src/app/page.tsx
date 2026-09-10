"use client";

import { useState } from "react";

import Loader from "../components/loader";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import Identity from "../components/identity/Identity";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Journey from "../components/journey/Journey";
import Contact from "../components/contact/Contact";
import SmoothScroll from "../components/providers/SmoothScroll";
import CustomCursor from "../components/cinematic/CustomCursor";
import ScrollProgress from "../components/cinematic/ScrollProgress";
import GrainOverlay from "../components/cinematic/GrainOverlay";
import Marquee from "../components/cinematic/Marquee";
import Statement from "../components/cinematic/Statement";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <Loader onFinish={() => setLoaded(true)} />
      ) : (
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <GrainOverlay />
          <Navbar />
          <main className="overflow-x-hidden bg-[#050816] text-white">
            <Hero />
            <Identity />
            <Marquee />
            <Skills />
            <Projects />
            <Statement />
            <Journey />
            <Contact />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}