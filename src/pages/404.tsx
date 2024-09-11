import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Custom404: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="ページが見つかりません - あなたの名前"
        description="申し訳ありませんが、お探しのページは見つかりませんでした。"
      />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              ページが見つかりません
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              申し訳ありませんが、お探しのページは存在しないか、移動した可能性があります。
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Link href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ホームページに戻る
            </Link>
            <Link href="/contact" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;