import { about } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const stats = [
  { label: "University",  value: "UIUC" },
  { label: "Degree",      value: "B.S. Electrical & Computer Engineering" },
  { label: "GPA",         value: "4.0 / 4.0" },
  { label: "Year",        value: "Class of 2028" },
  { label: "Distinction", value: "James Scholar" },
  { label: "Based in",    value: "Urbana-Champaign, IL" },
];

export default function About() {
  return (
    <section id="about" className="px-6 max-w-3xl mx-auto w-full py-32">
      <Reveal>
        <SectionHeader label="about" heading="About" />
      </Reveal>

      <Reveal delay={80}>
        <div className="flex flex-col gap-4 mb-12">
          {about.split("\n\n").map((para, i) => (
            <p key={i} className="text-[#999] text-[15px] leading-[1.8] max-w-2xl">
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
              className="bg-[#111] border border-[#1e1e1e] rounded-lg p-4"
            >
              <span className="block font-mono text-[10px] text-[#444] uppercase tracking-wider mb-1.5">
                {item.label}
              </span>
              <span className="text-sm text-[#f0f0f0] font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
