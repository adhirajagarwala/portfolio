"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#1e1e2a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-100 hover:text-accent transition-colors"
        >
          AA
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
