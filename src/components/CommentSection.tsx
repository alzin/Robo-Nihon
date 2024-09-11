// src/components/CommentSection.tsx

import React, { useState, useEffect } from 'react';
import { Comment } from '../interfaces/Comment';

interface CommentSectionProps {
  postSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', content: '' });

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${postSlug}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [postSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.content.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newComment.author,
        content: newComment.content,
        createdAt: new Date().toISOString(),
      };
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem(`comments_${postSlug}`, JSON.stringify(updatedComments));
      setNewComment({ author: '', content: '' });
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">コメント</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
          <p className="font-semibold text-gray-900 dark:text-white">{comment.author}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
          <p className="text-gray-800 dark:text-gray-200">{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            名前
          </label>
          <input
            type="text"
            id="author"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            コメント
          </label>
          <textarea
            id="content"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          コメントを投稿
        </button>
      </form>
    </div>
  );
};

export default CommentSection;