"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pillars = ["FULL STACK", "INTEGRATION", "AGENTIC AI"];

export default function LoaderText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % pillars.length);
    }, 520);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 text-center"
    >
      {/* Rotating craft pillars */}
      <div className="mb-8 h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="text-sm uppercase tracking-[0.45em] text-blue-400"
          >
            {pillars[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-black tracking-[-0.08em] text-white md:text-8xl"
        >
          WELCOME .....
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-black tracking-[-0.08em] text-white md:text-8xl"
        >
          
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-8 text-xs uppercase tracking-[0.35em] text-slate-500 md:text-sm"
      >
        Enterprise Software Engineer
      </motion.p>
    </motion.div>
  );
}