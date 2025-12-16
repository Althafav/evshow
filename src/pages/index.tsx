import MenuComponent from "@/components/Globals/Layout/MenuComponent";
import HeroBanner from "@/components/HomePage/HeroBanner";
import StatsSection from "@/components/HomePage/StatsSection";
import Countdown from "@/components/UI/CountDown";
import CTAButton from "@/components/UI/CTAButton";
import GradientBlob from "@/components/UI/GradientBlob";
import ArrowRightComponent from "@/components/UI/Icons/ArrowRightComponent";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("home_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function Home({ pageData }: any) {
  if (!pageData) return null;

  return (
    <div className="">
      <HeroBanner
        heading={pageData.bannerheading.value}
        subheading={pageData.bannersubheading.value}
        dateVenue={pageData.datevenue.value}
        cta={pageData.bannercta.linkedItems}
        imageUrl={pageData.bannerimage.value[0]?.url}
      />

      <StatsSection
        eventDate={pageData.eventdate.value}
        statsheading={pageData.statisticsheading.value}
        statsitems={pageData.statsitems.linkedItems}
      />
      <Section className="relative">
        {pageData.whoyoumeetbackgroundimage.value[0]?.url && (
          <div
            className="absolute inset-0 bg-cover w-full bg-center brightness-75"
            style={{
              backgroundImage: `url(${pageData.whoyoumeetbackgroundimage.value[0]?.url})`,
            }}
          />
        )}
        <div className=" relative z-10 container mx-auto ">
          <div>
            <h2 className="text-4xl tracking-tighter max-w-md">
              {highlightEV(pageData.whoyoumeetheading.value)}
            </h2>

            <div className="mt-8 sm:mt-40 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pageData.whoyoumeetitems.linkedItems.map((item: any) => {
                return (
                  <div
                    key={item.system.id}
                    className="ev-gradient-stroke p-5 bg-black"
                  >
                    <p className="text-2xl mb-4 tracking-tighter max-w-60">
                      {item.elements.name.value}
                    </p>
                    <div
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: item.elements.content.value,
                      }}
                    />

                    <div className="mt-8 flex justify-end">
                      <Link
                        href={item.elements.ctalink.value}
                        className="flex gap-2 items-center"
                      >
                        <span>{item.elements.ctaname.value}</span>
                        <ArrowRightComponent />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl gradient-text">
              {pageData.ecosystemheading.value}
            </h2>

            <div className="flex gap-10 mt-8 justify-center flex-wrap">
              {pageData.ecosystemitems.linkedItems.map((item: any) => {
                return (
                  <div key={item.system.id} className="flex gap-5 items-center">
                    <img
                      className="w-10"
                      src={item.elements.image.value[0]?.url}
                      alt={item.elements.image.value[0]?.name}
                    />
                    <p className="max-w-37.5">{item.elements.name.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto ">
          <div className="ev-gradient-stroke p-10">
            <div className="grid  gap-10 sm:grid-cols-12">
              <div className="sm:col-span-5">
                <h2 className="gradient-text text-4xl mb-4">
                  {pageData.conferencehighlightheading.value}
                </h2>
                <p>{pageData.conferencehighlightsubheading.value}</p>
              </div>

              <div className="sm:col-span-6 flex flex-col items-end">
                <div className="flex gap-10 flex-wrap">
                  {pageData.conferencehighlightitems.linkedItems.map(
                    (item: any) => {
                      return (
                        <div key={item.system.id} className="">
                          <img
                            className="w-10"
                            src={item.elements.image.value[0]?.url}
                            alt={item.elements.image.value[0]?.name}
                          />
                          <p className="gradient-text max-w-44">
                            {item.elements.name.value}
                          </p>
                          <div
                            className="max-w-44"
                            dangerouslySetInnerHTML={{
                              __html: item.elements.content.value,
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <div className=" mt-8">
                  <Link
                    className="text-white underline flex gap-2 items-center"
                    href={pageData.experiencehighlightctalink.value}
                  >
                    {pageData.experiencehighlightctaname.value}
                    <ArrowRightComponent />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-5 items-start justify-between">
            <h2 className="text-3xl sm:text-5xl max-w-xl">
              {highlightEV(pageData.experiencehighlightheading.value)}
            </h2>
            <img
              className=" object-cover max-w-150 w-full"
              src={pageData.experiencehighlightimage.value[0]?.url}
              alt={pageData.experiencehighlightimage.value[0]?.name}
            />
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {pageData.experiencehighlightitems.linkedItems.map(
                (item: any, idx: number) => {
                  const isSm = true; // just for readability in classes below

                  const hasRightBorder = idx % 3 !== 2; // col 1 & 2
                  const hasTopBorder = idx >= 3; // row 2

                  return (
                    <div
                      key={item.system.id}
                      className={[
                        "px-8 py-7",
                        "text-white",
                        "border-[#03BF2A]/45", // line color like reference
                        "sm:border-l-0 sm:border-b-0", // keep clean
                        hasRightBorder ? "sm:border-r" : "",
                        hasTopBorder ? "sm:border-t" : "",
                      ].join(" ")}
                    >
                      <p className="mb-2 font-bold text-base sm:text-xl ">
                        {item.elements.name.value}
                      </p>

                      <div
                        className="text-white/70 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: item.elements.content.value,
                        }}
                      />
                    </div>
                  );
                }
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <CTAButton
                buttonname={pageData.experiencehighlightctaname.value}
                buttonlink={pageData.experiencehighlightctalink.value}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <div className="ev-gradient-stroke p-10 sm:flex justify-between">
            <div className="sm:flex gap-2">
              <h2 className="gradient-text text-xl mb-3 sm:mb-0">
                {pageData.strategicpartnerheading.value}
              </h2>
              <p className="text-sm text-gray-200">
                {pageData.strategicpartnersubheading.value}
              </p>
            </div>

            <div>
              <img
                className="sm:w-96 w-60 mt-4 sm:mt-0"
                src={pageData.strategicpartnerlogo.value[0]?.url}
                alt={pageData.strategicpartnerlogo.value[0]?.name}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative  ">
        <div className="container mx-auto relative h-150 overflow-hidden rounded-3xl py-12 sm:py-16">
          {pageData.ctacardbackgroundimage.value[0]?.url && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${pageData.ctacardbackgroundimage.value[0]?.url})`,
              }}
            />
          )}
          <div className="relative z-10  h-full flex justify-center items-end ">
            <div className="flex flex-wrap gap-5 items-center ">
              {pageData.ctacardbuttons.linkedItems.map((item: any) => {
                return (
                  <Link
                    href={item.elements.link.value}
                    key={item.system.id}
                    className="text-white uppercase underline flex gap-2 items-center"
                  >
                    {item.elements.name.value}
                    <ArrowRightComponent />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
