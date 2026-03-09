import Link from "next/link";
import { Author } from "@/data/types";

export function AuthorBadge({ author }: { author: Author }) {
  return (
    <div className="rounded border border-slate-300 bg-white p-3 text-sm">
      <p className="font-semibold text-slate-900">{author.name}</p>
      <p className="text-xs text-tealish">Specialty: {author.specialty}</p>
      <p className="mt-2 text-slate-700">{author.bio}</p>
      <Link href="/about" className="mt-2 inline-block text-xs font-semibold text-ocean-700 hover:underline">
        Meet all authors →
      </Link>
    </div>
  );
}
