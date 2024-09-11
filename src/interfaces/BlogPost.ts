// src/interfaces/BlogPost.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}