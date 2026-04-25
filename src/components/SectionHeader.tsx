interface SectionHeaderProps {
  label: string;   // e.g. "about"  → renders as "// ABOUT"
  heading: string; // e.g. "About"  → renders as h2
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[#E8A838] text-[11px] uppercase tracking-widest mb-3">
        // {label}
      </p>
      <h2 className="text-2xl font-medium text-[#f0f0f0] tracking-tight mb-5">
        {heading}
      </h2>
      <div className="h-px bg-[#222222]" />
    </div>
  );
}
