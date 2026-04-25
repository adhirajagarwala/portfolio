import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="px-6 max-w-3xl mx-auto w-full py-32">
      <Reveal>
        <SectionHeader label="education" heading="Education" />
      </Reveal>

      <Reveal delay={80}>
        {/* Timeline — same layout as Experience */}
        <div className="relative">
          <div className="absolute left-[6.5rem] top-0 bottom-0 w-px bg-[#1e1e1e]" />

          <div className="flex flex-col">
            {education.map((e) => (
              <div key={e.school} className="flex gap-0 pb-10 last:pb-0">
                <span className="w-[6.5rem] shrink-0 font-mono text-[11px] text-[#444] pt-0.5 pr-5 text-right">
                  {e.year}
                </span>
                <div className="flex-1 pl-6">
                  <h3 className="text-sm font-medium text-[#f0f0f0] leading-snug">
                    {e.degree}
                  </h3>
                  <p className="font-mono text-[11px] text-[#555] mt-0.5">
                    {e.school}
                  </p>
                  <p className="text-xs text-[#555] mt-1">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
