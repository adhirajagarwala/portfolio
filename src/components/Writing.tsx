import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Writing() {
  return (
    <section id="writing" className="px-6 max-w-3xl mx-auto w-full py-20">
      <Reveal>
        <SectionHeader label="writing" heading="Writing" />
      </Reveal>

      <Reveal delay={80}>
        <div className="border border-[#2e2820] rounded-lg p-8 flex flex-col gap-3">
          <p className="text-sm text-[#a09080] leading-relaxed">
            I write when I have something worth saying — usually about building
            things, how they work underneath, or why a particular design
            decision made sense. No schedule, no newsletter. First posts coming
            soon.
          </p>
          <Link
            href="/blog"
            className="font-mono text-[11px] text-[#d4943a] hover:underline w-fit"
          >
            Go to blog →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
