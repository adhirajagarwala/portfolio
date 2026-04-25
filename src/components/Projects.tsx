import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const heroProject = projects[0];
const gridProjects = projects.slice(1).filter((p) => !p.hidden);

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-3xl mx-auto w-full py-20">
      <Reveal>
        <SectionHeader label="projects" heading="Projects" />
      </Reveal>

      {/* ── Hero card: LC-3 Assembler ────────────────────── */}
      <Reveal delay={80}>
        <div className="bg-[#1c1814] border border-[#2e2820] rounded-xl p-7 sm:p-8 mb-5 hover:-translate-y-0.5 transition-transform duration-200">
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-[#5a4f42] uppercase tracking-wider">
                    {heroProject.year}
                  </span>
                  <h3 className="text-base font-medium text-[#ede8dc] mt-1">
                    {heroProject.title}
                  </h3>
                  <p className="text-xs text-[#6b5d4e] mt-0.5">{heroProject.org}</p>
                </div>
                {heroProject.link && (
                  <a
                    href={heroProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a4f42] hover:text-[#d4943a] transition-colors text-sm shrink-0 mt-0.5"
                    aria-label="View on GitHub"
                  >
                    ↗
                  </a>
                )}
              </div>
              <p className="text-sm text-[#8a7a68] leading-relaxed">
                {heroProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {heroProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#7a6b58] bg-[#252018] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Code block */}
            <div className="sm:w-48 shrink-0">
              <pre className="font-mono text-[11px] leading-[1.7] bg-[#0e0c09] border border-[#2e2820] rounded-lg p-4 text-[#7a6b58] overflow-hidden">
                <span className="text-[#d4943a]">.ORIG</span>
                {" x3000\n"}
                <span className="text-[#a89880]">ADD</span>
                {" R0, R1, R2\n"}
                <span className="text-[#a89880]">STR</span>
                {" R0, R1, #0\n"}
                <span className="text-[#a89880]">HALT</span>
                {"\n"}
                <span className="text-[#d4943a]">.END</span>
              </pre>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Grid: remaining projects ─────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {gridProjects.map((p, i) => (
          <Reveal key={p.title} delay={100 + i * 60}>
            <div className="bg-[#1c1814] border border-[#2e2820] rounded-lg p-5 hover:border-[#4a3e32] hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] text-[#5a4f42]">{p.year}</span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5a4f42] hover:text-[#d4943a] transition-colors text-xs"
                  >
                    ↗
                  </a>
                )}
              </div>
              <h3 className="text-sm font-medium text-[#ede8dc] mb-0.5">
                {p.title}
              </h3>
              <p className="text-xs text-[#6b5d4e] mb-2">{p.org}</p>
              <p className="text-xs text-[#8a7a68] leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[#7a6b58] bg-[#252018] px-2 py-0.5 rounded"
                  >
                    {tag}
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
