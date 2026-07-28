"use client";

import CountUp from "react-countup";

export default function Counter({ end, label }) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-purple-400">
        <CountUp end={end} duration={3}/>
      </h2>

      <p className="text-gray-400 mt-2">
        {label}
      </p>
    </div>
  );
}