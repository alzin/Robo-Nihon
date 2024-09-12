// src/components/BlogPostCard.tsx

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "../interfaces/BlogPost";
import { ClockIcon } from "@heroicons/react/24/outline";
import BookmarkButton from "./BookmarkButton";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-blue-500 transition duration-300"
          >
            {post.title}
          </Link>
        </h3>
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-sm mb-4">
          <div className="flex items-center">
            <span className="mr-4">{post.date}</span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              {post.readingTime} min read
            </span>
          </div>
          <BookmarkButton
            post={{ slug: post.slug, title: post.title, date: post.date }}
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
        >
          続きを読む →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
