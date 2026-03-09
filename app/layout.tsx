import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "World of Aquariums | Aquarium Guides, Fish Care, and Setup Tips",
    template: "%s | World of Aquariums"
  },
  description:
    "World of Aquariums is a practical aquarium blog covering freshwater basics, reef systems, fish health, aquascaping, and equipment setup.",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
