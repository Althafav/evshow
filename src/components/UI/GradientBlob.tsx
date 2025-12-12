import React from "react";

export default function GradientBlob() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="w-237.5 h-137.5 rounded-full opacity-25"
        style={{
          background:
            "linear-gradient(270deg, #0096FF -2.69%, #07AFD2 -2.68%, #1CFB4B 104.04%)",
          filter: "blur(243.4px)",
        }}
      ></div>
    </div>
  );
}
