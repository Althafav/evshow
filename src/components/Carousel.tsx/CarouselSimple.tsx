"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ArrowLongRight = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
  >
    <circle
      cx="11.3695"
      cy="11.3695"
      r="11.3695"
      fill="url(#paint0_linear_26_3968)"
    />
    <path
      d="M19.2279 12.0479C19.4232 11.8526 19.4232 11.536 19.2279 11.3408L16.0459 8.1588C15.8507 7.96354 15.5341 7.96354 15.3388 8.1588C15.1436 8.35406 15.1436 8.67065 15.3388 8.86591L18.1672 11.6943L15.3388 14.5228C15.1436 14.718 15.1436 15.0346 15.3388 15.2299C15.5341 15.4251 15.8507 15.4251 16.0459 15.2299L19.2279 12.0479ZM4.54785 11.6943V12.1943H18.8744V11.6943V11.1943H4.54785V11.6943Z"
      fill="black"
    />
    <defs>
      <linearGradient
        id="paint0_linear_26_3968"
        x1="23.3601"
        y1="4.04669"
        x2="-0.957723"
        y2="4.096"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset="0.0001" stopColor="#07AFD2" />
        <stop offset="1" stopColor="#1CFB4B" />
      </linearGradient>
    </defs>
  </svg>
);

export default function CarouselSimple({ items }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!items.length) return null;

  return (
    <div className="relative w-full">
      {/* ✅ OUTER STATIC BOX (border stays) */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          border border-emerald-400/40
          bg-[#031218]
          px-14 py-10
          shadow-[0_0_30px_rgba(28,251,75,0.10)]
        "
      >
        {/* Left Arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowLongRight className="rotate-180" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ArrowLongRight />
        </button>

        {/* ✅ ONLY THIS PART MOVES */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {items.map((item: any) => (
              <div
                key={item.system.id}
                className="
                  flex-[0_0_100%]
                  flex items-center justify-center
                  text-center
                "
              >
                <h3 className="text-white/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                  {item.elements.name.value}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* soft inner glow */}
        <div className="pointer-events-none absolute inset-0 opacity-25 blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(28,251,75,0.18),transparent_60%)]" />
      </div>
    </div>
  );
}
