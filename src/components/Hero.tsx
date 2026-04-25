import { meta } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[82vh] flex flex-col justify-center px-6 max-w-2xl mx-auto w-full">
      <div className="space-y-5">
        <p className="text-xs font-mono text-accent tracking-widest uppercase">
          Adhiraj Agarwala
        </p>
        <h1 className="text-4xl sm:text-5xl font-medium text-zinc-100 leading-[1.15] tracking-tight">
          EE Student.
          <br />
          Builder.
          <br />
          <span className="text-zinc-500">Curious about what sits</span>
          <br />
          <span className="text-zinc-500">beneath the software.</span>
        </h1>
        <p className="text-zinc-400 text-base leading-relaxed max-w-md">
          {meta.tagline}
        </p>
        <div className="flex items-center gap-6 pt-2">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors border-b border-transparent hover:border-zinc-100 pb-px"
          >
            GitHub ↗
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors border-b border-transparent hover:border-zinc-100 pb-px"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors border-b border-transparent hover:border-zinc-100 pb-px"
          >
            Email ↗
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-zinc-600 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
