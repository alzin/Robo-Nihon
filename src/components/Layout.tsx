// src/components/Layout.tsx

import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useTheme } from "../context/themeContext";
// import { SunIcon, MoonIcon, MinusIcon, XMarkIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import {
  SunIcon,
  MoonIcon,
  MinusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Footer from "./Footer";
// import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router"; // Import useRouter for locale

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter to access the locale

  const navItems = [
    { name: t("ホーム"), href: "/" },
    // { name: t('about'), href: '/about' },
    { name: t("プロジェクト"), href: "/projects" },
    { name: t("サービス"), href: "/services" },
    { name: t("ブログ"), href: "/blog" },
    { name: t("お問い合わせ"), href: "/contact" },
    // { name: t('bookmarks'), href: '/bookmarks', icon: BookmarkIcon },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""} ${router.locale === "ar" ? "rtl" : ""}`}
    >
      <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-extrabold text-2xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                ロボ 二ン
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {/* {item.icon && <item.icon className="h-5 w-5 mr-1" />} */}
                    {item.name}
                  </Link>
                ))}
                {/* <LanguageSwitcher /> */}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <button
                className="ml-2 md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleMenu}
              >
                <MinusIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-gray-800 w-full h-full flex flex-col items-center justify-center">
              <button
                className="absolute top-4 right-4 p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleMenu}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-2xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {/* {item.icon && <item.icon className="h-6 w-6 mr-2" />} */}
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
