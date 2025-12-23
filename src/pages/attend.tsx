import CTABlock from "@/components/UI/CTABlock";
import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("attend_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function attend({ pageData }: any) {
  return (
    <div>
      {" "}
      <div className="relative py-20">
        {pageData.bannerimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-25"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#021412] via-[#021412]/80 to-transparent z-1" />

        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl sm:text-5xl text-center max-w-xl mx-auto mb-4">
            {highlightEV(pageData.bannerheading.value)}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-center mb-3">
            {pageData.bannersubheading.value}
          </p>
          <p className="text-xl max-w-2xl mx-auto text-center gradient-text">
            {pageData.datevenue.value}
          </p>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: pageData.bannerdescription.value,
            }}
          />

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
      <Section>
        <div className="container mx-auto">
          <h2 className="gradient-text text-center text-3xl mb-3">
            {pageData.whoattendheading.value}
          </h2>
          <p className="text-center text-gray-100 max-w-3xl mx-auto mb-3">
            {pageData.whoattendsubheading.value}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8">
            {pageData.whoattenditems.linkedItems.map((item: any) => {
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
      <CTABlock
        heading={pageData.visitorctaheading.value}
        subheading={pageData.visitorctasubheading.value}
        ctaname={pageData.visitorctaname.value}
        ctalink={pageData.visitorctalink.value}
      />
    </div>
  );
}
