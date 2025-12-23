import WhyExhibitCarousel from "@/components/ExhibitorPage/WhyExhibitCarousel";
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
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const langMap: Record<string, string> = {
    en: "default",
    ar: "Arabic",
    zh: "Chinese",
  };

  const language = langMap[locale ?? "en"];

  const res = await deliveryClient
    .item("home_page")
    .depthParameter(2)
    .languageParameter(language)
    .toPromise();

  return {
    props: {
      pageData: res.data.item?.elements ?? null,
    },
    revalidate: 60,
  };
};

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

      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-12 gap-5">
            <div className="sm:col-span-8">
              <div className="ev-gradient-stroke p-10 sm:flex flex-wrap justify-center">
                <div className="sm:flex gap-2">
                  <h2 className="gradient-text text-xl mb-3 sm:mb-0">
                    {pageData.strategicpartnerheading.value}
                  </h2>

                  <div
                    className="prose text-white prose-a:text-[#1CFB4B]"
                    dangerouslySetInnerHTML={{
                      __html: pageData.strategicpartnerdescription.value,
                    }}
                  />
                </div>

                <div className="mt-4">
                  <img
                    className="sm:w-76 w-60 mt-4 sm:mt-0"
                    src={pageData.strategicpartnerlogo.value[0]?.url}
                    alt={pageData.strategicpartnerlogo.value[0]?.name}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.strategicpartnercontent.value,
                }}
              />

              {pageData.strategicpartnercta.linkedItems.length > 0 && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {pageData.strategicpartnercta.linkedItems.map((item: any) => {
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
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <h2 className="text-4xl tracking-tighter max-w-md">
                {highlightEV(pageData.storyheading.value)}
              </h2>

              <img src={pageData.storyimage.value[0]?.url} alt="" />

              {pageData.storycta.linkedItems.length > 0 && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {pageData.storycta.linkedItems.map((item: any) => {
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

            <div>
              <div
                className="prose max-w-none text-white"
                dangerouslySetInnerHTML={{
                  __html: pageData.storycontent.value,
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* story here */}

      <Section>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center gradient-text">
            {pageData.objectivesheading.value}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {pageData.objectivesitems.linkedItems.map((item: any) => {
              return (
                <div
                  key={item.system.id}
                  className="flex flex-col gap-5 bg-black p-10 rounded-3xl"
                >
                  <h4 className="text-xl font-bold">
                    {item.elements.name.value}
                  </h4>
                  <div
                    className="prose text-gray-100"
                    dangerouslySetInnerHTML={{
                      __html: item.elements.content.value,
                    }}
                  />
                  <img
                    src={item.elements.image.value[0]?.url}
                    alt={item.elements.name.value}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="relative">
        <div className=" ">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="">
                <h2 className="text-3xl sm:text-4xl mb-4 max-w-sm ">
                  {highlightEV(pageData.whyheading.value)}
                </h2>
                <div
                  className="prose text-white"
                  dangerouslySetInnerHTML={{
                    __html: pageData.whycontent.value,
                  }}
                />
              </div>

              <div>
                <h3 className="mb-3">Benefits:</h3>
                <WhyExhibitCarousel pageData={pageData} />
              </div>
            </div>
          </div>

          {/* <img
            src={pageData.whyexhibitimage.value[0]?.url}
            alt={pageData.bannerheading.value}
            className="absolute -left-90 w-150 top-0 -z-10"
          /> */}
        </div>
      </Section>

      {/* <StatsSection
        eventDate={pageData.eventdate.value}
        statsheading={pageData.statisticsheading.value}
        statsitems={pageData.statsitems.linkedItems}
      /> */}
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
                <div className="grid sm:grid-cols-4 gap-5">
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
                          {/* <div
                            className="max-w-44"
                            dangerouslySetInnerHTML={{
                              __html: item.elements.content.value,
                            }}
                          /> */}
                        </div>
                      );
                    }
                  )}
                </div>
                <div className=" mt-8">
                  <Link
                    className="text-white underline flex gap-2 items-center"
                    href={pageData.conferencehighlightctalink.value}
                  >
                    {pageData.conferencehighlightctaname.value}
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

      {/* <Section className="relative  ">
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
      </Section> */}
    </div>
  );
}
