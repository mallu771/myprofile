"use client";

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
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      w-[92%]
      max-w-7xl
      rounded-full
      backdrop-blur-xl
      border
      border-white/10
      bg-white/5
      px-8
      py-4
      flex
      justify-between
      items-center
      z-50"
    >

      <h1 className="font-bold text-xl">
        Mallikarjun
      </h1>

      <div className="hidden lg:flex gap-8">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-purple-400"
          >
            {item}
          </a>
        ))}
      </div>

      <MagneticButton
        className="
        px-6
        py-3
        rounded-full
        bg-purple-600
        hover:bg-purple-700"
      >
        Hire Me
      </MagneticButton>

    </nav>
  );
}