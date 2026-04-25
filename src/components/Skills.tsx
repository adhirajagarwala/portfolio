import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-12">
          Skills
        </h2>
      </Reveal>
      <div className="flex flex-col gap-8">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="flex flex-col sm:flex-row sm:gap-10 gap-3">
              <span className="text-xs font-mono text-zinc-600 sm:w-24 shrink-0 pt-1">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-zinc-300 bg-[#111116] border border-[#1e1e2a] px-3 py-1 rounded-full hover:border-accent/40 hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
