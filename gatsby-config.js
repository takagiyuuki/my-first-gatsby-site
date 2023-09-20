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
        // localize: [
        //   {
        //     start_url: `/ja/`,
        //     lang: `ja`,
        //     name: `ポートフォリオ`,
        //     short_name: `マイポ`,
        //     description: `ブランディングサイトです`,
        //   },
        // ],
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
    // Add i18n function with gatsby-plugin-react-i18next
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/i18n/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@herob/gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `de`, `ja`],
        defaultLanguage: `en`,
        siteUrl: mySiteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: "always",
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["en"],
          },
        ],
      },
    },
  ],
};
