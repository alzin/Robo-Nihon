// src/pages/bookmarks.tsx

import { NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";
import { getBookmarks, BookmarkedPost } from "../utils/bookmark";

const BookmarksPage: NextPage = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkedPost[]>([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  return (
    <Layout>
      <SEO
        title="ブックマーク - あなたの名前のブログ"
        description="保存した記事一覧"
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ブックマーク
          </h1>
          {bookmarks.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              ブックマークした記事はありません。
            </p>
          ) : (
            <ul className="space-y-4">
              {bookmarks.map((bookmark) => (
                <li
                  key={bookmark.slug}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-4"
                >
                  <Link
                    href={`/blog/${bookmark.slug}`}
                    className="block hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {bookmark.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {bookmark.date}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BookmarksPage;
