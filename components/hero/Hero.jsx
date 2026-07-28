"use client";

import { useEffect, useRef } from "react";
//import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const hero = useRef();

 

  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div
        ref={hero}
        className="max-w-7xl grid lg:grid-cols-2 gap-20 items-center"
      >

        <div>

          <p className="text-purple-400">
            Hello, I'm
          </p>

          <h1 className="text-7xl font-black mt-4">
            Mallikarjun
          </h1>

          <h2 className="mt-5 text-4xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Next.js Developer
          </h2>

          <p className="mt-8 text-gray-400 leading-8">
            Building beautiful web experiences
            using Next.js, React, Tailwind CSS,
            GSAP and Framer Motion.
          </p>

          <div className="flex gap-5 mt-10">

            <MagneticButton
              className="
              bg-purple-600
              px-8
              py-4
              rounded-full"
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              className="
              border
              border-purple-500
              px-8
              py-4
              rounded-full"
            >
              Download CV
            </MagneticButton>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <FaGithub />
            <FaLinkedin />
          </div>

        </div>

        <div className="flex justify-center">

          <div
            className="
            relative
            w-[420px]
            h-[420px]
            rounded-full
            bg-gradient-to-br
            from-purple-600
            to-pink-500
            p-1"
          >

            <div
              className="
              rounded-full
              w-full
              h-full
              bg-[#090d18]
              flex
              items-center
              justify-center"
            >
              <img
                src="C:\Users\Admin\OneDrive\Documents\portfoliomallikarjun\public\profile.jpeg"
                alt=""
                className="w-80 h-80 rounded-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}