import React from "react";

export default function ExhibitorBanner({ heading, subheading }: any) {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#021412]">
        {/* LEFT GRADIENT */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-[#021412] via-[#021412]/80 to-transparent z-1" />

        {/* RIGHT GRADIENT */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-[#021412] via-[#021412]/80 to-transparent z-1" />

        {/* CENTER V SVG ICON */}
        <div className="pointer-events-none absolute inset-0 flex justify-center items-center z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 688 361"
            className="w-225 max-w-none opacity-[0.07]"
            fill="none"
          >
            <g>
              <path
                d="M395.66 289.817L333.712 369L0 -72H119.334L395.236 287.994C395.448 288.585 395.607 289.177 395.66 289.817Z"
                fill="#1CFB4B"
              />
              <path
                d="M688 -72L513.65 144.898H386.85L569.125 -72H688Z"
                fill="#1CFB4B"
              />
            </g>
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide mb-6 
               bg-[linear-gradient(270deg,#0096FF_-2.69%,#07AFD2_-2.68%,#1CFB4B_104.04%)]
               bg-clip-text text-transparent"
          >
            {heading}
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            {subheading}
          </p>
        </div>
      </div>
    </div>
  );
}
