// src/pages/about.tsx

import { NextPage } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Timeline from "../components/Timeline";
import SkillsRadarChart from "../components/SkillsRadarChart";
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2022",
    title: "シニアソフトウェアエンジニア",
    description: "テック企業にてAIプロジェクトのリード開発者として従事。",
  },
  {
    year: "2020",
    title: "ソフトウェアエンジニア",
    description: "スタートアップにてフルスタック開発を担当。",
  },
  {
    year: "2018",
    title: "コンピュータサイエンス修士号取得",
    description: "人工知能と機械学習に特化した研究を行う。",
  },
  {
    year: "2016",
    title: "インターンシップ",
    description: "大手テック企業にてモバイルアプリ開発のインターンを経験。",
  },
];

const About: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="私について - ロボ 二ン"
        description="ソフトウェア開発者としての経歴と人生のストーリー。技術への情熱と成果を紹介します。"
      />
      <div className="bg-white dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            私について
          </motion.h1>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              プロフェッショナルとしての旅
            </h2>
            <Timeline items={timelineItems} />
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillsRadarChart />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              私の目標
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              技術の力で世界をよりよい場所にすることが私の目標です。AI和機械学習の最新技術を活用し、
              社会に貢献できるソリューションの開発に取り組んでいます。常に新しい技術を学び、
              チームと協力しながら革新的なプロジェクトに挑戦し続けたいと考えています。
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
