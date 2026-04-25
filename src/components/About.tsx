import { about } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <div className="flex flex-col gap-8">
          <h2 className="text-xs font-mono text-accent tracking-widest uppercase">
            About
          </h2>
          <div className="flex flex-col gap-4">
            {about.split("\n\n").map((para, i) => (
              <p key={i} className="text-zinc-300 text-base leading-[1.8] max-w-prose">
                {para}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            {[
              { label: "University", value: "UIUC" },
              { label: "Degree", value: "B.S. Electrical Engineering" },
              { label: "GPA", value: "4.0 / 4.0" },
              { label: "Year", value: "Class of 2028" },
              { label: "Distinction", value: "James Scholar" },
              { label: "Based in", value: "Urbana-Champaign, IL" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
