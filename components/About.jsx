"use client";

import SectionTitle from "./SectionTitle";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Software Engineer passionate about building modern, scalable and user-friendly web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
              Software Engineer
            </h3>

            <p className="text-gray-400 leading-8 text-justify">
              I am a Full Stack Developer with <strong>2.5+ years</strong> of
              experience building responsive, scalable and high-performance web
              applications using React.js, Next.js, Svelte, JavaScript,
              TypeScript, Tailwind CSS, GraphQL, PostgreSQL, Express.js and
              Node.js.
            </p>

            <p className="text-gray-400 leading-8 mt-6 text-justify">
              I enjoy solving real-world problems, designing intuitive user
              interfaces, and developing secure backend systems. I'm
              continuously learning technologies like Docker, Kafka and System
              Design to build modern cloud-ready applications.
            </p>

            <div className="mt-10">
              <Stats />
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h4 className="text-2xl font-semibold mb-8 text-center">
              Personal Information
            </h4>

            <div className="space-y-5">
              {[
                ["Name", "Mallikarjun Bajantri"],
                ["Experience", "2.5+ Years"],
                ["Location", "Karnataka, India"],
                ["Role", "Software Engineer"],
                ["Frontend", "React • Next.js • Svelte"],
                ["Backend", "Node.js • Express • GraphQL"],
                ["Database", "PostgreSQL • MySQL"],
                ["Languages", "Kannada • English • Telugu"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-zinc-800 pb-4 last:border-none"
                >
                  <p className="text-sm text-gray-500">{label}</p>

                  <p className="mt-1 text-white font-medium break-words">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}