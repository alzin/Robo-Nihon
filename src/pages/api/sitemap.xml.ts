// src/pages/api/sitemap.xml.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = ['', '/about', '/projects', '/services', '/blog', '/contact'];
  const languages = ['ja', 'en', 'ar'];
  const baseUrl = 'https://yourdomain.com'; // Replace with your actual domain

  const sitemap = new SitemapStream({ hostname: baseUrl });

  const sitemapEntries = pages.flatMap(page => 
    languages.map(lang => ({
      url: lang === 'ja' ? `${page}` : `/${lang}${page}`,
      changefreq: 'daily',
      priority: lang === 'ja' ? 1.0 : 0.8
    }))
  );

  const stream = Readable.from(sitemapEntries).pipe(sitemap);

  try {
    const xmlString = await streamToPromise(stream).then((data) => data.toString());
    
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });
    
    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
}