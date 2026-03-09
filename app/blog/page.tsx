import { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CategoryPill } from "@/components/CategoryPill";
import { PageHero } from "@/components/PageHero";
import { Sidebar } from "@/components/Sidebar";
import { authors, categories, posts } from "@/data/content";

export const metadata: Metadata = {
  title: "Aquarium Blog",
  description: "Browse 100 aquarium articles by category, author, and date on World of Aquariums.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage({ searchParams }: { searchParams?: { category?: string } }) {
  const selectedCategory = searchParams?.category;
  const filteredPosts = selectedCategory ? posts.filter((post) => post.category === selectedCategory) : posts;

  return (
    <div className="space-y-6">
      <PageHero title="Aquarium Blog" subtitle="Explore categorized articles covering freshwater basics, reef systems, fish health, aquascaping, and equipment setup." />
      <section className="border border-slate-300 bg-white p-5">
        <h2 className="text-lg font-semibold text-ocean-900">Browse by Category</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/blog" className="rounded border border-slate-500 px-2 py-1 text-xs font-semibold hover:bg-slate-100">All Posts</Link>
          {categories.map((category) => (
            <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
              <CategoryPill category={category} />
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <section className="space-y-4">
          <p className="text-sm text-slate-700">
            Showing {filteredPosts.length} posts{selectedCategory ? ` in ${selectedCategory}` : " across all categories"}.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredPosts.map((post) => {
              const author = authors.find((item) => item.id === post.authorId)!;
              return <BlogCard key={post.slug} post={post} author={author} />;
            })}
          </div>
        </section>
        <Sidebar />
      </div>
    </div>
  );
}
