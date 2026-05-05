import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing — Adhiraj Agarwala",
  description:
    "Writing on embedded systems, hardware engineering, and building things close to the metal.",
  alternates: { canonical: "https://adhirajagarwala.com/blog" },
};

// Add posts here when ready:
// const posts = [
//   {
//     slug: "lc3-assembler-in-rust",
//     title: "Building an LC-3 Assembler in Rust",
//     date: "2026-05-01",
//     summary: "...",
//   },
// ];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 max-w-2xl mx-auto w-full pt-28 pb-24">
      <div className="flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-5">
          <Link
            href="/"
            className="font-mono text-[10px] text-[#5a4f42] hover:text-[#d4943a] transition-colors w-fit uppercase tracking-wider"
          >
            ← adhirajagarwala.com
          </Link>
          <div>
            <p className="font-mono text-[#d4943a] text-[11px] uppercase tracking-widest mb-3">
              // writing
            </p>
            <h1 className="text-2xl font-medium text-[#ede8dc] tracking-tight">
              Writing
            </h1>
            <div className="h-px bg-[#2e2820] mt-5" />
          </div>
          <p className="text-sm text-[#a09080] leading-relaxed max-w-md">
            I write when I have something worth saying — usually about building
            things, how they work underneath, or why a particular design
            decision made sense. No schedule, no newsletter.
          </p>
        </div>

        {/* Empty state */}
        <div className="border border-[#2e2820] rounded-xl p-10 flex flex-col items-center text-center gap-5">
          <span className="font-mono text-3xl text-[#2e2820] select-none">∅</span>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-[#ede8dc] font-medium">Nothing here yet.</p>
            <p className="text-xs text-[#5a4f42] max-w-xs leading-relaxed">
              First posts are in progress. Topics include the LC-3 assembler
              internals, Liberty parsing, and MOSFET curve fitting with ngspice.
            </p>
          </div>
          <Link
            href="/"
            className="font-mono text-[10px] text-[#5a4f42] hover:text-[#d4943a] transition-colors uppercase tracking-wider mt-2"
          >
            ← Back to portfolio
          </Link>
        </div>

      </div>
    </main>
  );
}
