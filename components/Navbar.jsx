"use client";

import { motion } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold gradient-text">Mallikarjun</h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}