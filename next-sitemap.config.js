const { default: axios } = require("axios");

module.exports = {
  siteUrl: "https://unplugwell.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,

  additionalPaths: async () => {
    try {
      const blogResponse = await axios.get(
        "https://unplugwell.com/blog/api/all-posts/?site_domain=unplugwell.com"
      );
      const blogPosts = blogResponse.data.results;

      const categoryResponse = await axios.get(
        "https://unplugwell.com/blog/api/get-categories/?site=unplugwell.com"
      );
      const categories = categoryResponse.data.results;

      const blogPaths = blogPosts.map((post) => ({
        loc: `/${encodeURIComponent(post.slug)}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.9,
      }));

      const categoryPaths = categories.map((category) => ({
        loc: `/categories/${encodeURIComponent(category.slug)}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.9,
      }));

      return [...blogPaths, ...categoryPaths];
    } catch (error) {
      console.error("Error fetching data for sitemap:", error);
      return [];
    }
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
