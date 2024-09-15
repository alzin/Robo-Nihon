// src/pages/blog/[slug].tsx

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import RelatedPosts from "../../components/RelatedPosts";
import SocialShareButtons from "../../components/SocialShareButtons";
import CommentSection from "../../components/CommentSection";
import {
  getBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "../../utils/getBlogPosts";
import { BlogPost } from "../../interfaces/BlogPost";

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, relatedPosts }) => {
  const postUrl = `https://robo-nihon.vercel.app/blog/${post.slug}`;

  return (
    <Layout>
      <SEO
        title={`${post.title} - Your Blog Name`}
        description={post.excerpt}
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {post.date}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <SocialShareButtons url={postUrl} title={post.title} />
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[[remarkGfm], [remarkEmoji, { emoticon: true }]]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            <SocialShareButtons url={postUrl} title={post.title} />
          </div>
        </article>
        <div className="max-w-3xl mx-auto mt-12">
          <CommentSection postSlug={post.slug} />
        </div>
        <RelatedPosts posts={relatedPosts} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getBlogPostBySlug(params?.slug as string);
  const allPosts = getBlogPosts();
  const relatedPosts = getRelatedPosts(post!, allPosts);
  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default BlogPostPage;
