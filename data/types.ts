export type Category =
  | "Freshwater Beginner"
  | "Saltwater & Reef"
  | "Fish Health & Maintenance"
  | "Aquascaping & Plants"
  | "Equipment & Setup";

export type Author = {
  id: string;
  name: string;
  bio: string;
  specialty: Category;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  authorId: string;
  category: Category;
  date: string;
  readingTime: string;
  cover: string;
  content: string[];
  seoTitle: string;
  metaDescription: string;
};
