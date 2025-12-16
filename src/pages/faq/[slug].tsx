import PageHeadBanner from "@/components/Banner/PageHeadBanner";
import FAQAccordion from "@/components/FAQPage/FAQComponent";

import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import { GetServerSideProps } from "next";
import React from "react";
import FaqNavigation from "./FaqNavigation";

export default function FaqPage({ pageData, slug }: any) {
  if (!pageData) return null;

  return (
    <div>
      <PageHeadBanner
        heading={pageData.bannerheading?.value}
        subheading={pageData.bannersubheading?.value}
      />

      <Section>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-12 gap-5">
            <div className="col-span-4">
              <FaqNavigation activeSlug={slug} />
            </div>

            <div className="col-span-8">
              <h3 className="mb-4 gradient-text text-2xl">
                {pageData.heading?.value}
              </h3>

              <FAQAccordion items={pageData.faqitems?.linkedItems || []} />
            </div>
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
      .type("faqpage")
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
