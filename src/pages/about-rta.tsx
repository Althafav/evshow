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
              Dubai’s Roads and Transport Authority (RTA) is responsible for the
              planning, development, and management of integrated transport
              systems across the Emirate of Dubai. RTA plays a central role in
              shaping Dubai’s mobility landscape, ensuring transport systems are
              safe, efficient, and aligned with the Emirate’s long-term
              economic, urban, and sustainability objectives. Through policy
              leadership, infrastructure delivery, and regulatory oversight, RTA
              supports Dubai’s vision for smart, sustainable, and future-ready
              mobility.
            </div>
          </div>

          <Section>
            <h3 className="text-3xl mb-8 text-center">
              RTA and Sustainable Mobility
            </h3>
            <div className="text-center">
              RTA leads the implementation of Dubai’s Green Mobility Strategy
              and plays a key role in advancing low-emission and electric
              transport across both public and private sectors. This includes
              the expansion of electric vehicle infrastructure, integration of
              clean energy solutions, and adoption of smart and connected
              mobility systems. RTA’s initiatives support the transition toward
              sustainable transport networks that reduce environmental impact
              while enhancing efficiency, accessibility, and quality of life.
            </div>
          </Section>

          <Section>
            <h3 className="text-3xl mb-8 text-center">
             Strategic Partnership
            </h3>
            <div className="text-center">
              EV World Show is delivered in strategic alignment with the Roads
              and Transport Authority’s objectives to foster innovation, enable
              industry collaboration, and support the development of future
              mobility ecosystems. This strategic alignment reinforces the
              event’s credibility, policy relevance, and institutional standing,
              while supporting Dubai’s ambition to position itself as a global
              leader in electric and sustainable mobility.
            </div>
          </Section>

          {/* <Section>
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
          </Section> */}
        </div>
      </div>
    </Section>
  );
}
