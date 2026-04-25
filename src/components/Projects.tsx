import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <h2 className="text-xs font-mono text-accent tracking-widest uppercase mb-12">
          Projects
        </h2>
      </Reveal>
      <div className="flex flex-col divide-y divide-[#1e1e2a]">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="py-7 flex flex-col sm:flex-row sm:gap-10 gap-3">
              <span className="text-xs font-mono text-zinc-600 sm:w-16 shrink-0 pt-0.5">
                {p.year}
              </span>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-100">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{p.org}</p>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-600 hover:text-accent transition-colors shrink-0"
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-zinc-500 bg-[#111116] border border-[#1e1e2a] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
