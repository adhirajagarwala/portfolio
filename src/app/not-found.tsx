import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm">
        <p className="font-mono text-[#d4943a] text-[11px] uppercase tracking-widest">
          // 404
        </p>
        <h1 className="text-5xl font-light text-[#ede8dc] tracking-tight leading-tight">
          Page not found.
        </h1>
        <p className="text-sm text-[#a09080] leading-relaxed">
          This URL doesn&apos;t exist or something moved. The rest of the site
          is intact.
        </p>
        <Link
          href="/"
          className="font-mono text-[11px] text-[#5a4f42] hover:text-[#d4943a] transition-colors uppercase tracking-wider mt-2"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
