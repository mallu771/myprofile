"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold text-center gradient-text mb-10"
        >
          Contact Me
        </motion.h2>

        <form className="space-y-6">

          <input
            placeholder="Your Name"
            className="w-full bg-white/5 p-4 rounded-xl border border-purple-500/20 outline-none"
          />

          <input
            placeholder="Email"
            type="email"
            className="w-full bg-white/5 p-4 rounded-xl border border-purple-500/20 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full bg-white/5 p-4 rounded-xl border border-purple-500/20 outline-none"
          />

          <button
            className="bg-purple-600 px-8 py-4 rounded-xl hover:bg-purple-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}