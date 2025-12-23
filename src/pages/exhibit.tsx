import ExhibitorBanner from "@/components/ExhibitorPage/ExhibitorBanner";
import WhyExhibitCarousel from "@/components/ExhibitorPage/WhyExhibitCarousel";
import ExhibitorValuePropositionWordStyle from "@/components/ExhibitPage/ExhibitorValuePropositionWordStyle";
import HowToExhibitSection from "@/components/ExhibitPage/HowToExhibitSection";
import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { highlightEV } from "@/lib/textHelpers";
import { deliveryClient } from "@/modules/Globals";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("exhibit_page")
    .depthParameter(2)
    .toPromise();

  return {
    props: {
      pageData: res.data.item.elements || null,
    },
    revalidate: 60,
  };
}

export default function exhibit({ pageData }: any) {
  return (
    <div>
      <ExhibitorBanner
        heading={pageData.bannerheading.value}
        description={pageData.bannerdescription.value}
      />
      <Section className="relative">
        <div className=" ">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="">
                <h2 className="text-3xl sm:text-4xl mb-4 max-w-sm ml-30">
                  {highlightEV(pageData.whyexhibitheading.value)}
                </h2>
                <div
                  className="prose text-white"
                  dangerouslySetInnerHTML={{
                    __html: pageData.whyexhibitdescription.value,
                  }}
                />
              </div>

              <div>
                <h3 className="mb-3">Benefits:</h3>
                <WhyExhibitCarousel pageData={pageData} />
              </div>
            </div>
          </div>

          <img
            src={pageData.whyexhibitimage.value[0]?.url}
            alt={pageData.bannerheading.value}
            className="absolute -left-90 w-150 top-0 -z-10"
          />
        </div>
      </Section>

      <Section>
        <div className="container mx-auto ev-gradient-stroke p-10">
          <h2 className="text-3xl sm:text-4xl gradient-text text-center">
            {pageData.exhibitorcategoriesheading.value}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-8 px-10">
            {pageData.exhibitorcategoriesitems.linkedItems.map((item: any) => {
              return (
                <div key={item.system.id} className="flex gap-2 items-center">
                  <img
                    className="w-10"
                    src={item.elements.image.value[0]?.url}
                    alt={item.elements.image.value[0]?.name}
                  />
                  <p>{item.elements.name.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <ExhibitorValuePropositionWordStyle/>
      <HowToExhibitSection/>

      <Section className="relative">
        {pageData.exhibitctabackgroundimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${pageData.exhibitctabackgroundimage.value[0]?.url})`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl sm:text-4xl gradient-text max-w-md mb-3">
            {pageData.exhibitctaheading.value}
          </h2>
          <p>{pageData.exhibitctasubheading.value}</p>

          {pageData.exhibitctabuttons.linkedItems.length > 0 && (
            <div className="mt-4 flex gap-3 flex-wrap">
              {pageData.exhibitctabuttons.linkedItems.map((item: any) => {
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
      </Section>
    </div>
  );
}
