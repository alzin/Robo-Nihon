// src/components/LanguageSwitcher.tsx

import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-2">
      {router.locales?.map((locale) => (
        <Link
          key={locale}
          href={router.asPath}
          locale={locale}
          className={`px-2 py-1 rounded ${
            router.locale === locale
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;