"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px]
        bg-purple-600/20 blur-[150px]
        rounded-full
        -top-32
        -left-32"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute
        bottom-0
        right-0
        w-[600px]
        h-[600px]
        rounded-full
        bg-pink-500/20
        blur-[170px]"
      />

    </div>
  );
}