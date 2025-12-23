import { highlightEV } from "@/lib/textHelpers";
import Link from "next/link";
import React from "react";
import CTAButton from "../UI/CTAButton";
import CalenderIcon from "../UI/Icons/CalenderIcon";
import VenueIcon from "../UI/Icons/VenueIcon";
import ClockIcon from "../UI/Icons/ClockIcon";
import HallIcon from "../UI/Icons/HallIcon";

export default function HeroBanner({
  heading,
  subheading,
  dateVenue,
  imageUrl,
  cta,
}: any) {
  return (
    <section className="relative w-full h-screen overflow-hidden rounded-xl">
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 via-cyan-500/10 to-transparent" />

      <div className="relative z-10 mx-auto container px-6 py-14 sm:py-20 flex items-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal max-w-md leading-tight text-white">
            {highlightEV(heading)}
          </h1>

          <p className="mt-2 text-xl font-medium text-white">{subheading}</p>
          <p className="mt-2 text-sm font-normal text-white">
            The official international exhibition and conference dedicated to
            the future of electric mobility. Delivered in strategic alignment
            with Dubai’s Roads and Transport Authority, the event brings
            together global manufacturers, technology leaders, policymakers and
            investors shaping the next phase of sustainable transport.
          </p>

          {/* <p className="mt-5 text-md sm:text-base text-white tracking-wide">
            {dateVenue}
          </p> */}

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Show Dates */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                <CalenderIcon />
                <span className="text-white font-medium">
                  10-12 November 2026
                </span>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                <VenueIcon />
                <span className="text-white font-medium">
                  Dubai World Trade Centre
                </span>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                <ClockIcon />
                <span className="text-white font-medium">
                  10:00 AM - 6:00 PM
                </span>
              </div>

              {/* Hall No */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                <HallIcon />
                <span className="text-white font-medium">
                  Zabeel Hall - 4, 5, 6
                </span>
              </div>
            </div>
          </div>

          {cta.length > 0 && (
            <div className="mt-3 flex gap-3 flex-wrap">
              {cta.map((item: any) => {
                return (
                  <CTAButton
                    key={item.system.id}
                    variant={item.elements.variant.value[0].name}
                    buttonname={item.elements.name.value}
                    buttonlink={item.elements.link.value}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/40 to-transparent" />
    </section>
  );
}
