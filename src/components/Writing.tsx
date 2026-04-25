import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Writing() {
  return (
    <section id="writing" className="px-6 max-w-3xl mx-auto w-full py-32">
      <Reveal>
        <SectionHeader label="writing" heading="Writing" />
      </Reveal>

      <Reveal delay={80}>
        <div className="border border-[#1e1e1e] rounded-lg p-8 flex flex-col gap-3">
          <p className="text-sm text-[#666] leading-relaxed">
            Nothing here yet. I write when I have something worth saying —
            usually about building things or how they work underneath. No
            schedule, no newsletter.
          </p>
          <Link
            href="/blog"
            className="font-mono text-[11px] text-[#E8A838] hover:underline w-fit"
          >
            Go to blog →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
