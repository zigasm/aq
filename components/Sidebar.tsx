import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { authors, categories } from "@/data/content";

export function Sidebar() {
  return (
    <div className="space-y-4">
      <AdPlaceholder label="Sidebar Advertisement" />
      <section className="border border-slate-300 bg-white p-4">
        <h3 className="text-lg font-semibold text-ocean-900">Authors</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {authors.map((author) => (
            <li key={author.id}>{author.name} — {author.specialty}</li>
          ))}
        </ul>
      </section>
      <section className="border border-slate-300 bg-white p-4">
        <h3 className="text-lg font-semibold text-ocean-900">Featured Categories</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/blog?category=${encodeURIComponent(category)}`} className="text-ocean-700 hover:underline">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
