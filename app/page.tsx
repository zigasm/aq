import Link from "next/link";
import { Metadata } from "next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AuthorBadge } from "@/components/AuthorBadge";
import { BlogCard } from "@/components/BlogCard";
import { CategoryPill } from "@/components/CategoryPill";
import { PageHero } from "@/components/PageHero";
import { authors, categories, posts } from "@/data/content";

export const metadata: Metadata = {
  title: "Aquarium Blog for Beginners and Hobbyists",
  description:
    "Learn aquarium setup, fish care, reef maintenance, and aquascaping basics at World of Aquariums with practical guides.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const latestPosts = posts.slice(0, 6);

  return (
    <div className="space-y-8">
      <PageHero title="World of Aquariums" subtitle="Simple, dependable aquarium advice for freshwater, reef, planted, and equipment-focused hobbyists." />
      <AdPlaceholder label="Homepage Banner Advertisement" className="py-6" />

      <section className="border border-slate-300 bg-white p-5">
        <h2 className="text-2xl font-bold text-ocean-900">Featured Categories</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
              <CategoryPill category={category} />
            </Link>
          ))}
        </div>
      </section>

      <section className="border border-slate-300 bg-white p-5">
        <h2 className="text-2xl font-bold text-ocean-900">Latest Aquarium Articles</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => {
            const author = authors.find((item) => item.id === post.authorId)!;
            return <BlogCard key={post.slug} post={post} author={author} />;
          })}
        </div>
      </section>

      <section className="border border-slate-300 bg-white p-5">
        <h2 className="text-2xl font-bold text-ocean-900">Meet Our Writers</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorBadge key={author.id} author={author} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="border border-slate-300 bg-white p-4">
          <h3 className="text-lg font-semibold text-ocean-900">Classic Weekly Checklist</h3>
          <p className="mt-2 text-sm text-slate-700">Track feeding, water changes, filter checks, and fish behavior in a simple routine.</p>
        </article>
        <article className="border border-slate-300 bg-white p-4">
          <h3 className="text-lg font-semibold text-ocean-900">No-Hype Product Guidance</h3>
          <p className="mt-2 text-sm text-slate-700">Our setup content emphasizes reliable equipment and sensible maintenance budgets.</p>
        </article>
        <article className="border border-slate-300 bg-white p-4">
          <h3 className="text-lg font-semibold text-ocean-900">Clear Beginner Education</h3>
          <p className="mt-2 text-sm text-slate-700">Every guide is written to help new hobbyists avoid common setup and stocking mistakes.</p>
        </article>
      </section>

      <section className="border border-slate-300 bg-ocean-900 p-5 text-white">
        <h2 className="text-2xl font-bold">Ready to explore all aquarium guides?</h2>
        <p className="mt-2">Browse our complete blog library with freshwater, reef, health, and equipment articles.</p>
        <Link href="/blog" className="mt-4 inline-block border border-white px-4 py-2 font-semibold hover:bg-white hover:text-ocean-900">
          Visit the Blog
        </Link>
      </section>
    </div>
  );
}
