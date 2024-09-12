// src/components/Timeline.tsx

import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-8 flex justify-between items-center w-full"
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">
              {index + 1}
            </h1>
          </div>
          <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">
              {item.year}
            </h3>
            <h4 className="mb-3 font-semibold text-blue-500 text-lg">
              {item.title}
            </h4>
            <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
