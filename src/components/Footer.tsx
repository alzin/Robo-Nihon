// src/components/Footer.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log('Subscribed:', email);
    alert('ニュースレターに登録しました！');
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">あなたの名前</h2>
            <p className="text-gray-300">
              革新的なソフトウェアソリューションを提供し、テクノロジーの力でビジネスを変革します。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {['ホーム', '私について', 'プロジェクト', 'サービス', 'お問い合わせ'].map((item, index) => (
                <li key={index}>
                  <Link href={index === 0 ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
                    {item}
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
            &copy; {new Date().getFullYear()} あなたの名前. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// // src/components/Footer.tsx

// import React from 'react';
// import Link from 'next/link';
// import NewsletterSignup from './NewsletterSignup';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">あなたの名前</h2>
//             <p className="text-gray-300">
//               革新的なソフトウェアソリューションを提供し、テクノロジーの力でビジネスを変革します。
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
//             <ul className="space-y-2">
//               {['ホーム', '私について', 'プロジェクト', 'サービス', 'ブログ', 'お問い合わせ'].map((item, index) => (
//                 <li key={index}>
//                   <Link href={index === 0 ? '/' : `/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-150 ease-in-out">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <NewsletterSignup location="footer" />
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//           <p className="text-gray-300">
//             &copy; {new Date().getFullYear()} あなたの名前. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;