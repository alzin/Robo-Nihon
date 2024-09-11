// src/components/SocialShareButtons.tsx

import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

interface SocialShareButtonsProps {
  url: string;
  title: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaTwitter,
      color: 'bg-blue-400',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
      color: 'bg-blue-600',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      icon: FaLinkedinIn,
      color: 'bg-blue-700',
    },
  ];

  return (
    <div className="flex space-x-4 my-6">
      <span className="text-gray-700 dark:text-gray-300">共有：</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} text-white p-2 rounded-full hover:opacity-80 transition duration-300`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialShareButtons;