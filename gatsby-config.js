module.exports = {
  siteMetadata: {
    title: `Kayla Gordon`,
    author: {
      name: `Kayla Gordon`,
      summary: `Code, eat, drink, sleep, repeat.`,
    },
    description: `A blog full to tech tutorials with focus on React and Gatsby JS.`,
    siteUrl: `https://kayla-gordon.com`,
    social: {
      twitter: `kayla_finland`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/services`,
        name: `services`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          {
            resolve: `gatsby-remark-prismjs`,
            showLineNumbers: false,
            inlineCodeMarker: { typescript: "tsx" },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-156892997-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kayla's Coding Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/kayla_coffee.jpg`,
        cache_busting_mode: "none",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.kayla-gordon.com`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    // {
    // 	resolve: `gatsby-plugin-google-amp`,
    // 	options: {
    // 		analytics: {
    // 			type: "gtag",
    // 			dataCredentials: "include",
    // 			config: {
    // 				vars: {
    // 					gtag_id: "UA-156892997-2",
    // 					config: {
    // 						"UA-156892997-2": {
    // 							page_location: "{{pathname}}",
    // 						},
    // 					},
    // 				},
    // 			},
    // 		},
    // 		canonicalBaseUrl: "https://www.kayla-gordon.com/",
    // 		components: ["amp-form"],
    // 		excludedPaths: ["/404*", "/"],
    // 		pathIdentifier: "/amp/",
    // 		relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
    // 		useAmpClientIdApi: true,
    // 	},
    // },

    {
      resolve: "gatsby-plugin-html2amp",
      options: {
        files: ["**/*.html"],
        dist: "public/amp",
        optimize: true,
        htmlPlugins: [],
        cssPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lobster",
              variants: ["300", "400", "500", "700"],
            },
            {
              family: "Poppins",
              variants: ["300", "400", "500"],
            },
          ],
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
  ],
}
