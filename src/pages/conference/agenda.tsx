"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "@/components/UI/Section";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type AgendaSession = {
  id: string;
  label: string;
  time: string;
  title: string;
  description: string;
};

type AgendaDay = {
  key: "day1" | "day2" | "day3";
  day: string;
  weekday: string;
  date: string;
  theme: string;
  sessions: AgendaSession[];
};

const DAY_KEYS: AgendaDay["key"][] = ["day1", "day2", "day3"];

export default function AgendaPage() {
  const days: AgendaDay[] = useMemo(
    () => [
      {
        key: "day1",
        day: "Day 1",
        weekday: "Tuesday",
        date: "Nov 10, 2026",
        theme:
          "Aligning Policy, Finance & Climate to Accelerate the EV Transition",
        sessions: [
          {
            id: "d1-opening",
            label: "Opening Keynote",
            time: "12:00 – 12:30",
            title: "Turning Climate Ambition Into Economic Opportunity",
            description:
              "How global climate commitments are unlocking investment and growth in clean mobility.",
          },
          {
            id: "d1-s11",
            label: "Session 1.1",
            time: "12:30 – 13:15",
            title: "Roadmap to Net-Zero: Sustainability & Environmental Impact",
            description:
              "Lifecycle sustainability, clean-grid charging, and post-COP28 commitments driving urban air-quality transformation.",
          },
          {
            id: "d1-s12",
            label: "Session 1.2",
            time: "13:15 – 14:00",
            title: "The Business Case for Going Electric",
            description:
              "Fleet ROI, TCO, and innovative models (EaaS, BaaS, TaaS) with case studies from Careem, Aramex, ADNOC.",
          },
          {
            id: "d1-s13",
            label: "Session 1.3",
            time: "14:00 – 14:45",
            title: "Policy as the Accelerator",
            description:
              "GCC-wide EV framework, procurement mandates, and global benchmarking.",
          },
          {
            id: "d1-break",
            label: "Networking",
            time: "14:45 – 15:15",
            title: "Coffee Break",
            description: "Informal networking and discussions.",
          },
          {
            id: "d1-panel",
            label: "Special Panel",
            time: "15:15 – 15:45",
            title: "Consumer Spotlight: Winning Trust in EVs",
            description:
              "Affordability, UX, lifestyle — how automakers, dealerships, and media can drive mainstream adoption.",
          },
          {
            id: "d1-special",
            label: "Special Session",
            time: "15:45 – 16:15",
            title: "Skills for the Future: EV Workforce Readiness",
            description:
              "Training, reskilling, and certification programs to prepare technicians, drivers, and regulators.",
          },
          {
            id: "d1-s14",
            label: "Session 1.4",
            time: "16:15 – 16:45",
            title: "Closing the Loop: Circular Economy & Battery Lifecycle",
            description:
              "Recycling, second-life batteries, rare-earth recovery, and alignment with UAE’s Operation 300bn.",
          },
          {
            id: "d1-s1b",
            label: "Session 1.B",
            time: "16:45 – 17:00",
            title: "Financing the Transition",
            description:
              "Green finance, PPP templates, and the $40B GCC pipeline for sustainable transport.",
          },
        ],
      },

      // ✅ Add your real Day 2 / Day 3 data later (structure ready)
      {
        key: "day2",
        day: "Day 2",
        weekday: "Wednesday",
        date: "Nov 11, 2026",
        theme: "Powering Breakthroughs – The Tech Behind EV Performance",
        sessions: [
          {
            id: "d2-1",
            label: "Keynote",
            time: "12:00 – 12:30",
            title: "Engineering the EV Future: Batteries, Tech & Safety",
            description:
              "How science and engineering breakthroughs are pushing the limits of EV performance.",
          },

          {
            id: "d2-2",
            label: "Session 2.1",
            time: "12:30 – 13:15",
            title: "Innovation at the Core: Battery & Powertrain Tech",
            description:
              "Solid-state batteries, thermal safety, lightweight materials, and UAE’s R&D collaborations",
          },

          {
            id: "d2-3",
            label: "Session 2.1a",
            time: "13:15 - 13:45",
            title: "Keeping EVs Safe",
            description:
              "OCPP, ISO 15118, UNECE WP.29 cybersecurity, and ECE R100 battery safety.",
          },

          {
            id: "d2-4",
            label: "Global Roundtable",
            time: "13:45 - 14:05",
            title: "Harmonizing Standards Across Borders",
            description:
              "Regulators and industry align on interoperability and certification frameworks (GCC, EU, Asia).",
          },

          {
            id: "d2-5",
            label: "Session 2.2",
            time: "14:05 - 14:30",
            title: "The Charging Blueprint",
            description:
              "DEWA’s Green Charger case study, ultra-fast charging, V2G, and interoperability standards.",
          },

          {
            id: "d2-6",
            label: "Networking",
            time: "14:30 - 14:45",
            title: "Coffee Break",
            description: "Informal networking and discussions.",
          },

          {
            id: "d2-7",
            label: "Session 2.3 ",
            time: "14:45 - 15:30",
            title: "Design Meets Performance",
            description:
              "Digital-twin design, predictive safety systems, and human-centric user experiences.",
          },

          {
            id: "d2-8",
            label: "Session 2.4 ",
            time: "15:30 - 16:00",
            title: "The Smart Mobility Frontier",
            description:
              "ADAS, AI-driven safety, V2X communication, and Dubai’s Autonomous Strategy KPIs",
          },

          {
            id: "d2-9",
            label: "GCC Showcase ",
            time: "16:00 - 16:30",
            title: "Middle East: The Testbed for NextGen Mobility",
            description:
              "How Dubai and GCC cities are shaping the future of global electrification",
          },

          {
            id: "d2-10",
            label: "Fireside Chat ",
            time: "16:30 - 16:45",
            title: "The 4th Industrial Revolution of Transport",
            description:
              "Automakers and regulators on AI, autonomy, and connected EV ecosystems.",
          },

          {
            id: "d2-11",
            label: "Wrap-Up ",
            time: "16:45 - 17:00",
            title: "Day 2 Insights",
            description: "Summary of key takeaways",
          },
        ],
      },
      {
        key: "day3",
        day: "Day 3",
        weekday: "Thursday",
        date: "Nov 12, 2026",
        theme:
          "Designing EV-Integrated Cities & Scaling Electrification Across Air, Sea & Industry",
        sessions: [
          {
            id: "d3-1",
            label: "Keynote",
            time: "12:00 – 12:20",
            title: "EVs in Vision 2030 Smart Cities",
            description:
              "How MENA urban strategies are embedding electrified transport into city design.",
          },

          {
            id: "d3-2",
            label: " Session 3.1",
            time: "12:00 – 12:20",
            title: "EVs in Vision 2030 Smart Cities",
            description:
              "How MENA urban strategies are embedding electrified transport into city design.",
          },
        ],
      },
    ],
    []
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read initial day from URL (?day=day1|day2|day3)
  const dayFromUrl = (searchParams.get("day") as AgendaDay["key"] | null) ?? "day1";
  const safeDayFromUrl: AgendaDay["key"] = DAY_KEYS.includes(dayFromUrl as any)
    ? (dayFromUrl as AgendaDay["key"])
    : "day1";

  const [activeDayKey, setActiveDayKey] = useState<AgendaDay["key"]>(safeDayFromUrl);

  // Keep state synced when user uses back/forward or link changes
  useEffect(() => {
    if (safeDayFromUrl !== activeDayKey) {
      setActiveDayKey(safeDayFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeDayFromUrl]);

  const activeDay = days.find((d) => d.key === activeDayKey) || days[0];

  // refs for right-side scrolling
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSession = (id: string) => {
    const el = refs.current[id];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setDayInUrl = (nextDay: AgendaDay["key"]) => {
    // preserve other query params
    const params = new URLSearchParams(searchParams.toString());
    params.set("day", nextDay);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const onDayChange = (nextDay: AgendaDay["key"]) => {
    setActiveDayKey(nextDay);
    setDayInUrl(nextDay);
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#031a1f]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#062b2f] via-[#031a1f] to-[#031a1f] opacity-90" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-105 w-130 rotate-12 bg-[#1cfb4b]/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-40 -top-20 h-105 w-130 -rotate-12 bg-[#0096ff]/10 blur-3xl -z-10" />

      <div className="container mx-auto py-14">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {days.map((d) => {
            const active = d.key === activeDayKey;
            return (
              <button
                key={d.key}
                onClick={() => onDayChange(d.key)}
                className={[
                  "group flex items-center gap-3 rounded-md border px-4 py-2 text-left transition",
                  active
                    ? "border-[#1cfb4b] bg-[#1cfb4b] text-black"
                    : "border-white/15 bg-white/0 text-white hover:border-white/30",
                ].join(" ")}
              >
                <div className="text-sm font-semibold leading-none">{d.day}</div>
                <div
                  className={[
                    "text-[10px] leading-tight opacity-90",
                    active ? "text-black/80" : "text-white/70",
                  ].join(" ")}
                >
                  <div className="font-medium">{d.weekday}</div>
                  <div>{d.date}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Theme */}
        <div className="mt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 text-center">
            Theme: {activeDay.theme}
          </h2>
        </div>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[320px_1px_1fr] gap-8 md:gap-10">
          {/* Left list */}
          <div className="space-y-6">
            {activeDay.sessions.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSession(s.id)}
                className="w-full rounded-xl border border-[#1cfb4b]/70 bg-white/0 px-6 py-5 text-left text-white transition hover:bg-white/5"
              >
                <div className="text-xs font-semibold tracking-wide text-white/90">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-white/70">{s.time}</div>
              </button>
            ))}
          </div>

          {/* Divider line */}
          <div className="hidden md:block">
            <div className="h-full w-px bg-[#1cfb4b]/70" />
          </div>

          {/* Right details */}
          <div className="space-y-10">
            {activeDay.sessions.map((s) => (
              <div
                key={s.id}
                ref={(el) => {
                  refs.current[s.id] = el;
                }}
                className="scroll-mt-24"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white/90">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
