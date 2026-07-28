"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setWidth((scrollTop / total) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-purple-500 z-[100]"
      style={{ width: `${width}%` }}
    />
  );
}