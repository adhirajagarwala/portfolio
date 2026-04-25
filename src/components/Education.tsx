import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="px-6 max-w-3xl mx-auto w-full py-20">
      <Reveal>
        <SectionHeader label="education" heading="Education" />
      </Reveal>

      <Reveal delay={80}>
        <div className="relative">
          <div className="absolute left-[6.5rem] top-0 bottom-0 w-px bg-[#2e2820]" />

          <div className="flex flex-col">
            {education.map((e) => (
              <div key={e.school} className="flex gap-0 pb-9 last:pb-0">
                <span className="w-[6.5rem] shrink-0 font-mono text-[11px] text-[#5a4f42] pt-0.5 pr-5 text-right">
                  {e.year}
                </span>
                <div className="flex-1 pl-6">
                  <h3 className="text-sm font-medium text-[#ede8dc] leading-snug">
                    {e.degree}
                  </h3>
                  <p className="font-mono text-[11px] text-[#6b5d4e] mt-0.5">
                    {e.school}
                  </p>
                  <p className="text-xs text-[#6b5d4e] mt-1">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
