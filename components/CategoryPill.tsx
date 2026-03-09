export function CategoryPill({ category }: { category: string }) {
  return <span className="inline-block rounded border border-ocean-700 bg-white px-2 py-1 text-xs font-semibold text-ocean-800">{category}</span>;
}
