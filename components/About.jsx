"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="About Me"
          subtitle="Frontend Developer passionate about building fast and responsive applications."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

        
            <h3 className="text-4xl font-bold mb-8">
              Frontend Developer
            </h3>

            <p className="text-gray-400 leading-8">
              I have 2+ years of experience building responsive,
              scalable web applications using React.js, Next.js,
              JavaScript, Tailwind CSS and Express.js.
            </p>

            <div className="mt-10">
              <Stats />
            </div>

        </div>

      </div>
    </section>
  );
}