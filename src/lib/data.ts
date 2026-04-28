export const meta = {
  name: "Adhiraj Agarwala",
  email: "aa166@illinois.edu",
  github: "https://github.com/adhirajagarwala",
  linkedin: "https://linkedin.com/in/adhirajagarwala1",
  // Add your resume PDF to /public/resume.pdf and set this to "/resume.pdf"
  resume: "" as string,
  seeking: "Open to Summer 2026 internships · embedded / hardware",
};

export const about = `I build systems that sit close to the hardware — assemblers, logic circuits, sensor pipelines. Currently studying ECE at UIUC with a focus on embedded systems and digital design.

At UIUC I'm on the Illini Electric Motorsports team working on low voltage and sensor integration for the formula EV car. Before that: a lunar habitat power grid at ISSDC where our team placed runner-up internationally, a CERN beamline proposal, and Paperio — a tool that makes dense technical papers actually readable.

I grew up in Kolkata. Outside engineering, I spent three years on the board of Brightbytes, scaling a computing literacy program for kids across three community centres.`;

export const projects = [
  {
    year: "2026",
    title: "LC-3 Assembler & Compiler",
    org: "Independent Research · Prof. Lumetta",
    description:
      "A complete two-pass assembler for the LC-3 instruction set, written from scratch in Rust. Implements a lexer, symbol table, and binary encoder covering all 15 instructions — ADD, AND, BR, JMP, JSR, LD, LDI, LDR, LEA, NOT, ST, STI, STR, TRAP, and RTI. Error messages flag exact line, column, and cause.",
    tags: ["Rust", "Systems", "Compilers"],
    link: "https://github.com/adhirajagarwala/lc3-assembler",
    hidden: false,
  },
  {
    year: "2026",
    title: "CurveCraft",
    org: "Individual Project",
    description:
      "A Python toolkit for semiconductor device characterisation — fits diode and MOSFET I-V models to measured data, generates ngspice netlists, runs SPICE simulations, and validates results against analytical models. Built around the Sky130 process node.",
    tags: ["Python", "SPICE", "Semiconductors", "Sky130"],
    link: "https://github.com/adhirajagarwala/curvecraft",
    hidden: false,
  },
  {
    year: "2026",
    title: "pdk-cartographer",
    org: "Individual Project",
    description:
      "An exploration toolkit for the Sky130 open-source PDK. Parses Liberty timing files, maps standard-cell metadata, and builds a structured atlas of PDK anatomy — designed for fixture-first experimentation with timing arcs and cell characterisation data.",
    tags: ["Python", "EDA", "Liberty", "Sky130"],
    link: "https://github.com/adhirajagarwala/pdk-cartographer",
    hidden: false,
  },
  {
    year: "2026",
    title: "Paperio",
    org: "Individual Project",
    description:
      "A pipeline that takes dense academic PDFs and restructures them for readability — section by section, context preserved. LLM-driven backend with a modular prompt architecture; handles varied paper formats without prompt rewrites.",
    tags: ["LLMs", "APIs", "Full-stack"],
    link: undefined,
    hidden: false,
  },
  {
    year: "2025–26",
    title: "4-Bit Calculator",
    org: "Engineering Design Project",
    description:
      "A 4-bit arithmetic unit built entirely from discrete logic gates — no microcontrollers, no pre-built ALU chips. Implements addition and subtraction with carry propagation, a register to hold intermediate results, and 7-segment display output.",
    tags: ["Digital Logic", "Hardware"],
    link: undefined,
    hidden: false,
  },
  {
    year: "2025",
    title: "ECE 110 / 120 Lab Projects",
    org: "UIUC · Course Projects",
    description:
      "Three hardware projects built from first principles: a light-seeking robot using analog comparator feedback, an applause meter with signal conditioning and threshold detection, and a vending machine controller implemented as a finite state machine in combinational logic.",
    tags: ["Analog", "Signal Conditioning", "Digital Logic"],
    link: undefined,
    hidden: false,
  },
  {
    year: "2024–25",
    title: "International Space Settlement Design Competition",
    org: "ISSDC · Runner-up, International",
    description:
      "Designed the full power distribution network for a 1,200-person lunar habitat concept — permanently shadowed crater site, solar storm contingency, uneven terrain. Presented the design to Boeing engineers at the international finals; team placed runner-up.",
    tags: ["Systems Engineering", "Research"],
    link: undefined,
    hidden: false,
  },
  {
    year: "2024",
    title: "CERN Beamline Proposal",
    org: "CERN · Team Lead",
    description:
      "Team lead for an experimental proposal submitted to CERN's Beamline for Schools competition. Designed a muon lifetime measurement experiment using delay wire chambers and scintillation counters. Coordinated six people and liaised directly with CERN physicists during the design review.",
    tags: ["Physics", "Research", "Instrumentation"],
    link: undefined,
    hidden: false,
  },
  {
    year: "2024",
    title: "Model-Based Systems Engineering Paper",
    org: "Peer-reviewed Publication",
    description:
      "Authored and published a peer-reviewed paper on the use of MBSE in design methodology.",
    tags: ["MBSE", "Research"],
    link: undefined,
    hidden: true, // re-enable when link is available
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Rust", "C", "Python", "LC-3 Assembly"],
  },
  {
    category: "Hardware",
    items: ["Digital Logic Design", "Circuit Analysis", "Embedded Systems", "Signal Conditioning", "SPICE / ngspice"],
  },
  {
    category: "Software",
    items: ["LLM APIs", "REST APIs", "Next.js", "Version Control (Git)"],
  },
  {
    category: "Other",
    items: ["Technical Writing", "Systems Engineering", "Research"],
  },
];

export const experience = [
  {
    year: "2025–",
    title: "Low Voltage & Sensors — Illini Electric Motorsports",
    org: "Formula EV · UIUC",
    description:
      "Working on the low voltage system and sensor integration for UIUC's formula-style electric race car. On the low voltage side I work on power distribution and control circuits. On sensors I deal with signal conditioning and getting reliable data out of hardware under real track conditions.",
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
