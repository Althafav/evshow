import PageHeadBanner from "@/components/Banner/PageHeadBanner";
import CarouselSimple from "@/components/Carousel.tsx/CarouselSimple";
import CTABlock from "@/components/UI/CTABlock";
import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("sponsors_page")
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
      <PageHeadBanner
        heading={pageData.bannerheading.value}
        subheading={pageData.bannersubheading.value}
      />

      <Section className="relative">
        <div className=" ">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="">
                <h2 className="text-3xl sm:text-4xl mb-4 max-w-sm ml-30">
                  {highlightEV(pageData.whysponsorheading.value)}
                </h2>
                <div
                  className="prose text-white"
                  dangerouslySetInnerHTML={{
                    __html: pageData.whysponsordescription.value,
                  }}
                />
              </div>

              <div>
                <CarouselSimple items={pageData.whysponsoritems.linkedItems} />
              </div>
            </div>
          </div>

          <img
            src={pageData.whysponsorimage.value[0]?.url}
            alt={pageData.bannerheading.value}
            className="absolute -left-90 w-150 top-0 -z-10"
          />
        </div>
      </Section>

      <Section id="sponsor-register-interest">
        <div className="container mx-auto">
          <h3 className="text-3xl text-center mb-8">
            {pageData.sponsorsheading.value}
          </h3>

          <div className="partner-wrapper grid grid-cols-1 gap-20">
            {pageData.sponsorsitems.linkedItems.map(
              (item: any, idx: number) => {
                return (
                  <div className="" key={idx}>
                    <div className=" text-center mb-5 flex gap-5 items-center  justify-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="482"
                          height="4"
                          viewBox="0 0 482 4"
                          fill="none"
                        >
                          <path
                            d="M2 0C1.46957 -0.00224085 0.960859 0.20651 0.585786 0.58162C0.210714 0.956655 -4.65678e-08 1.46733 0 2C4.65678e-08 2.53267 0.210714 3.04335 0.585786 3.41838C0.960859 3.79349 1.46957 4.00224 2 4C10 3.96667 18 3.93333 26 3.9C170 3.29999 314 2.69997 458 2.09996C466 2.06663 474 2.03329 482 1.99996C474 1.96663 466 1.93329 458 1.89996C314 1.29997 170 0.699985 26 0.0999979C18 0.0666653 10 0.0333326 2 0Z"
                            fill="url(#paint0_linear_26_5456)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_26_5456"
                              x1="495.111"
                              y1="2.17792"
                              x2="231.522"
                              y2="258.75"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#0096FF" />
                              <stop offset="0.0001" stop-color="#07AFD2" />
                              <stop offset="1" stop-color="#1CFB4B" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h1 className=" text-xl gradient-text">
                        {item.elements.heading.value}
                      </h1>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="483"
                          height="4"
                          viewBox="0 0 483 4"
                          fill="none"
                        >
                          <path
                            d="M481 4C481.53 4.00224 482.039 3.79348 482.414 3.41837C482.789 3.04334 483 2.53267 483 2C483 1.46733 482.789 0.956664 482.414 0.581628C482.039 0.206518 481.53 -0.00223613 481 0C472.983 0.0333333 464.967 0.0666667 456.95 0.1C312.65 0.7 168.35 1.3 24.05 1.9C16.0334 1.93333 8.01669 1.96667 0 2C8.01669 2.03333 16.0334 2.06667 24.05 2.1C168.35 2.7 312.65 3.3 456.95 3.9C464.967 3.93333 472.983 3.96667 481 4Z"
                            fill="url(#paint0_linear_26_5466)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_26_5466"
                              x1="-13.1387"
                              y1="1.82204"
                              x2="250.464"
                              y2="-255.298"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#0096FF" />
                              <stop offset="0.0001" stop-color="#07AFD2" />
                              <stop offset="1" stop-color="#1CFB4B" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex flex-wrap justify-center gap-8">
                        <h3>To be Announced Soon.</h3>
                        {/* {item.elements.items.linkedItems.map(
                          (partner: any, iIdx: number) => {
                            return (
                              <Link
                                href={partner.elements.websitelink.value}
                                target="_blank"
                                key={iIdx}
                                className="flex items-center justify-center w-44 h-30 "
                              >
                                <div className="flex items-center justify-center">
                                  <img
                                    width={300}
                                    height={200}
                                    src={partner.elements.logo.value[0]?.url}
                                    alt={partner.elements.name.value}
                                    className=" object-contain aspect-video shadow-sm p-4"
                                  />
                                </div>
                              </Link>
                            );
                          }
                        )} */}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <h3 className="text-3xl text-center mb-8">
            {pageData.sponsoropportunityheading.value}
          </h3>
          <p className="text-md text-center text-gray-100 ">
            {pageData.sponsoropportunitysubheading.value}
          </p>

          <div className="mt-8 grid sm:grid-cols-4 gap-5">
            {pageData.sponsoropportunityitems.linkedItems.map((item: any) => {
              return (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <img
                    className="w-12"
                    src={item.elements.image.value[0]?.url}
                    alt={item.elements.image.value[0]?.name}
                  />
                  <h3 className="text-center text-sm">
                    {item.elements.name.value}
                  </h3>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center gradient-text">{pageData.sponsorctasubheading.value}</p>

          {pageData.sponsorctaitems.linkedItems.length > 0 && (
            <div className="mt-4 flex gap-3 flex-wrap justify-center">
              {pageData.sponsorctaitems.linkedItems.map((item: any) => {
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
      </Section>
    </div>
  );
}
