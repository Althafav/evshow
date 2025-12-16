import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("exhibitor_packages_and_floor_plan_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function Page({ pageData }: any) {
  return (
    <div>
      {" "}
      <div className="relative py-20">
        {pageData.bannerimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}

        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl gradient-text sm:text-4xl text-center max-w-xl mx-auto mb-4">
            {pageData.bannerheading.value}
          </h1>

          {pageData.bannercta.linkedItems.length > 0 && (
            <div className="mt-4 flex gap-3 flex-wrap justify-center">
              {pageData.bannercta.linkedItems.map((item: any) => {
                return (
                  <CTAButton
                    key={item.system.id}
                    variant={item.elements.variant.value[0].name}
                    buttonname={item.elements.name.value}
                    buttonlink={item.elements.link.value}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center items-center z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 688 361"
            className="w-225 max-w-none opacity-[0.07]"
            fill="none"
          >
            <g>
              <path
                d="M395.66 289.817L333.712 369L0 -72H119.334L395.236 287.994C395.448 288.585 395.607 289.177 395.66 289.817Z"
                fill="#1CFB4B"
              />
              <path
                d="M688 -72L513.65 144.898H386.85L569.125 -72H688Z"
                fill="#1CFB4B"
              />
            </g>
          </svg>
        </div>
        <div className="relative z-10 container mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h2 className="text-3xl text-white">
                {pageData.floorplanheading.value}
              </h2>

              {pageData.floorplanctalink.value && (
                <div className="mt-8">
                  <CTAButton
                    buttonname={pageData.floorplanctaname.value}
                    buttonlink={pageData.floorplanctalink.value}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
