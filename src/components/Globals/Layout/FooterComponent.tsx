import { socialLinks } from "@/constants/socialLinks";
import { deliveryClient } from "@/modules/Globals";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FooterComponent() {
  const [pageData, setPageData] = useState<any | null>(null);

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
    <div className="">
      <div className="container mx-auto">
        <div className="relative grid lg:grid-cols-12 gap-10 py-10">
          <div className="lg:col-span-4">
            <Link href={pageData.evlogolink.value}>
              <img
                className="w-16 object-contain"
                src={pageData.evlogo.value[0]?.url}
                alt="Logo"
              />
            </Link>
            <ul className="social-list flex gap-3 mt-4">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-8 h-8 bg-white  inline-flex justify-center items-center text-black rounded-full"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {pageData.footermenuitems.linkedItems.map((item: any) => (
                <div key={item.system.id}>
                  <Link
                    href={item.elements.link.value}
                    className="text-white text-xs font-semibold tracking-wide hover:opacity-85 transition"
                  >
                    {item.elements.name.value}
                  </Link>

                  <ul className="mt-4 space-y-2">
                    {item.elements.subitems.linkedItems.map((subItem: any) => (
                      <li key={subItem.system.id}>
                        <Link
                          href={subItem.elements.link.value}
                          className="text-white/65 hover:text-white transition text-xs"
                        >
                          {subItem.elements.name.value}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/assets/imgs/lights motion.png"
            alt=""
            className="mix-blend-color-dodge absolute top-0"
          />
        </div>

        <div className="flex sm:flex-row flex-col justify-start sm:justify-between gap-5 my-5 sm:items-center">
          <div>
            <p className="gradient-text text-md">{pageData.datevenue.value}</p>
          </div>
          <div>
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} EV World. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
