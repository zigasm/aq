import Link from "next/link";
import { siteConfig } from "@/data/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" }
];

export function Header() {
  return (
    <header className="border-b-4 border-ocean-900 bg-ocean-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide">{siteConfig.name}</Link>
        <nav>
          <ul className="flex flex-wrap gap-3 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="rounded border border-transparent px-2 py-1 hover:border-white hover:bg-ocean-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
