"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ArrowCircle = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1CFB4B]">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 23" fill="none">
      <path
        d="M19.2279 12.0479C19.4232 11.8526 19.4232 11.536 19.2279 11.3408L16.0459 8.1588C15.8507 7.96354 15.5341 7.96354 15.339 8.1588C15.1438 8.35406 15.1438 8.67064 15.339 8.8659L18.1674 11.6944L15.339 14.5228C15.1438 14.7181 15.1438 15.0346 15.339 15.2299C15.5341 15.4252 15.8507 15.4252 16.0459 15.2299L19.2279 12.0479Z"
        fill="#06110A"
      />
      <path
        d="M18.8743 11.6943L4.625 11.6943"
        stroke="#06110A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

type PressReleaseCarouselProps = {
  items: any[];
};

export default function ArticleCarousel({ items }: PressReleaseCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!items?.length) return null;

  return (
    <section className="w-full">
      <div className="relative rounded-3xl bg-[#06110A] px-4 py-5 sm:px-6">
        {/* Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white disabled:opacity-30"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={scrollNext}
          disabled={!canNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white disabled:opacity-30"
          aria-label="Next"
        >
          ›
        </button>

        {/* Embla */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {items.map((item: any) => {
              const imgUrl = item?.elements?.image?.value?.[0]?.url;

              return (
                <div
                  key={item.system.id}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_40%]"
                >
                  <div className="rounded-3xl bg-linear-to-r from-[#0096FF] via-[#07AFD2] to-[#1CFB4B] p-px">
                    <div className="flex overflow-hidden rounded-3xl bg-[#06110A]">
                      {/* Image */}
                      <div className="w-42.5 shrink-0 bg-white/10">
                        {imgUrl && (
                          <img
                            src={imgUrl}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative flex-1 p-5">
                        <div className="absolute right-4 top-4">
                          <a
                            href={item?.elements?.link?.value || "#"}
                            aria-label="Open"
                          >
                            <ArrowCircle />
                          </a>
                        </div>

                        <p className="text-xs text-white/70">
                          {item?.elements?.date?.value}
                        </p>

                        <h4 className="mt-1 pr-10 text-base font-semibold text-[#1CFB4B] line-clamp-1">
                          {item?.elements?.heading?.value}
                        </h4>

                        <div
                          className="mt-2 text-sm text-white/70 line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: item?.elements?.content?.value || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
