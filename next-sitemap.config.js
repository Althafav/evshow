/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.evworld.ae/",
  generateRobotsTxt: true,
  sitemapSize: 100000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = 1.0;

    if (path === "/") {
      priority = 1.0;
    } else if (path.startsWith("/about")) {
      priority = 0.9;
    } else if (path.startsWith("/attend")) {
      priority = 0.9;
    } else if (path.startsWith("/event-information")) {
      priority = 0.9;
    } else if (path.startsWith("/exhibit")) {
      priority = 0.9;
    } else if (path.startsWith("/experience")) {
      priority = 0.9;
    } else if (path.startsWith("/about-rta")) {
      priority = 0.7;
    } else if (path.startsWith("/about-dubai")) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq: "weekly",
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
