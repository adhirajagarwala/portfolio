export const meta = {
  name: "Adhiraj Agarwala",
  tagline:
    "Student at UIUC studying electrical and computer engineering — curious about embedded systems and what sits beneath the software.",
  email: "aa166@illinois.edu",
  github: "https://github.com/adhirajagarwala",
  linkedin: "https://linkedin.com/in/adhirajagarwala",
};

export const about = `I'm an Electrical Engineering student at the University of Illinois at Urbana-Champaign, where I'm a James Scholar with a 4.0 GPA. My work spans hardware and software — from building an LC-3 assembler in Rust to designing lunar habitat power networks. I'm drawn to the layer where logic meets silicon, and I enjoy working on projects that demand both rigorous thinking and building from scratch.`;

export const projects = [
  {
    year: "2026",
    title: "LC-3 Assembler & Compiler",
    org: "Independent Research · Prof. Lumetta",
    description:
      "Full LC-3 assembler in Rust with a complete pipeline: lexer, two-pass assembly, symbol table construction, and binary encoder supporting all 15 instructions, trap pseudo-ops, and assembler directives. Includes line-accurate error diagnostics.",
    tags: ["Rust", "Systems", "Compilers"],
    link: "https://github.com/adhirajagarwala",
  },
  {
    year: "2026",
    title: "Paperio",
    org: "Individual Project",
    description:
      "Full-stack system that converts dense technical text into structured, readable explanations in real time. API-driven pipeline integrating large language models with modular prompt logic and scalable backend architecture.",
    tags: ["LLMs", "APIs", "Full-stack"],
    link: undefined,
  },
  {
    year: "2025–26",
    title: "4-Bit Calculator",
    org: "Engineering Design Project",
    description:
      "Functional calculator for addition and subtraction built entirely from logic circuits. Includes a register feature to reuse computed values. Designed for future scaling to support multiplication.",
    tags: ["Digital Logic", "Hardware"],
    link: undefined,
  },
  {
    year: "2024–25",
    title: "International Space Settlement Design Competition",
    org: "ISSDC · Runner-up, International",
    description:
      "Directed design and deployment of a lunar habitat power distribution network prioritising solar storm resilience and energy allocation across uneven terrain. Presented technical innovations to Boeing engineers.",
    tags: ["Systems Engineering", "Research"],
    link: undefined,
  },
  {
    year: "2024",
    title: "CERN Beamline Proposal",
    org: "CERN · Team Lead",
    description:
      "Led a team of six in crafting and presenting an experimental proposal to measure muon lifetimes using delay wire chambers and scintillation counters, in direct collaboration with CERN scientists.",
    tags: ["Physics", "Research", "Instrumentation"],
    link: undefined,
  },
  {
    year: "2024",
    title: "Model-Based Systems Engineering Paper",
    org: "Peer-reviewed Publication",
    description:
      "Authored and published a peer-reviewed paper on the application of MBSE in design methodology.",
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
