/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mgoverseasgroup.com',
    generateRobotsTxt: true,
    exclude: ['/home'], // explicitly exclude bad route
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
  };
  