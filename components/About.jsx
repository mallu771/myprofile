"use client";

import SectionTitle from "./SectionTitle";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Software Engineer passionate about building fast and responsive applications."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h3 className="text-4xl font-bold mb-8">
              Software Engineer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I have 2.5+ years of experience building responsive,
              scalable web applications using React.js, Svelte,
              JavaScript, TypeScript, Tailwind CSS, GraphQL,
              PostgreSQL, Express.js, and Node.js.
            </p>

            <p className="text-gray-400 leading-8">
              I enjoy solving real-world problems, designing clean
              user interfaces, and developing secure, high-performance
              web applications. I continuously learn modern technologies
              like Docker, Kafka, and System Design to improve my
              development skills.
            </p>

            <div className="mt-10">
              <Stats />
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h4 className="text-2xl font-semibold mb-6">
              Personal Information
            </h4>

            <div className="space-y-5">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Name</span>
                <span>Mallikarjun Bajantri</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Experience</span>
                <span>2.5+ Years</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Location</span>
                <span>Karnataka, India</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Specialization</span>
                <span>Full Stack Development</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Frontend</span>
                <span>React, Next.js, Svelte</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Backend</span>
                <span>Node.js, Express, GraphQL</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-gray-400">Database</span>
                <span>PostgreSQL, MySQL</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Languages</span>
                <span>Kannada, English, Telugu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}