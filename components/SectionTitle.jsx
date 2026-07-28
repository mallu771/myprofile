"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold gradient-text">{title}</h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}