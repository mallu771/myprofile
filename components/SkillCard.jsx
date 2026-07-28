"use client";

import { motion } from "framer-motion";

export default function SkillCard({ skill }) {

  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -10,
      }}
      className="rounded-2xl p-8 bg-white/5 border border-purple-500/20 text-center"
    >
      <Icon className="text-5xl mx-auto text-purple-400" />

      <h3 className="mt-6 font-semibold">
        {skill.name}
      </h3>
    </motion.div>
  );
}