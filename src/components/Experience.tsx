import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-3xl mx-auto w-full py-32">
      <Reveal>
        <SectionHeader label="experience" heading="Experience" />
      </Reveal>

      <Reveal delay={80}>
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[6.5rem] top-0 bottom-0 w-px bg-[#1e1e1e]" />

          <div className="flex flex-col">
            {experience.map((e, i) => (
              <div key={e.title} className="flex gap-0 pb-10 last:pb-0">
                {/* Date */}
                <span className="w-[6.5rem] shrink-0 font-mono text-[11px] text-[#444] pt-0.5 pr-5 text-right">
                  {e.year}
                </span>

                {/* Content */}
                <div className="flex-1 pl-6 pb-2">
                  <h3 className="text-sm font-medium text-[#f0f0f0] leading-snug">
                    {e.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[#555] mt-0.5 mb-2">
                    {e.org}
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {e.description}
                  </p>
                  {"link" in e && e.link && (
                    <a
                      href={e.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-[11px] text-[#E8A838] hover:underline mt-2"
                    >
                      {e.link} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
