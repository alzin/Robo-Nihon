// src/components/ProjectCard.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, link }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-sm rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          プロジェクトを見る →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;