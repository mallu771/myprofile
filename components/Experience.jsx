"use client";

import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Experience"
          subtitle="My professional journey."
        />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <Timeline key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}