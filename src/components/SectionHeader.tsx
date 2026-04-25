interface SectionHeaderProps {
  label: string;
  heading: string;
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[#d4943a] text-[11px] uppercase tracking-widest mb-3">
        // {label}
      </p>
      <h2 className="text-2xl font-medium text-[#ede8dc] tracking-tight mb-5">
        {heading}
      </h2>
      <div className="h-px bg-[#2e2820]" />
    </div>
  );
}
