import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("terms___conditions_page")
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
  return <Section>
    <div className="container mx-auto">
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: pageData.contents.value}}/>
    </div>
  </Section>
}
