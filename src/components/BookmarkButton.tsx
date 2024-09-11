// src/components/BookmarkButton.tsx

import React, { useState, useEffect } from 'react';
import { BookmarkIcon as BookmarkOutline } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid } from '@heroicons/react/24/solid';
import { addBookmark, removeBookmark, isBookmarked, BookmarkedPost } from '../utils/bookmark';

interface BookmarkButtonProps {
  post: BookmarkedPost;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ post }) => {
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    setIsMarked(isBookmarked(post.slug));
  }, [post.slug]);

  const toggleBookmark = () => {
    if (isMarked) {
      removeBookmark(post.slug);
    } else {
      addBookmark(post);
    }
    setIsMarked(!isMarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className="flex items-center text-blue-500 hover:text-blue-600 transition duration-300"
      aria-label={isMarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isMarked ? (
        <BookmarkSolid className="h-5 w-5 mr-1" />
      ) : (
        <BookmarkOutline className="h-5 w-5 mr-1" />
      )}
      <span>{isMarked ? 'ブックマーク済み' : 'ブックマーク'}</span>
    </button>
  );
};

export default BookmarkButton;