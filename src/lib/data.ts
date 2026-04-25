export const meta = {
  name: "Adhiraj Agarwala",
  email: "aa166@illinois.edu",
  github: "https://github.com/adhirajagarwala",
  linkedin: "https://linkedin.com/in/adhirajagarwala",
};

export const about = `I grew up in Kolkata. Now I study Electrical and Computer Engineering at UIUC — spending most of my time on problems that live close to the hardware.

Right now I'm building an LC-3 assembler from scratch in Rust. Before that: a lunar habitat power grid for a space settlement competition, a CERN beamline proposal, and Paperio — a tool that makes dense technical papers actually readable.

I also spent three years on the board of Brightbytes, growing a computing literacy program for kids across three community centres in Kolkata.`;

export const projects = [
  {
    year: "2026",
    title: "LC-3 Assembler & Compiler",
    org: "Independent Research · Prof. Lumetta",
    description:
      "A full assembler for the LC-3 instruction set, written in Rust. Lexer, two-pass assembly, symbol table, binary encoder for all 15 instructions. Error messages that are actually useful.",
    tags: ["Rust", "Systems", "Compilers"],
    link: "https://github.com/adhirajagarwala",
  },
  {
    year: "2026",
    title: "Paperio",
    org: "Individual Project",
    description:
      "Dense papers are hard to read. I built a pipeline that parses and restructures them in real time — LLM-driven, with a modular prompt architecture on the backend.",
    tags: ["LLMs", "APIs", "Full-stack"],
    link: undefined,
  },
  {
    year: "2025–26",
    title: "4-Bit Calculator",
    org: "Engineering Design Project",
    description:
      "A calculator built entirely from logic circuits — no microcontrollers, no shortcuts. Addition and subtraction, with a register to carry results forward.",
    tags: ["Digital Logic", "Hardware"],
    link: undefined,
  },
  {
    year: "2025",
    title: "ECE 110 / 120 Lab Projects",
    org: "UIUC · Course Projects",
    description:
      "Light-seeking robot (analog sensor feedback), applause meter (signal conditioning and threshold detection), and a vending machine controller (FSM in digital logic). First real exposure to hardware that does something.",
    tags: ["Analog", "Signal Conditioning", "Digital Logic"],
    link: undefined,
  },
  {
    year: "2024–25",
    title: "International Space Settlement Design Competition",
    org: "ISSDC · Runner-up, International",
    description:
      "Designed the power distribution network for a lunar habitat. The hard part wasn't the solar panels — it was energy allocation across uneven terrain with a solar storm incoming. Presented to Boeing engineers.",
    tags: ["Systems Engineering", "Research"],
    link: undefined,
  },
  {
    year: "2024",
    title: "CERN Beamline Proposal",
    org: "CERN · Team Lead",
    description:
      "Led a team of six on an experimental proposal to measure muon lifetimes using delay wire chambers and scintillation counters, working directly with CERN physicists.",
    tags: ["Physics", "Research", "Instrumentation"],
    link: undefined,
  },
  {
    year: "2024",
    title: "Model-Based Systems Engineering Paper",
    org: "Peer-reviewed Publication",
    description:
      "Authored and published a peer-reviewed paper on the use of MBSE in design methodology.",
    tags: ["MBSE", "Research"],
    link: undefined,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "Rust", "Python", "Assembly (LC-3)"],
  },
  {
    category: "Hardware",
    items: ["Digital Logic Design", "Circuit Analysis", "Signal Conditioning", "Power Distribution"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux"],
  },
  {
    category: "Areas",
    items: ["Embedded Systems", "Compilers", "LLM APIs"],
  },
];

export const experience = [
  {
    year: "2025–",
    title: "Low Voltage & Sensors",
    org: "Illini Electric Motorsports · Formula EV",
    description:
      "Part of the team building a formula-style electric race car from scratch. On the low voltage side: power distribution and control circuits. On sensors: signal conditioning and getting reliable data out of hardware running at speed on a track.",
  },
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
      "Manage outreach to 800+ James Scholars via Instagram and email newsletters, covering honors seminars, research opportunities, and networking events.",
  },
  {
    year: "2025",
    title: "Intern",
    org: "Levana Floors Pvt Ltd",
    description:
      "Automated daily inventory processes reducing manual errors by 30%. Redesigned and rebuilt the company website.",
    link: "https://levanafloors.in",
  },
  {
    year: "2022–25",
    title: "Board of Directors",
    org: "Brightbytes",
    description:
      "Scaled the program from 50 to 150 learners across three community centres by standardising a computing curriculum covering digital literacy, programming basics, and intro hardware.",
  },
];

export const education = [
  {
    year: "2025–28",
    degree: "B.S. Electrical and Computer Engineering",
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
