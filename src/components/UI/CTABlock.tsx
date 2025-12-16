import React from "react";
import Section from "./Section";
import CTAButton from "./CTAButton";

export default function CTABlock({
  heading,
  subheading,
  ctaname,
  ctalink,
}: any) {
  return (
    <Section className="relative overflow-hidden">
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
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center mb-3">{heading}</h2>
        <p className="text-md text-center text-gray-100 ">{subheading}</p>
        {ctalink && (
          <div className="mt-4 flex justify-center">
            <CTAButton
              variant="primary"
              buttonname={ctaname}
              buttonlink={ctalink}
            />
          </div>
        )}
      </div>
    </Section>
  );
}
