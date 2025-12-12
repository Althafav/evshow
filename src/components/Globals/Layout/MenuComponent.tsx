"use client";

import { deliveryClient } from "@/modules/Globals";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function MenuComponent() {
  const [pageData, setPageData] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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

  if (!pageData) return null;

  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href={pageData.evlogolink.value}>
          <img
            className="w-16 object-contain"
            src={pageData.evlogo.value[0]?.url}
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          <ul className="flex gap-6 items-center">
            {pageData.headmenuitems.linkedItems.map((item: any) => (
              <li key={item.system.id}>
                <Link
                  href={item.elements.link.value}
                  className="text-white hover:opacity-80 transition"
                >
                  {item.elements.name.value}
                </Link>
              </li>
            ))}
          </ul>

          {/* Partner Logos */}
          <div className="flex gap-4 items-center">
            {pageData.partneritems.linkedItems.map((item: any) => (
              <Link
                key={item.system.id}
                href={item.elements.link?.value || "#"}
              >
                <img
                  className="h-10 object-contain"
                  src={item.elements.logo.value[0]?.url}
                  alt={item.elements.logo.value[0]?.name}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <div className="px-6 py-6 space-y-6">
            <ul className="flex flex-col gap-4">
              {pageData.headmenuitems.linkedItems.map((item: any) => (
                <li key={item.system.id}>
                  <Link
                    href={item.elements.link.value}
                    className="text-white text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.elements.name.value}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Partner Logos (Mobile) */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
              {pageData.partneritems.linkedItems.map((item: any) => (
                <img
                  key={item.system.id}
                  className="h-8 object-contain"
                  src={item.elements.logo.value[0]?.url}
                  alt={item.elements.logo.value[0]?.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
