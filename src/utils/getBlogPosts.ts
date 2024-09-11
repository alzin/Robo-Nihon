// src/utils/getBlogPosts.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '../interfaces/BlogPost';
import { calculateReadingTime } from './readingTime';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
      excerpt: matterResult.content.slice(0, 200) + '...',
      tags: matterResult.data.tags || [],
      readingTime: calculateReadingTime(matterResult.content),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
    excerpt: matterResult.content.slice(0, 200) + '...',
    tags: matterResult.data.tags || [],
    readingTime: calculateReadingTime(matterResult.content),
  };
}

export function getPaginatedBlogPosts(page: number, limit: number): { posts: BlogPost[], totalPages: number } {
  const allPosts = getBlogPosts();
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allPosts.length / limit);

  return { posts: paginatedPosts, totalPages };
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], maxRelated: number = 3): BlogPost[] {
  return allPosts
    .filter((post) => post.slug !== currentPost.slug) // Exclude the current post
    .map((post) => ({
      ...post,
      relevanceScore: post.tags.filter((tag) => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxRelated);
}