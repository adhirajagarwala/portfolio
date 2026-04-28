import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-3xl mx-auto w-full py-20 scroll-mt-20">
      <Reveal>
        <SectionHeader label="experience" heading="Experience" />
      </Reveal>

      <Reveal delay={80}>
        <div className="relative">
          <div className="absolute left-[6.5rem] top-0 bottom-0 w-px bg-[#2e2820]" />

          <div className="flex flex-col">
            {experience.map((e) => (
              <div key={e.title} className="flex gap-0 pb-9 last:pb-0">
                <span className="w-[6.5rem] shrink-0 font-mono text-[11px] text-[#5a4f42] pt-0.5 pr-5 text-right">
                  {e.year}
                </span>
                <div className="flex-1 pl-6 pb-1">
                  <h3 className="text-sm font-medium text-[#ede8dc] leading-snug">
                    {e.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[#6b5d4e] mt-0.5 mb-2">
                    {e.org}
                  </p>
                  <p className="text-sm text-[#a09080] leading-relaxed">
                    {e.description}
                  </p>
                  {"link" in e && e.link && (
                    <a
                      href={e.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-[11px] text-[#d4943a] hover:underline mt-2"
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
