export const meta = {
  name: "Adhiraj Agarwala",
  tagline:
    "Student at UIUC studying electrical and computer engineering — curious about embedded systems and what sits beneath the software.",
  email: "aa166@illinois.edu",
  github: "https://github.com/adhirajagarwala",
  linkedin: "https://linkedin.com/in/adhirajagarwala",
};

export const about = `I grew up in Kolkata and ended up at UIUC studying Electrical Engineering — which in practice means spending a lot of time on problems most people assume are already solved.

Right now I'm building an LC-3 assembler from scratch in Rust. It was supposed to be a weekend project. Before that: a lunar habitat power grid for a space settlement competition, a CERN beamline proposal, and Paperio — a tool that makes dense technical papers actually readable.

I also spent three years on the board of Brightbytes, where we grew a computing literacy program for kids across three community centres in Kolkata. That one still matters to me.`;

export const projects = [
  {
    year: "2026",
    title: "LC-3 Assembler & Compiler",
    org: "Independent Research · Prof. Lumetta",
    description:
      "A full assembler for the LC-3 instruction set, written in Rust. Lexer, two-pass assembly, symbol table, binary encoder for all 15 instructions. The error messages actually tell you what went wrong and where. Started as a weekend project.",
    tags: ["Rust", "Systems", "Compilers"],
    link: "https://github.com/adhirajagarwala",
  },
  {
    year: "2026",
    title: "Paperio",
    org: "Individual Project",
    description:
      "Dense papers are hard to read. I built a pipeline that takes them apart and puts them back together in a form that doesn't make you want to close the tab. LLM-driven, real time, modular prompt architecture.",
    tags: ["LLMs", "APIs", "Full-stack"],
    link: undefined,
  },
  {
    year: "2025–26",
    title: "4-Bit Calculator",
    org: "Engineering Design Project",
    description:
      "A calculator built entirely out of logic gates — no microcontrollers, no shortcuts. Just NAND all the way down. Handles addition and subtraction, with a register to carry results forward. Scaling it up next.",
    tags: ["Digital Logic", "Hardware"],
    link: undefined,
  },
  {
    year: "2024–25",
    title: "International Space Settlement Design Competition",
    org: "ISSDC · Runner-up, International",
    description:
      "Designed the power distribution network for a lunar habitat. The hard part wasn't the solar panels — it was energy allocation across uneven terrain with a solar storm incoming. Runner-up internationally. Presented to Boeing engineers.",
    tags: ["Systems Engineering", "Research"],
    link: undefined,
  },
  {
    year: "2024",
    title: "CERN Beamline Proposal",
    org: "CERN · Team Lead",
    description:
      "A team of six, a beamline, and a proposal to measure muon lifetimes using delay wire chambers and scintillation counters. Worked directly with CERN physicists. It was exactly as interesting as it sounds.",
    tags: ["Physics", "Research", "Instrumentation"],
    link: undefined,
  },
  {
    year: "2024",
    title: "Model-Based Systems Engineering Paper",
    org: "Peer-reviewed Publication",
    description:
      "Authored and published a peer-reviewed paper on the use of MBSE in design methodology. Link coming soon.",
    tags: ["MBSE", "Research", "Writing"],
    link: undefined,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Rust", "Python", "LC-3 Assembly", "C"],
  },
  {
    category: "Hardware",
    items: ["Digital Logic Design", "LC-3 ISA", "Circuit Analysis", "CERN Instrumentation"],
  },
  {
    category: "Software",
    items: ["LLM APIs", "REST APIs", "Full-stack Architecture"],
  },
  {
    category: "Other",
    items: ["Systems Engineering (MBSE)", "Technical Writing", "Research"],
  },
];

export const experience = [
  {
    year: "2026–",
    title: "ECE Department Front Desk Assistant",
    org: "UIUC · Dept. of Electrical and Computer Engineering",
    description:
      "Primary point of contact for students, faculty, and visitors. Manage scheduling logistics, facility coordination, and day-to-day departmental operations.",
  },
  {
    year: "2025–",
    title: "Communications and Outreach Chair",
    org: "James Scholar Honors Board",
    description:
      "Manage end-to-end outreach to 800+ James Scholars via Instagram, email newsletters, and targeted social media campaigns promoting honors seminars, research opportunities, and networking events.",
  },
  {
    year: "2025",
    title: "Intern",
    org: "Levana Floors Pvt Ltd",
    description:
      "Automated daily inventory processes reducing manual errors by 30%. Redesigned and rebuilt the company website with a modern, responsive architecture.",
    link: "https://levanafloors.in",
  },
  {
    year: "2022–25",
    title: "Board of Directors",
    org: "Brightbytes",
    description:
      "Scaled the program from 50 to 150 learners across three community centres by standardising a foundational computing curriculum covering digital literacy, programming basics, and intro hardware.",
  },
];

export const education = [
  {
    year: "2025–28",
    degree: "B.S. Electrical Engineering",
    school: "University of Illinois at Urbana-Champaign",
    detail: "James Scholar · GPA 4.0",
  },
  {
    year: "–2025",
    degree: "ISC 2025",
    school: "La Martiniere for Boys, Kolkata",
    detail: "98% average · 100/100 Mathematics · 99/100 Computer Science",
  },
];
