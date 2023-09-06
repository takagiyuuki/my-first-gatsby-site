/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteName = `Yuuki Portfolio`;
const siteUrl = `https://portfolio-azi.pages.dev/`;

module.exports = {
  siteMetadata: {
    title: `Portfolio website`,
    author: {
      name: `Yuuki`,
      summary: `Software developer`,
    },
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@yuukimizuiro`,
    siteUrl: `{$siteUrl}`,
    image: `/src/images/github-mark.svg`,
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
        icon: `${__dirname}/src/images/github-mark.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `${__dirname}/src/images/github-mark.svg`,
            sizes: `512x512`,
            type: `svg`,
          },
          {
            src: `${__dirname}/src/images/github-mark-white.svg`,
            sizes: `256x256`,
            type: `svg`,
          },
        ],
        cache_busting_mode: `none`,
        localize: [
          {
            start_url: `/ja/`,
            lang: `ja`,
            name: `ポートフォリオ`,
            short_name: `マイポ`,
            description: `ブランディングサイトです`,
          },
        ],
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
