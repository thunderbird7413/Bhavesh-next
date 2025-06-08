export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://www.mgoverseasgroup.com/sitemap.xml', // Replace with your actual domain
  };
} 