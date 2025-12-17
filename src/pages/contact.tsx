import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("contact_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function contact({ pageData }: any) {
  return (
    <div>
      <div className="relative py-20">
        {pageData.bannerimage.value && (
          <div
            className="absolute  inset-0 bg-cover bg-center brightness-25"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl sm:text-5xl gradient-text text-center max-w-xl mx-auto mb-4">
            {pageData.bannerheading.value}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-center mb-3">
            {pageData.bannersubheading.value}
          </p>

          <div className="grid sm:grid-cols-4 gap-5 mt-10 prose-a:text-[#1CFB4B]">
            {pageData.contactitems.linkedItems.map((item: any) => {
              return (
                <div
                  key={item.system.id}
                  className="ev-gradient-stroke p-5 flex flex-col bg-black gap-5"
                >
                  <div>
                    <img
                      className="w-10"
                      src={item.elements.image.value[0]?.url}
                      alt={item.elements.name.value}
                    />
                  </div>

                  <h3 className="text-xl">{item.elements.name.value}</h3>

                  <div
                    className="prose text-white"
                    dangerouslySetInnerHTML={{
                      __html: item.elements.content.value,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Section className="">
        <div className="container mx-auto relative py-20 rounded-3xl overflow-hidden ">
          {pageData.locationbackgroundimage.value[0]?.url && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${pageData.locationbackgroundimage.value[0]?.url})`,
              }}
            />
          )}

          <div className="relative">
            <h3 className="text-3xl gradient-text text-center mb-8">
              {pageData.locationheading.value}
            </h3>
            <p className="text-center text-xl font-medium">Zabeel hall 4-5-6</p>
            <p className="text-center font-medium text-white text-xl">
              {pageData.address1.value}
            </p>
            <p className="text-center text-white text-xl">
              {pageData.address2.value}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
