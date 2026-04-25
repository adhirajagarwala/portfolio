import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing — Adhiraj Agarwala",
  description: "Thoughts on engineering, systems, and ideas.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 max-w-2xl mx-auto w-full pt-32 pb-24">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors w-fit"
          >
            ← Back
          </Link>
          <h1 className="text-xs font-mono text-accent tracking-widest uppercase">
            Writing
          </h1>
        </div>

        <div className="border border-[#1e1e2a] rounded-lg p-10 flex flex-col items-center text-center gap-4">
          <p className="text-2xl text-zinc-600 font-mono">∅</p>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Nothing here yet. I'm thinking through what to write. Check back
            soon.
          </p>
        </div>
      </div>
    </main>
  );
}
