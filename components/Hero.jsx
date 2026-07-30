"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 text-lg"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
          >
            Mallikarjun
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-400"
          >
            Software Engineer
          </motion.h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl mx-auto lg:mx-0">
            I build modern, scalable and responsive web applications using
            React.js, Next.js, Svelte, Tailwind CSS, Shadcn UI, GraphQL,
            PostgreSQL, Express.js and Node.js with a focus on clean UI and
            performance.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-xl font-medium"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 hover:bg-purple-500/10 transition px-8 py-4 rounded-xl flex items-center justify-center gap-2"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* Tech Icons */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-3xl sm:text-4xl lg:text-5xl text-purple-400">
            <FaReact className="hover:scale-110 transition" />
            <SiNextdotjs className="hover:scale-110 transition" />
            <SiTailwindcss className="hover:scale-110 transition" />
            <FaNodeJs className="hover:scale-110 transition" />
            <FaGithub className="hover:scale-110 transition" />
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-[#0b1022] flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jfif"
                alt="Mallikarjun"
                className="w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}