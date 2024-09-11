// src/pages/projects.tsx

import { NextPage } from 'next';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "AI搭載チャットボット",
    description: "自然言語処理を活用した、高度な顧客サポート用チャットボットの開発。",
    imageUrl: "/images/chatbot-project.jpg",
    technologies: ["Python", "TensorFlow", "NLP", "React"],
    link: "https://github.com/yourusername/ai-chatbot"
  },
  {
    title: "フィットネストラッカーアプリ",
    description: "ユーザーの運動習慣を追跡し、パーソナライズされたフィットネスプランを提供するモバイルアプリ。",
    imageUrl: "/images/fitness-app.jpg",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
    link: "https://github.com/yourusername/fitness-tracker"
  },
  {
    title: "ブロックチェーン投票システム",
    description: "セキュアで透明性の高い電子投票を実現するブロックチェーンベースのシステム。",
    imageUrl: "/images/blockchain-voting.jpg",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Node.js"],
    link: "https://github.com/yourusername/blockchain-voting"
  },
  // Add more projects as needed
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="プロジェクト - あなたの名前"
        description="私が取り組んできた主要なプロジェクトのショーケース。革新的なソリューションと技術的な専門知識をご覧ください。"
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">プロジェクト</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;