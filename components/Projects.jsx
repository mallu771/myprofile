"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Projects"
          subtitle="Some of my recent work."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}