import Link from "next/link";
import { Post, Author } from "@/data/types";
import { formatDate } from "@/lib/utils";
import { CategoryPill } from "@/components/CategoryPill";

export function BlogCard({ post, author }: { post: Post; author: Author }) {
  return (
    <article className="flex h-full flex-col border border-slate-300 bg-white p-4 shadow-card">
      <div className="mb-3 h-36 border border-slate-300 bg-gradient-to-r from-ocean-700 to-tealish p-2 text-xs font-semibold text-white">
        Cover Placeholder
      </div>
      <CategoryPill category={post.category} />
      <h2 className="mt-3 text-xl font-semibold text-ocean-900">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-slate-600">By {author.name} · {formatDate(post.date)} · {post.readingTime}</p>
      <p className="mt-3 flex-1 text-slate-700">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-4 text-sm font-semibold text-ocean-700 hover:underline">
        Read article →
      </Link>
    </article>
  );
}
