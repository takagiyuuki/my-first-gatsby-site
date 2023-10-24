/**
 * @type {import('gatsby').GatsbyConfig}
 */
const mySiteUrl = `https://portfolio-azi.pages.dev`;

module.exports = {
  siteMetadata: {
    title: `Portfolio website`,
    author: {
      name: `Yuuki`,
      summary: `Software developer`,
    },
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@yuukimizuiro`,
    siteUrl: mySiteUrl,
    image: `src/images/github-mark.svg`,
    supportedLanguages: ["en", "ja"],
    defaultLanguage: "en",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio website`,
        short_name: `My App`,
        description: `Example project for the Gatsby Head API`,
        lang: `en`,
        display: `minimal-ui`,
        start_url: `/`,
        background_color: `rgb(219, 219, 219)`,
        theme_color: `#51a44c`,
        theme_color_in_head: false,
        icon: `${__dirname}/src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `${__dirname}/src/images/icon.png`,
            sizes: `512x512`,
            type: `png`,
          },
          {
            src: `${__dirname}/src/images/icon.png`,
            sizes: `256x256`,
            type: `ping`,
          },
        ],
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/icon-path*`],
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
        mdxOptions: {
          remarkPlugins: [require(`remark-gfm`)],
        },
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
