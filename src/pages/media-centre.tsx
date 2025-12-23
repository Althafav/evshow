import PressReleaseCarousel from "@/components/Carousel.tsx/PressReleaseCarousel";
import CTABlock from "@/components/UI/CTABlock";
import CTAButton from "@/components/UI/CTAButton";
import Section from "@/components/UI/Section";
import { deliveryClient } from "@/modules/Globals";
import React from "react";

export async function getStaticProps() {
  const res = await deliveryClient
    .item("media_centre_page")
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
      <div className="relative py-40">
        {pageData.bannerimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{
              backgroundImage: `url(${pageData.bannerimage.value[0]?.url})`,
            }}
          />
        )}

        <div className="relative z-10 container mx-auto">
          <h1 className="text-3xl sm:text-4xl   mb-4">
            {pageData.bannerheading.value}
          </h1>
          <p className="text-xl  ">{pageData.bannersubheading.value}</p>
        </div>
      </div>

      <Section className="relative h-72">
        {pageData.pressreleaseimage.value && (
          <div
            className="absolute inset-0 bg-cover bg-center brightness-25"
            style={{
              backgroundImage: `url(${pageData.pressreleaseimage.value[0]?.url})`,
            }}
          />
        )}
        <div className="">
          <div className="relative z-10 container mx-auto">
            <h2 className="text-center text-3xl">
              {pageData.pressreleaseheading.value}
            </h2>
          </div>
        </div>
      </Section>

    
      <div>
        <div className="container mx-auto">
          <PressReleaseCarousel pageData={pageData} />
          {/* <div className="grid grid-cols-2 gap-5">
            {pageData.pressreleaseitems.linkedItems.map((item: any) => {
              return (
                <div key={item.system.id} className="flex ev-gradient-stroke rounded-3xl overflow-hidden">
                  <div>
                    <img
                      className="h-full min-w-50 object-cover"
                      src={item.elements.image.value[0]?.url}
                      alt=""
                    />
                  </div>
                  <div className="p-5 bg-black ">
                    <h4 className="mb-4">{item.elements.heading.value}</h4>

                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: item.elements.content.value,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
      <Section id="press-kit">
        <CTABlock
          heading={pageData.presskitctaheading.value}
          subheading={pageData.presskitctasubheading.value}
          ctaname={pageData.presskitctaname.value}
          ctalink={pageData.presskitctalink.value}
        />
      </Section>
      <Section id="media-enquiries">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 items-center gap-10">
            <div>
              <h3 className="text-3xl mb-5">
                {pageData.pressctaheading.value}
              </h3>
              {pageData.pressctalink.value && (
                <div className="">
                  <CTAButton
                    variant="primary"
                    buttonname={pageData.pressctaname.value}
                    buttonlink={pageData.pressctalink.value}
                  />
                </div>
              )}

              <div className="mt-10 flex gap-5">
                <h4 className="gradient-text text-2xl">
                  {pageData.mediaenquiriesheading.value}
                </h4>
                <div>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M13.125 12.3047H1.875C1.22883 12.3047 0.703125 11.779 0.703125 11.1328V3.51562C0.703125 2.86945 1.22883 2.34375 1.875 2.34375H13.125C13.7712 2.34375 14.2969 2.86945 14.2969 3.51562V11.1328C14.2969 11.779 13.7712 12.3047 13.125 12.3047ZM1.875 2.8125C1.48723 2.8125 1.17188 3.12785 1.17188 3.51562V11.1328C1.17188 11.5206 1.48723 11.8359 1.875 11.8359H13.125C13.5128 11.8359 13.8281 11.5206 13.8281 11.1328V3.51562C13.8281 3.12785 13.5128 2.8125 13.125 2.8125H1.875Z"
                        fill="url(#paint0_linear_26_6260)"
                        stroke="url(#paint1_linear_26_6260)"
                        stroke-width="0.5"
                      />
                      <path
                        d="M7.49999 7.62198C7.3549 7.62187 7.21341 7.57679 7.09499 7.49296L0.93784 3.95331C0.883966 3.9223 0.844607 3.87118 0.828412 3.81117C0.812217 3.75115 0.820512 3.68717 0.851473 3.63327C0.882544 3.57947 0.933669 3.54017 0.993653 3.52398C1.05364 3.50779 1.11759 3.51604 1.17151 3.5469L7.36089 7.10694C7.40115 7.13668 7.44988 7.15272 7.49993 7.15272C7.54998 7.15272 7.59871 7.13668 7.63897 7.10694L7.661 7.09253L13.8285 3.5469C13.8822 3.51799 13.9451 3.51119 14.0038 3.52793C14.0625 3.54466 14.1124 3.58363 14.1428 3.63654C14.1732 3.68946 14.1818 3.75215 14.1668 3.8113C14.1517 3.87045 14.1142 3.92139 14.0621 3.95331L7.90499 7.49296C7.78657 7.57679 7.64508 7.62187 7.49999 7.62198Z"
                        fill="url(#paint2_linear_26_6260)"
                        stroke="url(#paint3_linear_26_6260)"
                        stroke-width="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_26_6260"
                          x1="14.6682"
                          y1="4.11642"
                          x2="0.130634"
                          y2="4.15665"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_26_6260"
                          x1="14.6682"
                          y1="4.11642"
                          x2="0.130634"
                          y2="4.15665"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_26_6260"
                          x1="14.5388"
                          y1="4.2466"
                          x2="0.258443"
                          y2="4.34078"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_26_6260"
                          x1="14.5388"
                          y1="4.2466"
                          x2="0.258443"
                          y2="4.34078"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href={`mailto:${pageData.mediaenquiryemail.value}`}>
                      {pageData.mediaenquiryemail.value}
                    </a>
                  </div>

                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M11.4019 12.5004C11.3259 12.5005 11.252 12.476 11.1911 12.4305C11.1302 12.3851 11.0857 12.3211 11.0643 12.2483C11.0428 12.1754 11.0455 12.0976 11.0719 12.0264C11.0984 11.9552 11.1472 11.8945 11.2111 11.8533C11.5423 11.6351 11.824 11.3497 12.038 11.0157C12.2402 10.7084 12.3096 10.4597 12.2447 10.276C12.1127 9.90238 11.4023 9.63261 10.7983 9.43925C10.5317 9.3529 10.2463 9.34208 9.97383 9.40798C9.70138 9.47388 9.45249 9.61393 9.25475 9.81261L9.026 10.0416C8.98503 10.0826 8.93455 10.1129 8.87905 10.1297C8.72202 10.1766 7.86022 10.3322 6.26459 8.73636C6.23189 8.70372 6.20594 8.66496 6.18822 8.62229C6.17049 8.57962 6.16135 8.53387 6.16131 8.48767C6.16126 8.44147 6.17032 8.39571 6.18796 8.353C6.2056 8.3103 6.23148 8.27149 6.26412 8.23878C6.29677 8.20608 6.33553 8.18013 6.3782 8.16241C6.42087 8.14469 6.46661 8.13554 6.51282 8.1355C6.55902 8.13545 6.60478 8.14451 6.64749 8.16215C6.69019 8.1798 6.729 8.20568 6.7617 8.23832C7.80842 9.28527 8.42108 9.43246 8.62264 9.44957L8.75764 9.31457C9.04667 9.02458 9.41022 8.82011 9.80814 8.72374C10.2061 8.62738 10.6229 8.64285 11.0126 8.76847C11.8012 9.02113 12.6628 9.34832 12.9075 10.0407C13.0497 10.4426 12.9544 10.9003 12.6262 11.4C12.3586 11.817 12.0064 12.1731 11.5924 12.4453C11.5355 12.4816 11.4693 12.5007 11.4019 12.5004ZM9.71272 12.972C8.1035 12.972 6.25592 12.0415 4.60733 10.3927C4.57375 10.3603 4.54697 10.3215 4.52854 10.2786C4.51012 10.2357 4.50042 10.1896 4.50001 10.1429C4.49961 10.0962 4.5085 10.0499 4.52618 10.0067C4.54386 9.96349 4.56996 9.92423 4.60297 9.89122C4.63598 9.85821 4.67523 9.83211 4.71844 9.81443C4.76164 9.79676 4.80794 9.78786 4.85462 9.78827C4.9013 9.78867 4.94743 9.79837 4.99032 9.8168C5.03321 9.83522 5.07201 9.862 5.10444 9.89558C6.66022 11.4516 8.44897 12.3359 9.88334 12.2646C9.92959 12.2617 9.97597 12.268 10.0197 12.2832C10.0635 12.2985 10.1038 12.3223 10.1381 12.3534C10.1725 12.3845 10.2004 12.4221 10.2199 12.4641C10.2395 12.5061 10.2505 12.5516 10.2522 12.5979C10.257 12.691 10.2245 12.7822 10.162 12.8514C10.0995 12.9206 10.0121 12.9621 9.91897 12.9668C9.85077 12.9701 9.78186 12.972 9.71272 12.972Z"
                        fill="url(#paint0_linear_26_6263)"
                        stroke="url(#paint1_linear_26_6263)"
                        stroke-width="0.5"
                      />
                      <path
                        d="M4.85555 10.4959C4.80939 10.4959 4.76367 10.4868 4.72104 10.4691C4.6784 10.4514 4.63968 10.4255 4.60712 10.3927C2.83337 8.61923 1.87665 6.56001 2.04797 4.88446C2.09665 4.37514 2.26184 3.88385 2.53076 3.44858C2.79969 3.01332 3.16513 2.64575 3.59883 2.37431C4.09969 2.04618 4.55743 1.95079 4.95821 2.09306C5.65055 2.33775 5.97797 3.19931 6.2304 3.98798C6.3562 4.37764 6.37178 4.7945 6.2754 5.19247C6.17902 5.59043 5.97445 5.95398 5.6843 6.2429L5.54579 6.38165C5.56266 6.56282 5.6993 7.17853 6.76055 8.23884C6.82459 8.30514 6.86003 8.39395 6.85923 8.48613C6.85843 8.57831 6.82145 8.66648 6.75627 8.73167C6.69109 8.79685 6.60291 8.83382 6.51073 8.83462C6.41855 8.83542 6.32975 8.79999 6.26344 8.73595C4.66782 7.14056 4.82297 6.27829 4.87008 6.12173C4.88674 6.06616 4.91704 6.01565 4.95821 5.97478L5.18719 5.74579C5.38572 5.548 5.52566 5.29915 5.59156 5.02677C5.65745 4.75439 5.64672 4.46909 5.56055 4.20243C5.36719 3.59821 5.09743 2.88782 4.72407 2.75587C4.54008 2.69095 4.29118 2.76032 3.98415 2.96235C3.63703 3.17568 3.34444 3.46701 3.12962 3.8132C2.9148 4.15939 2.78367 4.55091 2.74665 4.95665C2.59641 6.42384 3.47743 8.27048 5.10329 9.8961C5.15249 9.94527 5.18599 10.0079 5.19957 10.0761C5.21315 10.1444 5.20619 10.2151 5.17957 10.2793C5.15295 10.3436 5.10786 10.3985 5.05002 10.4371C4.99217 10.4758 4.92417 10.4964 4.85462 10.4963L4.85555 10.4959Z"
                        fill="url(#paint2_linear_26_6263)"
                        stroke="url(#paint3_linear_26_6263)"
                        stroke-width="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_26_6263"
                          x1="13.2029"
                          y1="8.99621"
                          x2="4.14327"
                          y2="9.02839"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_26_6263"
                          x1="13.2029"
                          y1="8.99621"
                          x2="4.14327"
                          y2="9.02839"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_26_6263"
                          x1="6.9912"
                          y1="3.53591"
                          x2="1.82484"
                          y2="3.54189"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_26_6263"
                          x1="6.9912"
                          y1="3.53591"
                          x2="1.82484"
                          y2="3.54189"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0096FF" />
                          <stop offset="0.0001" stop-color="#07AFD2" />
                          <stop offset="1" stop-color="#1CFB4B" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <a href={`tel:${pageData.mediaenquiryphone.value}`}>
                      {pageData.mediaenquiryphone.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="mix-blend-screen"
              src={pageData.pressctaimage.value[0]?.url}
              alt=""
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
