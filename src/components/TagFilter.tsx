// src/components/TagFilter.tsx

import React from "react";
import { motion } from "framer-motion";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        タグでフィルター
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => onTagToggle(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
