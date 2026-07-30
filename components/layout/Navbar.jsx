"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          w-[95%]
          max-w-7xl
          rounded-full
          backdrop-blur-xl
          border
          border-white/10
          bg-white/5
          px-5
          lg:px-8
          py-4
          flex
          justify-between
          items-center
          z-50
        "
      >
        {/* Logo */}
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
          Mallikarjun Bajantri
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-purple-400"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Hire Me */}
          <div className="hidden sm:block">
            <MagneticButton
              className="
                px-6
                py-3
                rounded-full
                bg-purple-600
                hover:bg-purple-700
                transition
              "
            >
              <a href="#contact">Hire Me</a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed
          top-24
          left-4
          right-4
          rounded-2xl
          bg-[#111827]/95
          backdrop-blur-xl
          border
          border-white/10
          shadow-xl
          transition-all
          duration-300
          lg:hidden
          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }
          z-40
        `}
      >
        <div className="flex flex-col py-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="
                px-6
                py-4
                text-lg
                border-b
                border-white/10
                hover:bg-purple-600/20
                hover:text-purple-400
                transition
              "
            >
              {item}
            </a>
          ))}

          <div className="p-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                block
                w-full
                text-center
                rounded-xl
                bg-purple-600
                hover:bg-purple-700
                py-3
                font-medium
                transition
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}