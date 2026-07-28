"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/10 blur-3xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}