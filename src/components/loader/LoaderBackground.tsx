"use client";

import { motion } from "framer-motion";

export default function LoaderBackground() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        h-[900px]
        w-[900px]
        rounded-full
        bg-blue-600/20
        blur-[220px]
        "
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[1200px]
        w-[1200px]
        rounded-full
        border
        border-white/[0.05]
        "
      />
    </>
  );
}