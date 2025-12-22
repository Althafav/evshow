"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";

type Lang = "en" | "ar" | "zh";

const LANGS: { code: Lang; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "ar", label: "AR", dir: "rtl" },
  { code: "zh", label: "中文", dir: "ltr" },
];

export default function LanguageToggle() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = useMemo(
    () => LANGS.find((l) => l.code === locale) ?? LANGS[0],
    [locale]
  );

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const selectLang = async (lang: Lang) => {
    setOpen(false);

    await router.push(
      { pathname, query },
      asPath,
      { locale: lang }
    );

    // Update document direction (important for Arabic)
    const selected = LANGS.find((l) => l.code === lang);
    if (selected) {
      document.documentElement.dir = selected.dir;
      document.documentElement.lang = lang;
    }
  };

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="group flex items-center gap-1 rounded-xl px-2 py-1 bg-[#06141f]/80 backdrop-blur text-white"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center">
          <GlobeIcon />
        </span>

        <span className="h-6 w-px bg-white/20" />

        <span className="text-xs font-semibold">
          {current.label}
        </span>

        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-[#06141f]/95 border border-white/10 z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => selectLang(l.code)}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-white/5 ${
                l.code === locale ? "bg-white/5" : ""
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <g clipPath="url(#clip0_26_3510)">
        <path d="M8.5 2.92188C7.37049 2.92188 6.26633 3.25682 5.32718 3.88434C4.38802 4.51187 3.65603 5.40379 3.22378 6.44733C2.79154 7.49087 2.67844 8.63915 2.8988 9.74696C3.11916 10.8548 3.66307 11.8724 4.46176 12.6711C5.26045 13.4697 6.27804 14.0137 7.38585 14.234C8.49367 14.4544 9.64195 14.3413 10.6855 13.909C11.729 13.4768 12.6209 12.7448 13.2485 11.8056C13.876 10.8665 14.2109 9.76233 14.2109 8.63281C14.2109 7.11818 13.6093 5.66558 12.5382 4.59457C11.4672 3.52356 10.0146 2.92188 8.5 2.92188ZM12.6783 11.6875C12.2996 11.4655 11.899 11.283 11.483 11.143C11.6816 10.4107 11.7904 9.65698 11.807 8.89844H13.6664C13.6172 9.90481 13.2736 10.8746 12.6783 11.6875ZM3.32696 8.89844H5.19297C5.20909 9.65737 5.31746 10.4115 5.51571 11.1443C5.09965 11.2843 4.6991 11.4668 4.32039 11.6888C3.72296 10.8761 3.3775 9.90582 3.32696 8.89844ZM4.32172 5.57812C4.70043 5.80015 5.10098 5.98262 5.51703 6.12266C5.31845 6.85493 5.20963 7.60864 5.19297 8.36719H3.3336C3.38285 7.36082 3.72643 6.39104 4.32172 5.57812ZM8.76563 6.59016C9.50794 6.57283 10.2457 6.46852 10.9637 6.27937C11.1526 6.95996 11.2574 7.66112 11.2758 8.36719H8.76563V6.59016ZM8.76563 6.05891V3.47836C9.60235 3.63508 10.3448 4.51563 10.8016 5.77336C10.1363 5.94677 9.45304 6.04259 8.76563 6.05891ZM8.23438 3.47836V6.05891C7.54696 6.04259 6.86374 5.94677 6.19836 5.77336C6.65524 4.51563 7.39766 3.63508 8.23438 3.47836ZM8.23438 6.59016V8.36719H5.72422C5.74263 7.66112 5.84745 6.95996 6.03633 6.27937C6.75435 6.46852 7.49207 6.57283 8.23438 6.59016ZM5.72422 8.89844H8.23438V10.6755C7.49207 10.6928 6.75435 10.7971 6.03633 10.9862C5.84745 10.3057 5.74263 9.60451 5.72422 8.89844ZM8.23438 11.2067V13.7873C7.39766 13.6305 6.65524 12.75 6.19836 11.4923C6.86374 11.3189 7.54696 11.223 8.23438 11.2067ZM8.76563 13.7873V11.2067C9.45304 11.223 10.1363 11.3189 10.8016 11.4923C10.3448 12.75 9.60235 13.6305 8.76563 13.7873ZM8.76563 10.6755V8.89844H11.2758C11.2574 9.60451 11.1526 10.3057 10.9637 10.9862C10.2457 10.7971 9.50794 10.6928 8.76563 10.6755ZM11.807 8.36719C11.7909 7.60825 11.6825 6.85409 11.4843 6.12133C11.9004 5.98129 12.3009 5.79882 12.6796 5.5768C13.2794 6.38872 13.6272 7.35911 13.6797 8.36719H11.807Z" fill="url(#paint0_linear_26_3510)"/>
        <path d="M8.49965 0C7.01509 0.000251318 5.5565 0.38931 4.26903 1.12845C2.98157 1.86759 1.91014 2.93104 1.16139 4.21294C0.412643 5.49484 0.0126866 6.95048 0.00133268 8.43499C-0.0100212 9.9195 0.367623 11.3811 1.09668 12.6743L0.00894261 16.6587C-0.0028857 16.6985 -0.00522903 16.7404 0.0021005 16.7813C0.00943004 16.8221 0.0262285 16.8607 0.051149 16.8939C0.0760696 16.9271 0.108419 16.954 0.145603 16.9724C0.182787 16.9908 0.223772 17.0003 0.265271 17C0.288179 17.0002 0.310993 16.997 0.333005 16.9907L4.36918 15.9282C5.50361 16.5592 6.7675 16.922 8.06389 16.9888C9.36029 17.0555 10.6548 16.8244 11.848 16.3133C13.0412 15.8021 14.1016 15.0245 14.9476 14.0399C15.7937 13.0554 16.403 11.8902 16.7288 10.6336C17.0547 9.37708 17.0884 8.06258 16.8274 6.79098C16.5664 5.51937 16.0176 4.32444 15.2231 3.29783C14.4287 2.27123 13.4096 1.44023 12.2441 0.868572C11.0787 0.296917 9.79776 -0.000203675 8.49965 0ZM8.49965 16.4688C7.10896 16.4664 5.74311 16.1001 4.53785 15.4062C4.49737 15.3833 4.45157 15.3714 4.40504 15.3717C4.38223 15.3717 4.3595 15.3744 4.3373 15.3797L0.642458 16.3598L1.63722 12.7075C1.64647 12.6736 1.64889 12.6381 1.64433 12.6032C1.63977 12.5684 1.62832 12.5347 1.61066 12.5043C0.72867 10.9868 0.372373 9.22053 0.59709 7.47977C0.821808 5.73901 1.61497 4.12114 2.85342 2.87736C4.09187 1.63358 5.70631 0.833476 7.44609 0.601285C9.18587 0.369093 10.9536 0.7178 12.4749 1.59327C13.9962 2.46873 15.1859 3.82197 15.8593 5.44287C16.5326 7.06378 16.652 8.86165 16.1989 10.5573C15.7457 12.253 14.7454 13.7517 13.3532 14.8206C11.961 15.8895 10.2549 16.4689 8.49965 16.4688Z" fill="url(#paint1_linear_26_3510)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_26_3510" x1="14.5229" y1="4.95454" x2="2.30799" y2="4.97931" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0096FF" />
          <stop offset="0.0001" stopColor="#07AFD2" />
          <stop offset="1" stopColor="#1CFB4B" />
        </linearGradient>
        <linearGradient id="paint1_linear_26_3510" x1="17.4654" y1="3.02536" x2="-0.718211" y2="3.06224" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0096FF" />
          <stop offset="0.0001" stopColor="#07AFD2" />
          <stop offset="1" stopColor="#1CFB4B" />
        </linearGradient>
        <clipPath id="clip0_26_3510">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
