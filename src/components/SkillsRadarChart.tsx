// src/components/SkillsRadarChart.tsx

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface Skill {
  subject: string;
  A: number;
  fullMark: number;
}

const skills: Skill[] = [
  { subject: 'JavaScript', A: 120, fullMark: 150 },
  { subject: 'React', A: 110, fullMark: 150 },
  { subject: 'Node.js', A: 100, fullMark: 150 },
  { subject: 'Python', A: 90, fullMark: 150 },
  { subject: 'SQL', A: 85, fullMark: 150 },
  { subject: 'DevOps', A: 80, fullMark: 150 },
];

const SkillsRadarChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">技術スキル</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor' }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Skills" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SkillsRadarChart;