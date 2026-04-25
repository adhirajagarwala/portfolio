import { about } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type StatValue = string | string[];

const stats: { label: string; value: StatValue }[] = [
  { label: "University",  value: "UIUC" },
  { label: "Degree",      value: "B.S. Electrical & Computer Engineering" },
  { label: "GPA",         value: "4.0 / 4.0" },
  { label: "Year",        value: "Class of 2028" },
  { label: "Distinction", value: ["James Scholar", "Dean's List", "Samsung Semiconductor Track Scholar"] },
  { label: "Based in",    value: "Urbana-Champaign, IL" },
];

export default function About() {
  return (
    <section id="about" className="px-6 max-w-3xl mx-auto w-full py-20">
      <Reveal>
        <SectionHeader label="about" heading="About" />
      </Reveal>

      <Reveal delay={80}>
        <div className="flex flex-col gap-4 mb-10">
          {about.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#555] text-[15px] leading-[1.8] max-w-2xl">
              {para}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-[#e5e5e5] rounded-lg p-4"
            >
              <span className="block font-mono text-[10px] text-[#999] uppercase tracking-wider mb-1.5">
                {item.label}
              </span>
              {Array.isArray(item.value) ? (
                <span className="flex flex-col gap-0.5">
                  {item.value.map((v) => (
                    <span key={v} className="text-sm text-[#111111] font-medium leading-snug block">
                      {v}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="text-sm text-[#111111] font-medium">
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
