/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio website`,
    description: `Example project for the Gatsby Head API`,
    /** twitterUsername: `@gatsbyjs`, */
    /** siteUrl: `https://www.yourdomain.tld`, */
    image: `/gatsby-icon.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
