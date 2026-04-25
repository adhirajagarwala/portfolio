import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-3xl mx-auto w-full py-32">
      <Reveal>
        <SectionHeader label="skills" heading="Skills" />
      </Reveal>

      <Reveal delay={80}>
        <div className="flex flex-col divide-y divide-[#1a1a1a]">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col sm:flex-row sm:gap-10 gap-1.5 py-4 first:pt-0 last:pb-0"
            >
              <span className="font-mono text-[10px] text-[#444] uppercase tracking-wider sm:w-28 shrink-0 pt-[3px]">
                {group.category}
              </span>
              <span className="text-sm text-[#666]">
                {group.items.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
