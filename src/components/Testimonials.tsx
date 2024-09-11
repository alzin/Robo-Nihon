// src/components/Testimonials.tsx

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "田中 太郎",
    company: "テックイノベーション株式会社",
    quote: "彼のウェブ開発スキルは素晴らしく、私たちのプロジェクトを期待以上に仕上げてくれました。コミュニケーションも円滑で、常に最新の技術トレンドを取り入れる姿勢に感銘を受けました。",
    avatar: "/images/avatar1.jpg"
  },
  {
    id: 2,
    name: "鈴木 花子",
    company: "グローバルソフト",
    quote: "AIを活用したソリューションの開発で彼の専門知識は非常に役立ちました。複雑な問題を簡潔に解決し、チーム全体の生産性を向上させてくれました。",
    avatar: "/images/avatar2.jpg"
  },
  {
    id: 3,
    name: "佐藤 健",
    company: "フューチャーテクノロジーズ",
    quote: "彼のモバイルアプリ開発スキルは卓越しています。ユーザー体験を最優先し、美しくかつ機能的なアプリを提供してくれました。今後のプロジェクトでも彼と働きたいと思います。",
    avatar: "/images/avatar3.jpg"
  }
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">お客様の声</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Testimonials;