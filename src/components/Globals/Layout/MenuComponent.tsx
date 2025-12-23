"use client";

import { deliveryClient } from "@/modules/Globals";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageToggle from "../LanguageToggle";

export default function MenuComponent() {
  const [pageData, setPageData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // which mobile menu item is expanded
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const res = await deliveryClient
        .item("globalcomponent")
        .depthParameter(2)
        .toPromise();

      setPageData(res.data.item.elements || null);
    };

    fetchData();
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSub(null);
  }, [pathname]);

  const menuItems = useMemo(() => {
    return (pageData?.headmenuitems?.linkedItems || []).map((item: any) => {
      const subs = item?.elements?.subitems?.linkedItems || [];
      return {
        id: item.system.id,
        name: item.elements.name.value,
        link: item.elements.link.value,
        subitems: subs.map((sub: any) => ({
          id: sub.system.id,
          name: sub.elements.name.value,
          link: sub.elements.link.value,
        })),
      };
    });
  }, [pageData]);

  const partners = useMemo(() => {
    return (pageData?.partneritems?.linkedItems || []).map((p: any) => ({
      id: p.system.id,
      link: p.elements.link?.value || "#",
      logoUrl: p.elements.logo.value?.[0]?.url,
      logoName: p.elements.logo.value?.[0]?.name || "Partner",
    }));
  }, [pageData]);

  if (!pageData) return null;

  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto ">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href={pageData.evlogolink.value} className="shrink-0">
            <img
              className="w-16 object-contain"
              src={pageData.evlogo.value[0]?.url}
              alt="Logo"
            />
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => {
              setIsOpen((v) => !v);
              if (isOpen) setOpenMobileSub(null);
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className=" gap-4 items-center hidden lg:flex">
            {partners.map((p: any) => (
              <Link key={p.id} href={p.link}>
                <img
                  className="h-14 object-contain"
                  src={p.logoUrl}
                  alt={p.logoName}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-5 items-center">
          <ul className="flex gap-5 items-center">
            {menuItems.map((item: any) => {
              const hasSubs = item.subitems.length > 0;

              return (
                <li key={item.id} className="relative">
                  {/* Trigger */}
                  <div className="group inline-flex items-center">
                    <Link
                      href={item.link}
                      className="text-white text-sm hover:opacity-80 transition"
                    >
                      {item.name}
                    </Link>

                    {hasSubs && (
                      <ChevronDown className="ml-2 h-4 w-4 text-white/80" />
                    )}

                    {/* Dropdown */}
                    {hasSubs && (
                      <div
                        className="
                          absolute left-0 top-full pt-3
                          opacity-0 translate-y-1 pointer-events-none
                          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                          group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                          transition
                        "
                      >
                        <ul className="bg-black/95 backdrop-blur-md min-w-55 py-2 rounded-xl border border-white/10 shadow-lg">
                          {item.subitems.map((sub: any) => (
                            <li key={sub.id}>
                              <a
                                href={sub.link}
                                className="block text-sm px-4 py-2 text-white hover:bg-white/10 transition"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <LanguageToggle />

          {/* Partner Logos */}
        </div>
      </div> 

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-[max-height,opacity] duration-300
          ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 space-y-6">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item: any) => {
                const hasSubs = item.subitems.length > 0;
                const expanded = openMobileSub === item.id;

                if (!hasSubs) {
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className="block py-3 text-white text-lg border-b border-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.id} className="border-b border-white/10">
                    {/* Accordion trigger */}
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-3 text-white text-lg"
                      onClick={() =>
                        setOpenMobileSub((cur) =>
                          cur === item.id ? null : item.id
                        )
                      }
                      aria-expanded={expanded}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition ${
                          expanded ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Subitems */}
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pb-3 pl-3">
                        {item.subitems.map((sub: any) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.link}
                              className="block py-2 text-white/90 hover:text-white transition"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Partner Logos (Mobile) */}
            <div className="flex flex-wrap gap-4 pt-4">
              {partners.map((p: any) => (
                <Link key={p.id} href={p.link} onClick={() => setIsOpen(false)}>
                  <img
                    className="h-8 object-contain"
                    src={p.logoUrl}
                    alt={p.logoName}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
