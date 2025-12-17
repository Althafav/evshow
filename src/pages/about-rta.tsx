import Section from "@/components/UI/Section";
import React from "react";

export default function Page() {
  return (
    <Section>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl mb-8 text-center">About RTA</h3>
            <div className="text-center">
              Dubai is one of the fastest growing cities in today's world,
              making the provision of high quality infrastructure facilities
              absolutely imperative. With that in mind, as well as the high
              priority allocated by the government of Dubai to the provision of
              an advanced transport network for the people of Dubai, RTA
              endeavours to improve the public transport facilities and develop
              roads across the emirate to make travel safer and smoother.
            </div>
          </div>

          <Section>
            <h3 className="text-3xl mb-8 text-center">Goals and Objectives</h3>
            <div className="text-center">
              Dubai is one of the fastest growing cities in today's world,
              making the provision of high-quality infrastructure facilities
              imperative. The government of Dubai recognizes the importance of
              providing an advanced transport network for the people and
              prioritizes the initiatives to enhance the public transport
              facilities and improve roads across the emirate to make travel
              safer and smoother. To achieve this vision, the Roads and
              Transport Authority (RTA) was formed by decree number 17 for the
              year 2005. RTA is responsible for planning and providing the
              requirements of transport, roads & traffic in the Emirate of
              Dubai, and between Dubai and other Emirates of the UAE and
              neighboring countries in order to provide an effective & an
              integrated transport system capable of serving the vital interests
              of the Emirate.
            </div>
          </Section>

          <Section>
            <h3 className="text-3xl mb-8 text-center">Mission and Vision</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="ev-gradient-stroke p-5 rounded-2xl">
                <h3 className="text-xl font-medium mb-2">Vision</h3>
                The world leader in seamless and sustainable mobility
              </div>

              <div className="ev-gradient-stroke p-5 rounded-2xl">
                <h3 className="text-xl font-medium mb-2">Mission</h3>
                We provide seamless and safe travel with innovative, sustainable
                mobility solutions and services to make every journey in Dubai a
                world-class experience.
              </div>
            </div>
            <p className="mt-4">
              Our mission is to develop and mange integrated and sustainable
              Roads and transportation systems at world - class level, and
              provide pioneered services to all stockholders for their
              happiness, and support Dubai's vision through shaping the future,
              preparing policies and legislation, adopting technologies and
              innovations, and implementing world - class practices and
              standards. RTA's Sustainability long term target is to achieve
              global pioneering levels in Roads & Transport sustainability.
            </p>
          </Section>
        </div>
      </div>
    </Section>
  );
}
