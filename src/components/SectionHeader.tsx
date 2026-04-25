interface SectionHeaderProps {
  label: string;
  heading: string;
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-[#C8860A] text-[11px] uppercase tracking-widest mb-3">
        // {label}
      </p>
      <h2 className="text-2xl font-medium text-[#111111] tracking-tight mb-5">
        {heading}
      </h2>
      <div className="h-px bg-[#e5e5e5]" />
    </div>
  );
}
