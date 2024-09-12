// src/components/RelatedPosts.tsx

import React from "react";
import Link from "next/link";
import { BlogPost } from "../interfaces/BlogPost";

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        関連記事
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-4 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
