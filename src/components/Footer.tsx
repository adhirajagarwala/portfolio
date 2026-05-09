export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 text-center border-t border-[#2e2820]">
      <span className="font-mono text-[11px] text-[#5a4f42]">
        Adhiraj Agarwala · {year}
      </span>
    </footer>
  );
}
