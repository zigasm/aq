import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AuthorBadge } from "@/components/AuthorBadge";
import { CategoryPill } from "@/components/CategoryPill";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Sidebar } from "@/components/Sidebar";
import { getAuthorById, getPostBySlug, getRelatedPosts, posts, siteConfig } from "@/data/content";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article"
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const author = getAuthorById(post.authorId);
  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <article className="space-y-5 border border-slate-300 bg-white p-5">
        <nav className="text-sm text-slate-600">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
        </nav>
        <CategoryPill category={post.category} />
        <h1 className="text-3xl font-bold text-ocean-900">{post.title}</h1>
        <p className="text-sm text-slate-600">By {author?.name} · {formatDate(post.date)} · {post.readingTime}</p>
        <div className="h-52 border border-slate-300 bg-gradient-to-r from-ocean-700 to-tealish p-4 text-white">Article Cover Placeholder</div>

        <div className="space-y-4 leading-7 text-slate-800">
          {post.content.map((paragraph, idx) => (
            <div key={`${post.slug}-${idx}`}>
              <p>{paragraph}</p>
              {idx === 1 ? <AdPlaceholder label="In-Article Advertisement" className="my-4" /> : null}
            </div>
          ))}
        </div>

        {author ? <AuthorBadge author={author} /> : null}
        <RelatedPosts posts={related} />
      </article>

      <Sidebar />
    </div>
  );
}
