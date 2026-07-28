"use client";

import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Skills"
          subtitle="Technologies I use to build modern web applications."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}

        </div>

      </div>

    </section>
  );
}