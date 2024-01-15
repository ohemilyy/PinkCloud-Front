import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pinkcloud.studio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://uptime.pinkcloud.studio',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    }
  ]
}