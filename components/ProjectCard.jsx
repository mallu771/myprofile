"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-2xl overflow-hidden bg-white/5 border border-purple-500/20"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-8">

          <a href={project.github}>
            <FaGithub size={24} />
          </a>

          <a href={project.demo}>
            <FaExternalLinkAlt size={22} />
          </a>

        </div>

      </div>
    </motion.div>
  );
}