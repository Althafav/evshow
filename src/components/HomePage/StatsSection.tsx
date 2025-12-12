import React from "react";
import Countdown from "../UI/CountDown";
import { highlightEV } from "@/lib/textHelpers";
import GradientBlob from "../UI/GradientBlob";
import Section from "../UI/Section";

export default function StatsSection({
  eventDate,
  statsheading,
  statsitems,
}: any) {
  return (
    <Section className="relative  ">
      <GradientBlob />

      {/* <div className="absolute inset-0 bg-linear-to-r from-[#041a1a] via-[#052426] to-[#041a1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(3,191,42,0.15),transparent_55%)]" /> */}

      <div className="relative mx-auto max-w-4xl px-5">
        <div>
          <Countdown eventDate={eventDate} />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-12 mt-20">
          <div className="lg:col-span-6">
            <h3 className="font-bruno text-3xl sm:text-4xl  leading-tight text-white">
              {highlightEV(statsheading)}
            </h3>
          </div>

          {/* RIGHT: stats grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {statsitems.map((item: any) => (
                <div
                  key={item.system.id}
                  className="ev-gradient-stroke px-6 py-5 backdrop-blur-sm"
                >
                  <h4 className="font-bruno text-2xl sm:text-3xl text-white">
                    {item.elements.count.value}
                  </h4>
                  <p className="mt-1 font-inter text-sm sm:text-base text-white/75">
                    {item.elements.name.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
