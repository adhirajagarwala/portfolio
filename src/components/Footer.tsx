export default function Footer() {
  return (
    <footer className="px-6 max-w-2xl mx-auto w-full py-12 mt-auto">
      <div className="border-t border-[#1e1e2a] pt-8 flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-700">
          Adhiraj Agarwala
        </span>
        <span className="text-xs font-mono text-zinc-700">
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
