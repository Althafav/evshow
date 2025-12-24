import Section from "@/components/UI/Section";
import React from "react";

const speakers = [
  { name: "Name Of Speaker", title: "Title Of The Speaker" },
  { name: "Name Of Speaker", title: "Title Of The Speaker" },
  { name: "Name Of Speaker", title: "Title Of The Speaker" },
];

export default function Page() {
  return (
    <Section>
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl text-center mb-10 text-white">
          Voices Of EV Future
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-emerald-400/40"
            >
              {/* Image */}
              <img
                src="/assets/imgs/speaker1.png"
                alt={speaker.name}
                className="h-105 w-full object-cover grayscale"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {speaker.name}
                </h3>
                <p className="text-sm text-emerald-400">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
