export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="border border-slate-300 bg-white p-6 shadow-card">
      <h1 className="text-3xl font-bold text-ocean-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-slate-700">{subtitle}</p>
    </section>
  );
}
