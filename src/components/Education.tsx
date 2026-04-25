import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-12">
          Education
        </h2>
      </Reveal>
      <div className="flex flex-col divide-y divide-[#1e1e2a]">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80}>
            <div className="py-7 flex flex-col sm:flex-row sm:gap-10 gap-3">
              <span className="text-xs font-mono text-zinc-600 sm:w-16 shrink-0 pt-0.5">
                {e.year}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium text-zinc-100">{e.degree}</h3>
                <p className="text-xs text-zinc-500">{e.school}</p>
                <p className="text-xs text-zinc-500 mt-1">{e.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
