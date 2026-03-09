import { MetadataRoute } from "next";
import { posts, siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/blog", "/contact", "/privacy"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const blogPages = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticPages, ...blogPages];
}
