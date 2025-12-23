import Link from "next/link";

const links = [
  { label: "General", slug: "general" },
  { label: "Visitor", slug: "visitor" },
  { label: "Exhibitor", slug: "exhibitor" },
  { label: "Sponsor", slug: "sponsor" },
  { label: "Conference & Agenda", slug: "conference-agenda" },
  { label: "Venue & Logistics", slug: "venue-logistics" },
  { label: "Media & Press", slug: "media-press" },
];

export default function FaqNavigation({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="">
      <ul className="space-y-5">
        {links.map((item) => {
          const isActive = item.slug === activeSlug;

          return (
            <li key={item.slug}>
              <Link
                href={`/faq/${item.slug}`}
                className={`text-lg font-medium transition-colors ${
                  isActive
                    ? "text-[#1CFB4B]"
                    : "text-white hover:text-[#1CFB4B]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
