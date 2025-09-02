import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.com'; // TODO: replace with production domain
  const now = new Date().toISOString();
  const routes = [
    '',
    '/download',
    '/features',
    '/security',
    '/faq',
    '/contact',
    '/services/strategic-acquisitions',
    '/services/investment-advisory',
    '/services/capital-raising',
    '/services/portfolio-management',
    '/services/risk-management',
    '/services/business-valuation'
  ];
  return routes.map(path => ({
    url: base + path,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7
  }));
}
