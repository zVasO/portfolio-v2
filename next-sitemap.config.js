/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.dgermann.dev").replace(/\/+$/, ""),
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
};
