"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Writing",    href: "/blog"       },
  { label: "Contact",    href: "#contact"    },
];

const sectionIds = ["about", "projects", "experience", "writing", "contact"];

export default function Nav() {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-sm border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Monogram */}
        <Link
          href="/"
          className="font-mono text-sm text-[#E8A838] hover:text-[#f0c060] transition-colors tracking-wide"
        >
          AA
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-7">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <li key={l.label} className="hidden sm:block">
                <Link
                  href={l.href}
                  className={`text-xs transition-colors ${
                    isActive
                      ? "text-[#f0f0f0]"
                      : "text-[#666] hover:text-[#f0f0f0]"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
