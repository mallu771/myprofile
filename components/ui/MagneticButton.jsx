"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className,
  ...props
}) {
  const ref = useRef();

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform =
      `translate(${x * 0.18}px,${y * 0.18}px)`;
  };

  const leave = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      whileTap={{ scale: 0.95 }}
      className={`transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}