module.exports = {
  siteMetadata: {
    title: `Frank's`,
    menu: [
      {
        label: "Articles",
        path: "/"
      },
      {
        label: "About me",
        path: "/about/"
      },
      {
        label: "Contact me",
        path: "/contact/"
      }
    ],
    author: {
      name: "Frank Ahn",
      email: "#",
      twitter: "#",
      github: "#",
      rss: "#"
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
};
