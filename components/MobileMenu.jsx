"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0b1022] border-t border-purple-500/20">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-purple-600/20"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}