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
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <motion.p
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:.2 }}
            className="text-purple-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ delay:.4 }}
            className="text-6xl font-black mt-3"
          >
            Mallikarjun
          </motion.h1>

          <motion.h2
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.6 }}
            className="text-3xl mt-4 gradient-text"
          >
            Software Engineer
          </motion.h2>

          <p className="text-gray-400 mt-8 leading-8">
            I build modern responsive web applications using
            Svelte, React, Next.js, Tailwind CSS,Shadcn UI, PostgreSQL,GraphQL and Node.js.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#projects"
              className="bg-purple-600 px-8 py-4 rounded-xl hover:bg-purple-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-purple-500 px-8 py-4 rounded-xl flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="flex gap-8 mt-12 text-5xl text-purple-400">
            <FaReact />
            <SiNextdotjs />
            <SiTailwindcss />
            <FaNodeJs />
            <FaGithub />
          </div>

        </div>

        <motion.div
          initial={{ scale:.8, opacity:0 }}
          animate={{ scale:1, opacity:1 }}
          transition={{ duration:.8 }}
          className="flex justify-center"
        >
          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 glow">
            <div className="bg-[#0b1022] rounded-full w-full h-full flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt="profile"
                className="rounded-full w-90 h-90 object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}