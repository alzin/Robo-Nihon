// src/components/SEO.tsx

import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogImage,
  canonicalUrl,
}) => {
  const router = useRouter();
  const { locales, locale: currentLocale } = router;

  const baseUrl = "https://robo-nihon.vercel.app";

  const hrefLangUrls = locales?.map((locale) => ({
    hrefLang: locale,
    href: `${baseUrl}/${locale === "ja" ? "" : locale}${router.asPath}`,
  }));

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={ogImage || `${baseUrl}/default-og-image.jpg`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLocale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={ogImage || `${baseUrl}/default-og-image.jpg`}
      />
      <link
        rel="canonical"
        href={canonicalUrl || `${baseUrl}${router.asPath}`}
      />

      {/* hrefLang for multi-language support */}
      {hrefLangUrls?.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}

      <link
        rel="alternate"
        href={`${baseUrl}${router.asPath}`}
        hrefLang="x-default"
      />
    </Head>
  );
};

export default SEO;
