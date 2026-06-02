import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://co2.expert'
  const lastModified = new Date()

  return [
    { url: base,                          lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/how-it-works`,        lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`,             lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,               lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partners`,            lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`,                 lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,             lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/nl`,                  lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/nl/hoe-het-werkt`,    lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/nl/contact`,          lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
