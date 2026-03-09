import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t-4 border-ocean-900 bg-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-700 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} World of Aquariums. Demo educational content.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
