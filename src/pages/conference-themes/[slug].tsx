import PageHeadBanner from "@/components/Banner/PageHeadBanner";
import FAQAccordion from "@/components/FAQPage/FAQComponent";

import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import { GetServerSideProps } from "next";
import React from "react";

export default function FaqPage({ pageData, slug }: any) {
  if (!pageData) return null;

  return (
    <div>
      <PageHeadBanner
        heading={pageData.bannerheading?.value}
        subheading={pageData.bannerdescription?.value}
      />

      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {pageData.features.linkedItems.map((item: any) => {
              return (
                <div
                  key={item.system.id}
                  className="flex flex-col gap-5 p-10 rounded-3xl bg-black"
                >
                  <h2 className="text-3xl gradient-text">
                    {item.elements.name.value}
                  </h2>
                  <div
                    className="text-gray-100 prose max-w-none prose-invert"
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const slugParam = context.params?.slug;
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    if (!slug) {
      return { notFound: true };
    }

    const response = await deliveryClient
      .items()
      .type("conferencethemepage")
      .equalsFilter("elements.slug", slug)
      .depthParameter(2)
      .toPromise();

    const item = response.data.items?.[0];
    if (!item) return { notFound: true };

    return {
      props: {
        pageData: item.elements,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return { notFound: true };
  }
};
