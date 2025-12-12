import RegisterInterestForm from "@/components/Form/RegisterInterestForm";
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
    <div>
      {attendAs}
      <RegisterInterestForm
        pageData={pageData}
        CountriesData={CountriesData}
        CountriesCode={CountriesCode}
        attendAs={attendAs}
        mainsource={mainsource}
        subsource={subsource}
      />
    </div>
  );
}

export async function getServerSideProps({ query }: any) {
  const mainsource = query.mainsource || "Website";
  const subsource = query.subsource || "/";
  const attendAs = query.attend || "";
  console.log("query", query.attend);
  const res = await deliveryClient
    .item("register_interest_form")
    .depthParameter(2)
    .toPromise();

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
