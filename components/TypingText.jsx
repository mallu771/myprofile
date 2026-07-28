"use client";

import { useEffect, useState } from "react";

const words = [
  "Frontend Developer",
  "React Developer",
  "Next.js Developer",
  "UI Developer",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const word = words[index];
    let i = 0;

    const interval = setInterval(() => {
      setText(word.slice(0, i));
      i++;

      if (i > word.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <h2 className="text-3xl text-purple-400 font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}