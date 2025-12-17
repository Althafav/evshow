import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("travel_hotels_page")
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
      {" "}
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
          <h1 className="text-3xl sm:text-5xl gradient-text text-center max-w-3xl leading-snug mx-auto mb-4">
            {pageData.bannerheading.value}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-center mb-3">
            {pageData.bannersubheading.value}
          </p>
        </div>
      </div>
      <Section>
        <div className="container mx-auto">
          <h2 className="gradient-text text-3xl text-center">
            {pageData.directionheading.value}
          </h2>

          <div className="grid sm:grid-cols-4 gap-5 mt-8">
            {pageData.directionitems.linkedItems.map((item: any) => {
              return (
                <div
                  key={item.system.id}
                  className="bg-black ev-gradient-stroke p-5"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.elements.image.value[0]?.url}
                      alt={item.elements.name.value}
                    />
                    <h3>{item.elements.name.value}</h3>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.elements.content.value,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center">
            {pageData.hotelsheading.value}
          </h2>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {pageData.hotelsitems.linkedItems.map((item: any) => {
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
    </div>
  );
}
