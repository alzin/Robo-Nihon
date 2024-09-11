// src/pages/projects.tsx

import { NextPage } from 'next';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Skygenic - 自動ドローンビデオキャプチャサービス",
    description: "観光地での思い出を記録するため、事前に設定した飛行経路に沿って自動的に短編ビデオを撮影するiOSモバイルアプリと、撮影されたビデオを即座にダウンロードできるウェブページの提供。技術と観光体験を融合させた次世代サービス。",
    imageUrl: "/images/drone.webp",
    technologies: ["DJI", "iOS", "Swift", "React.js", "S3"],
    link: "https://www.j-platpat.inpit.go.jp/c1801/TR/JP-2021-052297/40/ja"
  },
  {
    title: "安楽亭配膳ロボット - 日本焼肉レストランでの自動配膳ロボット",
    description: "焼肉店「Anrakutei」での料理を配膳する未来的なロボットの開発。お店の温かい和風な雰囲気の中、テクノロジーと伝統的な飲食体験をシームレスに結びつけ、顧客の利便性とサービス効率を向上させる。",
    imageUrl: "/images/robot.webp",
    technologies: ["Android", "Java", "Kotlin", "Clean Architecture", "Orion Start", "KEENON"],
    link: "https://www.youtube.com/watch?v=GLHUteFZ8y0"
  },
  {
    title: "JetCode - AI支援型コーディング支援ツール",
    description: "ソフトウェア要件を自動的にコードへ変換し、開発者がビジネスロジックに集中できるよう支援するAIツール。AIチャットでコード編集やバグ修正を行い、チームとステークホルダーが同じ実装チャットを共有する機能を搭載。最新技術に対応したコードソリューションを提供。",
    imageUrl: "/images/jetcode.webp",
    technologies: ["Python", "Streamlit", "OpenAI API Assistant (ChatGPT)", "Next.js"],
    link: "https://www.jetcode.app/"
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