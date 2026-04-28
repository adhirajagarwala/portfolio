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
            className="font-mono text-[11px] text-[#5a4f42] hover:text-[#d4943a] transition-colors w-fit uppercase tracking-wider"
          >
            ← Back
          </Link>
          <h1 className="font-mono text-[11px] text-[#d4943a] uppercase tracking-widest">
            // writing
          </h1>
        </div>

        <div className="border border-[#2e2820] rounded-lg p-10 flex flex-col items-center text-center gap-4">
          <p className="text-2xl text-[#2e2820] font-mono select-none">∅</p>
          <p className="text-sm text-[#a09080] leading-relaxed max-w-xs">
            I write when I have something worth saying. Nothing here yet — check
            back soon.
          </p>
        </div>
      </div>
    </main>
  );
}
