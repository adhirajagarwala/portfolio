import { meta } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 max-w-2xl mx-auto w-full py-24">
      <Reveal>
        <div className="flex flex-col gap-8">
          <h2 className="text-xs font-mono text-accent tracking-widest uppercase">
            Contact
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-zinc-300 text-base leading-relaxed">
              I'm always up for interesting conversations — about engineering,
              research, or ideas worth exploring.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", value: meta.email, href: `mailto:${meta.email}` },
              { label: "GitHub", value: "adhirajagarwala", href: meta.github },
              {
                label: "LinkedIn",
                value: "in/adhirajagarwala",
                href: meta.linkedin,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-6">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider w-16">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-accent transition-colors hover:underline underline-offset-4"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
