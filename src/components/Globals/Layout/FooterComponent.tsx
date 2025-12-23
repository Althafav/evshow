import { socialLinks } from "@/constants/socialLinks";
import { deliveryClient } from "@/modules/Globals";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiSnapchatLogoFill } from "react-icons/pi";
import NewsLetterComponent from "../NewsLetterComponent";

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
      <NewsLetterComponent/>
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
            <div className="social-list flex gap-3 mt-4 relative z-50">
              <a
                href="https://www.linkedin.com/company/ev-world-ae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.youtube.com/@evworld2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://www.instagram.com/evworld2026/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com/evworld2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://www.facebook.com/evworld2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@evworld.ae?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <FaTiktok size={18} />
              </a>

              <a
                href="https://snapchat.com/t/lXXuxOvh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 bg-white inline-flex justify-center items-center text-black rounded-full"
              >
                <PiSnapchatLogoFill size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {pageData.footermenuitems.linkedItems.map((item: any) => (
                <div key={item.system.id}>
                  <a
                    href={item.elements.link.value}
                    className="text-white text-xs font-semibold tracking-wide hover:opacity-85 transition"
                  >
                    {item.elements.name.value}
                  </a>

                  <ul className="mt-4 space-y-2">
                    {item.elements.subitems.linkedItems.map((subItem: any) => (
                      <li key={subItem.system.id}>
                        <a
                          href={subItem.elements.link.value}
                          className="text-white/65 hover:text-white transition text-xs"
                        >
                          {subItem.elements.name.value}
                        </a>
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
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} EV World. All rights reserved.
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <p>Terms & Conditions</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
