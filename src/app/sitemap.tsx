import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lunarlabs.cc',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://uptime.lunarlabs.cc',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    }
  ]
}