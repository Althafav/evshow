import Section from "@/components/UI/Section";
import React from "react";

export default function Page() {
  return (
    <Section className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl mb-10">
          <img
            src="/assets/imgs/dubai.jpg"
            alt="Dubai skyline"
            className="w-full h-65 md:h-90 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <h1 className="p-6 text-3xl md:text-4xl font-semibold text-white">
              Why Dubai
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-lg leading-relaxed text-gray-300 max-w-xl mb-3">
              Dubai offers a unique combination of global connectivity, advanced
              infrastructure, regulatory clarity, and business-friendly
              policies, positioning the city as an ideal host for an
              international platform dedicated to electric and future mobility.
              The Emirate is guided by a long-term sustainability vision focused
              on clean energy, low-emission transport, and smart urban
              development. Through ambitious strategies and clear policy
              direction, Dubai is accelerating the transition toward sustainable
              and electric mobility as a core pillar of its economic growth,
              environmental responsibility, and quality-of-life objectives. This
              vision provides a stable, future-focused environment for
              innovation, investment, and large-scale deployment of electric
              mobility solutions.
            </p>

            <p className="font-bold mb-2">Infrastructure and Innovation</p>
            <p className="mb-3">
              Dubai continues to invest in electric vehicle charging networks,
              smart transport systems, and clean energy integration. These
              investments support large-scale adoption of electric mobility
              across public transport networks, commercial fleets, and private
              use. Ongoing innovation in digital mobility, automation, and
              infrastructure planning reinforces Dubai’s leadership in deploying
              future-ready transport solutions.
            </p>
            <p className="font-bold mb-2">Global Access</p>
            <p className="mb-3">
              Dubai World Trade Centre provides direct access to global markets through world-class exhibition facilities, logistics capabilities, aviation connectivity, and hospitality infrastructure.
Its strategic location and international reach make Dubai a natural convening point for global manufacturers, investors, policymakers, and industry leaders participating in EV World Show.
            </p>

            <p className="font-bold mb-2">
              The Sustainable Development Goals 2030
            </p>
            <p className="mb-3">
              In September 2015, all 193 UN Member States adopted the 17
              Sustainable Development Goals (SDGs)—a universal call to end
              poverty, protect the planet, and ensure that every person can
              enjoy peace and prosperity by 2030. Designed as an integrated
              framework, the SDGs recognize that advances in one area—such as
              affordable clean energy—reinforce gains in others, including
              health, education, decent work, and climate resilience. They also
              balance the three pillars of sustainability—social inclusion,
              economic growth, and environmental stewardship—emphasizing that
              long-term development depends on progress across all dimensions.
              Achieving the SDGs requires collective action from governments,
              business, civil society, and individuals. Innovations in
              technology, finance, and data—alongside local leadership and
              community engagement—are essential to mobilize the know-how and
              resources needed to deliver on the Goals worldwide.
            </p>

            <p className="font-bold mb-2">The SDGs in the UAE</p>
            <p className="mb-3">
              The United Arab Emirates was an early architect of the 2030
              Agenda, actively shaping the Goals during negotiations and
              becoming one of the first countries to endorse them in 2015. Its
              leadership recognised that long-term prosperity hinges on
              balancing economic growth, social inclusion and environmental
              stewardship, positioning the SDGs at the centre of national
              development from the outset.
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-linear-to-br from-white/5 to-white/0 border border-white/10">
            <h3 className="text-xl mb-3 font-medium text-gray-400">Vision</h3>
            <h2 className="text-2xl md:text-3xl font-semibold gradient-text leading-snug">
              THE VISION OF H.H. SHEIKH MOHAMMED BIN RASHID AL MAKTOUM IS TO
              MAKE DUBAI THE WORLD’S DIGITAL CAPITAL
            </h2>
          </div>
        </div>
      </div>
    </Section>
  );
}
