// src/pages/blog/page/[page].tsx

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useState, useMemo } from "react";
import Layout from "../../../components/Layout";
import SEO from "../../../components/SEO";
import BlogPostCard from "../../../components/BlogPostCard";
import SearchBar from "../../../components/SearchBar";
import TagFilter from "../../../components/TagFilter";
import Pagination from "../../../components/Pagination";
import NewsletterSignup from "../../../components/NewsletterSignup";
import { getPaginatedBlogPosts } from "../../../utils/getBlogPosts";
import { BlogPost } from "../../../interfaces/BlogPost";

interface BlogPageProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}

const POSTS_PER_PAGE = 6;

const BlogPage: NextPage<BlogPageProps> = ({
  posts,
  currentPage,
  totalPages,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => post.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [posts, searchQuery, selectedTags]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <Layout>
      <SEO
        title={`ブログ - ページ ${currentPage} - ロボ 二ン`}
        description="ソフトウェア開発、AI、テクノロジーに関する洞察と経験を共有します。"
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            ブログ
          </h1>
          <SearchBar onSearch={handleSearch} />
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
          />
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              検索結果が見つかりませんでした。
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
          <div className="mt-12">
            <NewsletterSignup location="blog" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalPages } = getPaginatedBlogPosts(1, POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string);
  const { posts, totalPages } = getPaginatedBlogPosts(page, POSTS_PER_PAGE);
  return {
    props: {
      posts,
      currentPage: page,
      totalPages,
    },
  };
};

export default BlogPage;
