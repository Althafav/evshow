"use client";

import React from "react";
import Section from "../UI/Section";

const steps = [
  "Selection of exhibition space and participation package aligned with strategic objectives",
  "Confirmation of participation and contractual alignment",
  "Preparation of technology showcases, executive meetings, and stakeholder engagement plans",
  "Active engagement with international audiences, public-sector leaders, and commercial partners throughout the event lifecycle",
];

export default function HowToExhibitSection() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="font-serif text-white">
          <h2 className="text-[28px] font-bold leading-tight">
            How to Exhibit
          </h2>

          <p className="mt-2 text-[18px] leading-snug">
            Exhibition participation follows a defined and structured framework
            designed for executive-level organizations:
          </p>

          <ul className="mt-3 list-disc pl-12 text-[18px] leading-snug">
            {steps.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
