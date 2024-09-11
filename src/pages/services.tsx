// src/pages/services.tsx

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "ウェブアプリケーション開発",
    description: "最新のフレームワークを使用して、高性能でスケーラブルなウェブアプリケーションを開発します。React、Vue、Angular などのフロントエンドテクノロジーと、Node.js、Python、Ruby on Rails などのバックエンドテクノロジーを駆使して、あなたのビジネスニーズに合わせたカスタムソリューションを提供します。",
    icon: GlobeAltIcon,
  },
  {
    title: "モバイルアプリ開発",
    description: "iOS と Android 向けのネイティブアプリ、または React Native を使用したクロスプラットフォームアプリを開発します。ユーザーフレンドリーなインターフェースと滑らかなパフォーマンスを備えた、魅力的なモバイルアプリケーションを作成します。",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "AI・機械学習ソリューション",
    description: "データ分析、予測モデリング、自然言語処理など、AI と機械学習を活用した革新的なソリューションを提供します。TensorFlow、PyTorch、scikit-learn などのライブラリを使用して、ビジネスインテリジェンスと自動化を実現します。",
    icon: CpuChipIcon,
  },
  {
    title: "クラウドアーキテクチャ設計",
    description: "AWS、Azure、Google Cloud Platform を活用した、スケーラブルで信頼性の高いクラウドアーキテクチャを設計・実装します。マイクロサービス、コンテナ化、サーバーレスアーキテクチャなど、最新のクラウドテクノロジーを駆使してインフラストラクチャを最適化します。",
    icon: ChartBarIcon,
  },
  {
    title: "セキュリティ監査・最適化",
    description: "アプリケーションとインフラストラクチャのセキュリティ監査を実施し、潜在的な脆弱性を特定・修正します。OWASP ガイドラインに沿ったセキュアなコーディング実践を適用し、データ保護とプライバシーコンプライアンスを確保します。",
    icon: ShieldCheckIcon,
  },
  {
    title: "レガシーシステムのモダナイゼーション",
    description: "既存のレガシーシステムを評価し、最新のアーキテクチャとテクノロジーを使用してモダナイズします。段階的な移行戦略を策定し、ビジネス継続性を確保しながら、システムのパフォーマンス、保守性、スケーラビリティを向上させます。",
    icon: CodeBracketIcon,
  },
];

const Services: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="サービス - あなたの名前"
        description="ウェブ開発、モバイルアプリ開発、AI・機械学習ソリューションなど、幅広いIT サービスを提供しています。"
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">サービス</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;