/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio website`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@yuukimizuiro`,
    siteUrl: `https://www.yourdomain.com`,
    image: `/gatsby-icon.png`,
  },
  plugins: [
    // Seo Meta tag plugin
    // "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `artwork`,
        path: `${__dirname}/artwork`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
