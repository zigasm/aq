import { Author, Category, Post } from "@/data/types";

export const siteConfig = {
  name: "World of Aquariums",
  url: "https://example.com",
  tagline: "Practical aquarium education for hobbyists who want healthier fish and cleaner tanks."
};

export const categories: Category[] = [
  "Freshwater Beginner",
  "Saltwater & Reef",
  "Fish Health & Maintenance",
  "Aquascaping & Plants",
  "Equipment & Setup"
];

export const authors: Author[] = [
  {
    id: "amanda-rivera",
    name: "Amanda Rivera",
    specialty: "Freshwater Beginner",
    bio: "Amanda helps first-time fish keepers set up dependable freshwater tanks with low stress and clear routines."
  },
  {
    id: "cole-ivanov",
    name: "Cole Ivanov",
    specialty: "Saltwater & Reef",
    bio: "Cole focuses on reef stability, marine livestock planning, and practical coral husbandry for home systems."
  },
  {
    id: "dr-lena-morris",
    name: "Dr. Lena Morris",
    specialty: "Fish Health & Maintenance",
    bio: "Lena writes about fish disease prevention, quarantine systems, and maintenance habits that reduce losses."
  },
  {
    id: "ethan-kobayashi",
    name: "Ethan Kobayashi",
    specialty: "Aquascaping & Plants",
    bio: "Ethan teaches layout principles, plant nutrition, and long-term aquascape maintenance for planted displays."
  },
  {
    id: "patricia-coleman",
    name: "Patricia Coleman",
    specialty: "Equipment & Setup",
    bio: "Patricia tests filters, heaters, and lighting setups so hobbyists can buy reliable gear without overspending."
  }
];

const topicSets: Record<Category, string[]> = {
  "Freshwater Beginner": [
    "cycling",
    "stocking",
    "feeding",
    "water changes",
    "community fish",
    "substrate basics",
    "first tank mistakes",
    "budget setups"
  ],
  "Saltwater & Reef": [
    "reef chemistry",
    "protein skimmers",
    "clean-up crew",
    "coral placement",
    "salinity control",
    "marine stocking",
    "reef lighting",
    "nutrient export"
  ],
  "Fish Health & Maintenance": [
    "quarantine protocol",
    "disease signs",
    "medication safety",
    "oxygen management",
    "detritus control",
    "algae balance",
    "testing schedule",
    "stress reduction"
  ],
  "Aquascaping & Plants": [
    "hardscape planning",
    "foreground plants",
    "CO2 basics",
    "fertilizer routine",
    "layout depth",
    "moss techniques",
    "trim strategy",
    "root feeding"
  ],
  "Equipment & Setup": [
    "canister filters",
    "sponge filters",
    "heater sizing",
    "LED programming",
    "air pumps",
    "backup power",
    "maintenance tools",
    "quiet setups"
  ]
};

function paragraphFactory(category: Category, topic: string, index: number): string[] {
  return [
    `This demo article from World of Aquariums explains ${topic} in a practical way for hobbyists. The goal is to give you a repeatable process you can use each week instead of guessing. Post #${index} keeps the tone simple and focuses on proven aquarium habits.`,
    `For ${category.toLowerCase()} systems, consistency matters more than expensive gear. Start with stable water parameters, feed measured portions, and track observations in a small notebook. Over time, this routine helps you catch issues before fish or plants show severe stress.`,
    `When planning your next adjustment, make only one major change at a time. Observe for at least several days, compare test results, and decide whether to keep that change. Slow, deliberate steps are usually safer than fast overhauls in almost every aquarium type.`,
    `If you are building this as a long-term display, set realistic maintenance windows in your weekly schedule. A dependable 20 to 30 minute routine can prevent the majority of common problems. This approach is especially useful for families and busy professionals who want predictable aquarium care.`
  ];
}

function makePost(index: number): Post {
  const category = categories[index % categories.length];
  const author = authors.find((person) => person.specialty === category) ?? authors[0];
  const topic = topicSets[category][index % topicSets[category].length];
  const month = (index % 12) + 1;
  const day = (index % 28) + 1;
  const date = `2025-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const title = `${category}: ${topic} guide ${index + 1}`;
  const slug = `aquarium-${index + 1}-${topic.replace(/\s+/g, "-")}`;
  const excerpt = `A practical ${category.toLowerCase()} walkthrough covering ${topic}, weekly routines, and safe improvement steps.`;

  return {
    title,
    slug,
    excerpt,
    authorId: author.id,
    category,
    date,
    readingTime: `${5 + (index % 7)} min read`,
    cover: `/covers/${slug}.jpg`,
    content: paragraphFactory(category, topic, index + 1),
    seoTitle: `${title} | World of Aquariums`,
    metaDescription: `Learn ${topic} with this ${category.toLowerCase()} article from World of Aquariums. Includes practical, beginner-friendly maintenance advice.`
  };
}

export const posts: Post[] = Array.from({ length: 100 }, (_, index) => makePost(index)).sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAuthorById(authorId: string): Author | undefined {
  return authors.find((author) => author.id === authorId);
}

export function getRelatedPosts(currentSlug: string, category: Category, max = 3): Post[] {
  return posts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, max);
}
