import Link from "next/link";
import { Post } from "@/data/types";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  return (
    <section className="mt-8 border border-slate-300 bg-white p-5">
      <h2 className="text-xl font-semibold text-ocean-900">Related Posts</h2>
      <ul className="mt-4 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="font-medium text-ocean-700 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-slate-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
