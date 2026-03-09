import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { authors } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about World of Aquariums and the five specialist authors behind this educational aquarium blog.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <PageHero
        title="About World of Aquariums"
        subtitle="World of Aquariums is an educational demo blog focused on practical aquarium keeping for real households and busy hobbyists."
      />
      <section className="border border-slate-300 bg-white p-5">
        <p>
          We publish clear, beginner-friendly guides for freshwater and marine systems, fish health, aquascaping, and equipment planning.
          Our editorial style favors repeatable routines, safety-first stocking, and realistic maintenance plans.
        </p>
      </section>
      <section className="border border-slate-300 bg-white p-5">
        <h2 className="text-2xl font-semibold text-ocean-900">Editorial Team</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {authors.map((author) => (
            <article key={author.id} className="border border-slate-300 p-4">
              <h3 className="font-semibold text-ocean-900">{author.name}</h3>
              <p className="text-sm text-tealish">Specialty: {author.specialty}</p>
              <p className="mt-2 text-sm text-slate-700">{author.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
