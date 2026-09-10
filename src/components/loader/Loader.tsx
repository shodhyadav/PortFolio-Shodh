"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoaderText from "./LoaderText";
import LoaderBackground from "./LoaderBackground";

interface Props {
  onFinish: () => void;
}

export default function Loader({ onFinish }: Props) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1700;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // Ease-out for a weighty, cinematic count.
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onFinish();
      }, 500);

    }, 1900);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>

      {visible && (

        <motion.div
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="
          fixed
          inset-0
          z-[999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#050816]
          "
        >
          <LoaderBackground />

          <LoaderText />

          {/* Cinematic counter */}
          <div className="absolute bottom-10 left-8 right-8 flex items-end justify-between lg:bottom-14 lg:left-20 lg:right-20">
            <span className="text-[14vw] font-black leading-none tracking-tighter text-white/5 lg:text-[9vw]">
              {count}
            </span>
            <span className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
              Loading
            </span>
          </div>

          {/* Progress line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-[width] duration-100 ease-out"
              style={{ width: `${count}%` }}
            />
          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}