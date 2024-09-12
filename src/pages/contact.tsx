// src/pages/contact.tsx

import { NextPage } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

const Contact: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="お問い合わせ - あなたの名前"
        description="ご質問、プロジェクトの依頼、またはその他のお問い合わせはこちらからお願いします。"
      />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            お問い合わせ
          </h1>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              メッセージを送る
            </h2>
            <ContactForm />
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/alzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohamad-ghaith-alzin-884782108"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/mohamadghaith.alzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <FaFacebook size={32} />
              </motion.a>
              <motion.a
                href="https://stackoverflow.com/users/12146581/mohamad-ghaith-alzin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <FaStackOverflow size={32} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
