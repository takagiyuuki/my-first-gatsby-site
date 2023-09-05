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
    {
      resolve: `gatsby-plugin-manifest`
      options: {
        name: `Portfolio website`, 
        short_name: `Portfolio website`, //nameが入りきらない時のアプリ名
        start_url: `/`,
        background_color: `rgb(219, 219, 219)`, //アプリとして起動した時の背景色
        theme_color: `#51a44c`, //ツールバーの色
        display: `minimal-ui`, //↓詳細は下。
        icon: `${__dirname}/src/images/whitebacklogo.jpg`, //アイコン画像。これがファビコンにもなる。詳細は下。
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [ //↓詳細は下
          {
            src: `${__dirname}/src/images/github-mark.svg`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/github-mark-white.svg`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
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
