import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-12">
          Experience
        </h2>
      </Reveal>
      <div className="flex flex-col divide-y divide-[#1e1e2a]">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 60}>
            <div className="py-7 flex flex-col sm:flex-row sm:gap-10 gap-3">
              <span className="text-xs font-mono text-zinc-600 sm:w-16 shrink-0 pt-0.5">
                {e.year}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <div>
                  <h3 className="text-sm font-medium text-zinc-100">
                    {e.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{e.org}</p>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {e.description}
                </p>
                {"link" in e && e.link && (
                  <a
                    href={e.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline w-fit"
                  >
                    {e.link} ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
