"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2.5+",
    title: "Years Experience",
  },
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "100%",
    title: "Responsive",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {stats.map((item) => (

        <motion.div
          whileHover={{ scale: 1.05 }}
          key={item.title}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
        >
          <h2 className="text-4xl font-bold text-purple-400">
            {item.number}
          </h2>

          <p className="mt-2 text-gray-300">
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>
  );
}