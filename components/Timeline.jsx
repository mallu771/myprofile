"use client";

import { motion } from "framer-motion";

export default function Timeline({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative border-l-2 border-purple-500 pl-8 pb-10"
    >
      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>

      <h3 className="text-2xl font-bold">{item.role}</h3>

      <p className="text-purple-400 mt-2">
        {item.company}
      </p>

      <span className="text-gray-400 text-sm">
        {item.duration}
      </span>

      <p className="text-gray-400 mt-4 leading-7">
        {item.description}
      </p>
    </motion.div>
  );
}