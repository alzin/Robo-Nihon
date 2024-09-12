// src/components/Pagination.tsx

import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link
          href={`/blog/page/${currentPage - 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          前のページ
        </Link>
      )}
      <span className="text-gray-700 dark:text-gray-300">
        {currentPage} / {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          href={`/blog/page/${currentPage + 1}`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          次のページ
        </Link>
      )}
    </div>
  );
};

export default Pagination;
