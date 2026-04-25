import Reveal from "./Reveal";
import Link from "next/link";

export default function Writing() {
  return (
    <section id="writing" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <div className="flex flex-col gap-6">
          <h2 className="text-xs font-mono text-accent tracking-widest uppercase">
            Writing
          </h2>
          <div className="border border-[#1e1e2a] rounded-lg p-8 flex flex-col gap-3">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Nothing here yet. I write when I have something worth saying —
              usually about building things or how they work underneath. No
              schedule, no newsletter.
            </p>
            <Link
              href="/blog"
              className="text-xs text-accent hover:underline w-fit"
            >
              Go to blog →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
