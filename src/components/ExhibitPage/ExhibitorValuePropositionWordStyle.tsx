"use client";

import React from "react";
import Section from "../UI/Section";

const bullets = [
  "Direct access to senior government stakeholders, policymakers, and regulatory authorities shaping transport and infrastructure agendas",
  "Engagement with procurement leaders, fleet operators, corporate buyers, and institutional investors",
  "A high-credibility platform to position technologies, solutions, and capabilities within a government-aligned context",
  "Market-entry and expansion opportunities across the GCC, Middle East, and connected global markets",
  "Early visibility into policy direction, infrastructure priorities, and investment pipelines",
  "Generation of qualified strategic leads, partnerships, and long-term commercial relationships",
];

export default function ExhibitorValuePropositionWordStyle() {
  return (
    <Section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="font-serif text-white">
          <h2 className="text-[28px] font-bold leading-tight">
            Strategic Value Proposition for Exhibitors
          </h2>

          <p className="mt-2 text-[18px] leading-snug">
            Participation in the EV World Show Exhibition delivers strategic value across
            commercial, policy, and reputational dimensions:
          </p>

          <ul className="mt-3 list-disc pl-12 text-[18px] leading-snug">
            {bullets.map((item, i) => (
              <li key={i} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
