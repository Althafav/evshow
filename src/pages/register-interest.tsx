import RegisterInterestForm from "@/components/Form/RegisterInterestForm";
import Section from "@/components/UI/Section";
import GenericData from "@/constants/countryData";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export default function Page({
  mainsource,
  subsource,
  CountriesCode,
  CountriesData,
  pageData,
  attendAs,
}: any) {
  return (
    <Section className="container mx-auto">
      <div className=" grid sm:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl mb-4">{pageData.bannerheading.value}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: pageData.bannersubheading.value,
            }}
          />

          <div>
            <img src={pageData.bannerimage.value[0]?.url} alt="" />
          </div>
        </div>
        <div>
          <RegisterInterestForm
            pageData={pageData}
            CountriesData={CountriesData}
            CountriesCode={CountriesCode}
            attendAs={attendAs}
            mainsource={mainsource}
            subsource={subsource}
          />
        </div>
      </div>
    </Section>
  );
}

export async function getServerSideProps({ query }: any) {
  const mainsource = query.mainsource || "Website";
  const subsource = query.subsource || "/";
  const attendAs = query.attend || "";

  let codename = "register_interest_form_visitor";

  if (attendAs.toLowerCase() === "exhibitor") {
    codename = "register_interest_form_exhibitor";
  } else if (attendAs.toLowerCase() === "sponsor") {
    codename = "register_interest_form_sponsor";
  }

  const res = await deliveryClient.item(codename).depthParameter(2).toPromise();

  const [CountriesCode, CountriesData] = await Promise.all([
    GenericData.countryCodes(),
    GenericData.countries(),
  ]);

  return {
    props: {
      pageData: res.data.item.elements || null,
      mainsource,
      subsource,
      attendAs,
      CountriesCode,
      CountriesData,
    },
  };
}
