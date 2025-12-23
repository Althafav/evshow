import CTAButton from "@/components/UI/CTAButton";
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
          <h2 className="text-3xl text-center">
            {pageData.hotelsheading.value}
          </h2>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {pageData.hotelitems.linkedItems.map((item: any) => {
              return (
                <div key={item.system.id} className="">
                  <div className="ev-gradient-stroke overflow-hidden rounded-3xl">
                    <div className="relative ">
                      <div className="absolute right-0 top-10 bg-white px-8 rounded-l-2xl">
                        <img
                          src={item.elements.companylogo.value[0]?.url}
                          alt={item.elements.image.value[0]?.name}
                        />
                      </div>
                      <img
                        className="w-full object-cover aspect-video max-h-62.5"
                        src={item.elements.image.value[0]?.url}
                        alt={item.elements.image.value[0]?.name}
                      />
                    </div>

                    <div className="p-5 relative">
                      <h4>{item.elements.name.value}</h4>
                      <p>{item.elements.location.value}</p>

                      <div className="gradient-bg px-4 inline-flex items-center rounded-l-2xl absolute right-0 top-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M14.3231 3.66671C14.3231 4.67921 13.5023 5.50004 12.4897 5.50004C11.4772 5.50004 10.6564 4.67921 10.6564 3.66671C10.6564 2.65418 11.4772 1.83337 12.4897 1.83337C13.5023 1.83337 14.3231 2.65418 14.3231 3.66671ZM11.7759 13.0152L14.156 15.3637C14.2472 15.4538 14.3186 15.562 14.3655 15.6813L15.6347 18.9151C15.8197 19.3864 15.5876 19.9184 15.1163 20.1033C14.645 20.2883 14.1131 20.0562 13.9281 19.5849L12.7299 16.5321L8.63757 12.4941C8.43737 12.2966 8.33892 12.018 8.37054 11.7386L8.69834 8.84216C7.90822 9.62715 7.29873 10.7316 6.83164 12.1949C6.67774 12.6772 6.16197 12.9434 5.67967 12.7894C5.19736 12.6355 4.93121 12.1197 5.08516 11.6374C5.94234 8.95184 7.36551 6.94168 9.75324 6.01984L9.76411 6.01571C10.3722 5.78975 11.0049 5.80795 11.5683 6.09927C12.1099 6.37922 12.4953 6.86271 12.7477 7.4046C12.854 7.63276 12.9523 7.84597 13.0445 8.04613C13.2681 8.53095 13.4564 8.93942 13.6371 9.29839C13.8909 9.80274 14.0949 10.1366 14.2964 10.3714C14.4833 10.5891 14.6692 10.7228 14.9062 10.8153C15.1609 10.9148 15.5179 10.9834 16.0692 10.9999C16.5753 11.0151 16.9732 11.4376 16.958 11.9437C16.9428 12.4497 16.5203 12.8476 16.0143 12.8324C15.352 12.8126 14.7639 12.728 14.2392 12.5231C13.6968 12.3112 13.2691 11.9893 12.9053 11.5656C12.6759 11.2983 12.4748 10.9936 12.2862 10.6618L11.7759 13.0152Z"
                            fill="white"
                          />
                          <path
                            d="M8.37023 13.8507L9.88965 15.308L9.19051 17.6673C9.13638 17.8499 9.0268 18.0111 8.87687 18.1285L6.52352 19.9721C6.125 20.2842 5.54882 20.2143 5.23661 19.8157C4.92439 19.4172 4.99438 18.841 5.39295 18.5288L7.5159 16.8658L8.1556 14.707L8.37023 13.8507Z"
                            fill="white"
                          />
                        </svg>
                        {item.elements.distance.value}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <CTAButton
                      buttonname={item.elements.ctaname.value}
                      buttonlink={item.elements.ctalink.value}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* <Section>
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
      </Section> */}

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
          <IframeEmbed src={pageData.maplink.value} />
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
