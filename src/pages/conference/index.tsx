import ConferenceBanner from "@/components/ConferencePage/ConferenceBanner";
import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("conference_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function conference({ pageData }: any) {
  return (
    <div>
      <div>
        <ConferenceBanner
          heading={pageData.bannerheading.value}
          subheading={pageData.bannersubheading.value}
        />
        <Section>
          <div className="container mx-auto">
            <div className="relative p-10 rounded-3xl overflow-hidden">
              {pageData.aboutimage.value && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${pageData.aboutimage.value[0]?.url})`,
                  }}
                />
              )}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-linear-to-r from-[#021412] via-[#021412]/80 to-transparent z-1" />

              <div className="relative z-10 ">
                <h2 className="text-3xl sm:text-4xl gradient-text max-w-md mb-3">
                  {pageData.aboutheading.value}
                </h2>
                <div
                  className="prose text-white"
                  dangerouslySetInnerHTML={{
                    __html: pageData.aboutcontent.value,
                  }}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl gradient-text text-center">
              {pageData.themeheading.value}
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {pageData.themeitems.linkedItems.map((item: any) => {
                return (
                  <a
                    href={item.elements.ctalink.value}
                    className="bg-black p-10 rounded-3xl hover-card-lift"
                    key={item.system.id}
                  >
                    <h3 className="mb-3 text-xl">{item.elements.name.value}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.elements.content.value,
                      }}
                    />
                    <div className="flex justify-end mt-4">
                      <img
                        className="w-12"
                        src={item.elements.image.value[0]?.url}
                        alt={item.elements.image.value[0]?.name}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </Section>
        <Section>
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl  text-center mb-3">
              {pageData.structureheading.value}
            </h2>
            <p className="text-center text-gray-100 max-w-3xl mx-auto">
              {pageData.structuresubheading.value}
            </p>

            <div className="max-w-7xl mx-auto  ">
              <div className="flex justify-center items-centers">
                <div className="grid sm:grid-cols-2 gap-5 mt-8  justify-items-center">
                  <div className="grid grid-cols-1 gap-5 ">
                    {pageData.structureitems.linkedItems.map(
                      (item: any, index: number) => {
                        return (
                          <div
                            key={item.system.id}
                            className="flex items-start gap-5 bg-black p-10 ev-gradient-stroke"
                          >
                            <div>
                              <div className="bg-white w-14 h-14  justify-center items-center rounded-full text-black inline-flex text-center">
                                <h3 className="text-xs">Day {index + 1}</h3>
                              </div>
                            </div>
                            <div>
                              <h3 className="gradient-text text-xl">
                                {item.elements.name.value}
                              </h3>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.elements.content.value,
                                }}
                              />
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="relative">
                    <img
                      className="w-full"
                      src={pageData.structureimage.value[0]?.url}
                      alt=""
                    />
                    <div className="pointer-events-none absolute inset-0 flex justify-center items-center z-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 688 361"
                        className="w-425 max-w-none opacity-[0.07]"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto">
            <h2 className="gradient-text text-center text-3xl mb-3">
              {pageData.speakerheading.value}
            </h2>
            <p className="text-center text-gray-100 max-w-3xl mx-auto mb-3">
              {pageData.speakersubheading.value}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 mt-8">
              {pageData.speakeritems.linkedItems.map((item: any) => {
                return (
                  <div key={item.system.id} className="p-5 ev-gradient-stroke">
                    <h3 className=" text-sm text-center">
                      {item.elements.name.value}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

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
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-3xl text-center mb-3">
              {pageData.interestctaheading.value}
            </h2>
            {pageData.interestctalink.value && (
              <div className="mt-4 flex justify-center">
                <CTAButton
                  variant="primary"
                  buttonname={pageData.interestctaname.value}
                  buttonlink={pageData.interestctalink.value}
                />
              </div>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}
