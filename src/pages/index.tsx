import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import dynamic from 'next/dynamic';

const ImageFloat = dynamic(() => import("../components/ImageFloat"), { ssr: false });

// import Testimonials from '../components/Testimonials';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const skills = [
  {
    name: "ソフトウェア開発",
    icon: CodeBracketIcon,
    description: "クリーンで効率的なコードを書くことに特化しています。",
  },
  {
    name: "モバイルアプリ",
    icon: DevicePhoneMobileIcon,
    description: "iOS・Android向けの革新的なアプリを開発します。",
  },
  {
    name: "ウェブ開発",
    icon: GlobeAltIcon,
    description: "魅力的で高性能なウェブサイトを構築します。",
  },
  {
    name: "AI・機械学習",
    icon: CpuChipIcon,
    description: "最新のAI技術を活用したソリューションを提供します。",
  },
];

const movableTexts = [
  "アイデアを実現",
  "モバイルアプリを作成",
  "ウェブサイトを制作",
  "AIで創造",
];

const useTypingEffect = (text: string, typingSpeed: number) => {
  const [displayedText, setDisplayedText] = useState("");


  useEffect(() => {
    let isMounted = true; // to prevent updates if the component unmounts
    const typeText = async () => {
      for (let i = 0; i < text.length; i++) {
        if (!isMounted) return; // avoid updating if the component unmounted
        setDisplayedText((prev) => prev + text.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, typingSpeed)); // wait for the specified typingSpeed
      }
    };
    setDisplayedText(""); // clear previous text
    typeText(); // initiate the typing effect

    return () => {
      isMounted = false; // clean up to prevent memory leaks
    };
  }, [text, typingSpeed]);

  return displayedText;
};

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const displayedText = useTypingEffect(movableTexts[currentTextIndex], 150);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % movableTexts.length);
    }, 2500);

    return () => clearInterval(textChangeInterval);
  }, []);

  useEffect(() => {
    const changeRotate = setInterval(() => {
      setRotate(360 * Math.random());
    }, 20000);

    return () => clearInterval(changeRotate);
  }, []);


  return (
    <Layout>
      <SEO
        title={t("ロボ 二ン")}
        description={t("The power of technology to create the future")}
        ogImage={`/images/og-image-${t("locale")}.jpg`}
      />
      <div>
        <section className="gradient-bg text-white py-20 h-[calc(100vh-64px)]">
          <div className="container mx-auto px-4 flex items-center justify-center h-full">
            <div className="absolute z-0 top-16 left-0 h-[calc(100vh-64px)] max-w-full overflow-hidden flex flex-wrap gap-[10px]">
              {Array(2500).fill("").map((_, i) => (
                <motion.span
                  initial={{ scale: 1, rotate: 360 * Math.random() }}
                  animate={{ scale: [1, .5, 1], rotate: rotate }}
                  transition={{ duration: 1, delay: (50 * Math.random() + 2), repeat: Infinity, repeatDelay: 50 }}
                  key={i}
                  className="secret rounded w-[calc((100vw-49*10px)/50)] h-[calc((100vw-49*10px)/50)] block border-[2px] border-[#3b82f6]" />
              ))}
            </div>

            <div className="absolute z-0 top-16 left-0 h-[calc(100vh-64px)] w-full overflow-hidden">
              {/* <ImageFloat /> */}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center z-20 w-1/2"
            >
              <h1 className="text-5xl font-bold mb-4 h-20">
                {" "}
                {/* Fixed height to prevent layout shift */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {displayedText}
                  </motion.span>
                </AnimatePresence>
              </h1>
              <p className="text-2xl mb-8">未来を創造するテクノロジーの力</p>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300"
                >
                  プロジェクトを見る
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              スキルと専門分野
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <skill.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* <Testimonials /> */}

        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">最新のプロジェクト</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project * 0.1 }}
                >
                  <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">プロジェクト {project}</h3>
                    <p className="text-gray-600 dark:text-gray-300">このプロジェクトの簡単な説明文がここに入ります。</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </div >
    </Layout >
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "jp", ["common"])),
    },
  };
};

export default Home;
