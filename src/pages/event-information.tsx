import CalenderIcon from "@/components/UI/Icons/CalenderIcon";
import ClockIcon from "@/components/UI/Icons/ClockIcon";
import HallIcon from "@/components/UI/Icons/HallIcon";
import VenueIcon from "@/components/UI/Icons/VenueIcon";
import IframeEmbed from "@/components/UI/IframeEmbed";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("event_information_page")
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
      <div className="relative py-40">
        {pageData.bannerimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}

        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl sm:text-4xl   mb-4">
            {pageData.bannerheading.value}
          </h1>
          <p className="text-xl  ">{pageData.bannersubheading.value}</p>
        </div>
      </div>
      <Section>
        <div className="container mx-auto">
          <h2 className="text-3xl">
            {highlightEV(pageData.aboutheading.value)}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <img
                src={pageData.aboutimage.value[0]?.url}
                alt={pageData.aboutheading.value}
              />
            </div>

            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.aboutdescription.value,
                }}
              />

              <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* Show Dates */}
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                    <CalenderIcon />
                    <span className="text-white font-medium">
                      {pageData.showdate.value}
                    </span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                    <VenueIcon />
                    <span className="text-white font-medium">
                      {pageData.venue.value}
                    </span>
                  </div>

                  {/* Timings */}
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                    <ClockIcon />
                    <span className="text-white font-medium">
                      {pageData.showtiming.value}
                    </span>
                  </div>

                  {/* Hall No */}
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-emerald-500/30 bg-[#021412]">
                    <HallIcon />
                    <span className="text-white font-medium">
                      {pageData.hallno.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="p-5 ev-gradient-stroke">
              <h2 className="text-3xl text-white mb-3">
                {pageData.missionheading.value}
              </h2>
              <div
                className="prose text-white"
                dangerouslySetInnerHTML={{
                  __html: pageData.missiondescription.value,
                }}
              />
            </div>

            <div className="p-5 ev-gradient-stroke">
              <h2 className="text-3xl text-white mb-3">
                {pageData.visionheading.value}
              </h2>
              <div
                className="prose text-white"
                dangerouslySetInnerHTML={{
                  __html: pageData.visiondescription.value,
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center gradient-text">
            {pageData.objectivesheading.value}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            {pageData.objectiveitems.linkedItems.map((item: any) => {
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

      <Section className="relative h-180 flex justify-center items-center">
        {pageData.whydubaiimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-lighten"
            style={{
              backgroundImage: `url(${pageData.whydubaiimage.value[0]?.url})`,
            }}
          />
        )}
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl text-center mb-3">
            {pageData.whydubaiheading.value}
          </h2>
          <div
            className="prose text-gray-200 mx-auto max-w-4xl"
            dangerouslySetInnerHTML={{ __html: pageData.whydubaicontent.value }}
          />
        </div>
      </Section>
      <Section>
        <div className="container mx-auto">
          <IframeEmbed src={pageData.maplink.value} />
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <h2 className="text-3xl gradient-text mb-8">
            {pageData.directionheading.value}
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {pageData.directionitems.linkedItems.map((item: any) => {
              return (
                <div className="" key={item.system.id}>
                  <div>
                    <img
                      src={item.elements.image.value[0]?.url}
                      alt={item.elements.name.value}
                      className="w-full aspect-video object-cover rounded-3xl"
                    />

                    <div className="p-2">
                      <h4 className="text-xl font-bold">
                        {item.elements.name.value}
                      </h4>
                      <div
                        className="prose text-white"
                        dangerouslySetInnerHTML={{
                          __html: item.elements.content.value,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3 gap-5 items-center">
            <div>
              <h2 className="text-3xl gradient-text">
                {pageData.parkingheading.value}
              </h2>
            </div>

            <div className="col-span-2">
              <img
                className="w-full h-full object-cover"
                src={pageData.parkingimage.value[0]?.url}
                alt={pageData.parkingheading.value}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-black ev-gradient-stroke p-5 rounded-3xl shadow">
              <h4 className="text-xl sm:text-3xl gradient-text leading-snug mb-4">
                {pageData.admissionpolicyheading.value}
              </h4>
              <div
                className="prose text-white prose-invert"
                dangerouslySetInnerHTML={{
                  __html: pageData.admissionpolicycontent.value,
                }}
              />
            </div>

            <div className="bg-black ev-gradient-stroke p-5 rounded-3xl shadow">
              <h4 className="text-xl sm:text-3xl gradient-text leading-snug mb-4">
                {pageData.badgepolicyheading.value}
              </h4>
              <div
                className="prose text-white prose-invert"
                dangerouslySetInnerHTML={{
                  __html: pageData.badgepolicycontent.value,
                }}
              />
            </div>
          </div>
          {pageData.policyimportantnote.value && (
            <div className="mt-10">
              <p className="text-primary">
                {pageData.policyimportantnote.value}
              </p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
