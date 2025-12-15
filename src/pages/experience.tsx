import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("experience_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function experience({ pageData }: any) {
  return (
    <div>
      <div className="relative py-20">
        {pageData.bannerimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}

        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center max-w-xl mx-auto mb-4">
            {highlightEV(pageData.bannerheading.value)}
          </h1>
          <p className="text-xl max-w-xl mx-auto text-center">
            {pageData.bannersubheading.value}
          </p>
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
          <div className="grid sm:grid-cols-2 gap-5">
            {pageData.experienceitems.linkedItems.map((item: any) => {
              return (
                <div key={item.system.id} className="flex flex-col gap-5 p-10 rounded-3xl bg-black">
                  <h2 className="text-3xl gradient-text">{item.elements.name.value}</h2>
                  <div
                  className="text-gray-100"
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
    </div>
  );
}
