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
            className="w-full h-[260px] md:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <h1 className="p-6 text-3xl md:text-4xl font-semibold text-white">
              About Dubai
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-lg leading-relaxed text-gray-300 max-w-xl mb-3">
              Dubai is the second largest emirate with an area of 4,114sq. km.,
              which is about 5 per cent of the UAE without the islands. The
              older districts of Dubai cover an area of 1500sq. m. and is called
              'Pearl of the Gulf' and 'Jewel of the world' because of its
              heritage and history.
            </p>

            <p className="font-bold mb-2">Innovating for the Future</p>
            <p className="mb-3">
              Dubai’s pursuit in building the city of the future is accelerated
              through technological advancements in key sectors.
            </p>
            <p className="font-bold mb-2">City of the Future</p>
            <p className="mb-3">
              Dubai released a wide range of innovative initiatives led by the
              Dubai Future Foundation, all aimed at shaping the future of Dubai
              and the world. From the iconic Museum of the Future to
              forward-thinking programs like Dubai Future Councils, Dubai Future
              Forum, and Dubai 10X, these initiatives span research, technology,
              education, and space exploration. Each project reflects Dubai’s
              commitment to innovation, global collaboration, and readiness for
              future challenges.
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
