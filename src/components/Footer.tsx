import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");

  const navItems = [
    { name: t("ホーム"), href: "/" },
    { name: t("プロジェクト"), href: "/projects" },
    { name: t("サービス"), href: "/services" },
    { name: t("ブログ"), href: "/blog" },
    { name: t("お問い合わせ"), href: "/contact" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    alert("ニュースレターに登録しました！");
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ロボ 二ン</h2>
            <p className="text-gray-300">
              革新的なソフトウェアソリューションを提供し、テクノロジーの力でビジネスを変革します。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ニュースレター登録</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="あなたのメールアドレス"
                required
                className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                登録する
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} ロボ 二ン. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
