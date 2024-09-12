// src/components/NewsletterSignup.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";

interface NewsletterSignupProps {
  location: "blog" | "footer";
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ location }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log("Subscribing email:", email);
    // Simulate a successful subscription
    setMessage("ニュースレターに登録しました！");
    setEmail("");
    // Clear the message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  const containerClass =
    location === "blog"
      ? "bg-blue-100 dark:bg-blue-900 p-6 rounded-lg shadow-md"
      : "bg-gray-200 dark:bg-gray-700 p-4 rounded-lg";

  return (
    <div className={containerClass}>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        ニュースレターに登録
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        最新の記事や更新情報をお届けします。
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="あなたのメールアドレス"
          required
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          登録する
        </motion.button>
      </form>
      {message && (
        <p className="mt-4 text-green-600 dark:text-green-400">{message}</p>
      )}
    </div>
  );
};

export default NewsletterSignup;
