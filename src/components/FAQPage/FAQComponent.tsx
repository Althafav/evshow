"use client";
import React, { useRef, useState } from "react";

export default function FAQAccordion({ items }: any) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  if (!items.length) return null;

  return (
    <div className="awardAccordion-wrapper">
      <div className="">
        <div className="rounded-2xl shadow text-primary">
          {items.map((raw: any, idx: number) => {
            const item = raw as any;
            const id = item?.system?.id ?? `faq_${idx}`;
            const open = activeId === id;

            return (
              <AccordionRow
                key={id}
                id={id}
                open={open}
                title={item?.elements.question?.value}
                html={item?.elements.answer?.value}
                onToggle={() => toggle(id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AccordionRow({
  id,
  open,
  title,
  html,
  onToggle,
}: {
  id: string;
  open: boolean;
  title: string;
  html: string;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const maxHeight = open ? `${panelRef.current?.scrollHeight ?? 0}px` : "0px";

  return (
    <div className={`group border-b border-secondary last:border-none`}>
      <button
        type="button"
        className="w-full text-left px-4 sm:px-6 py-4 flex items-start justify-between gap-4 focus:outline-none"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        id={`control-${id}`}
        onClick={onToggle}
      >
        <span className="text-base sm:text-lg font-semibold leading-snug text-white">
          {title}
        </span>

        <span
          className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-secondary transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden
        >
          {/* simple chevron icon */}
          <svg
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" />
          </svg>
        </span>
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`control-${id}`}
        ref={panelRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="px-4 sm:px-6 pb-5 pt-1">
          <div
            className="prose max-w-none text-sm sm:text-base text-gray-100"
            dangerouslySetInnerHTML={{ __html: html || "" }}
          />
        </div>
      </div>
    </div>
  );
}
