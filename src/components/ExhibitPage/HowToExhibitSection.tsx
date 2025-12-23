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
        <div className=" text-white">
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

          <div className="mt-8">
            <a
              href="https://assets-us-01.kc-usercontent.com/9440fe89-4371-0034-df95-ca61aae74cc3/dbdfc3a9-8ae0-4b14-b8d1-ecbd4b93d13d/Rate%20Card.1.pdf"
              className="py-2 px-4 bg-white rounded text-black"
            >
              Download the Exhibitor Pack
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
