/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 });
 module.exports = {
   siteMetadata: {
     title: `Our Church`,
     description: `Our description of the Church`,
     author: `The clan of Judas`,
     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
   },

   plugins: [
     `gatsby-plugin-image`,
     "gatsby-image",
     {
       resolve: "gatsby-plugin-force-file-loader",
     },
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: `${__dirname}/src/images`,
       },
     },
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-plugin-layout`,
       options: {
         component: require.resolve(`./src/components/layout.js`),
       },
     },
     {
       resolve: `gatsby-plugin-manifest`,
       options: {
         name: `gatsby-starter-default`,
         short_name: `starter`,
         start_url: `/`,
         background_color: `#663399`,
         // This will impact how browsers show your PWA/website
         // https://css-tricks.com/meta-theme-color-and-trickery/
         // theme_color: `#663399`,
         display: `minimal-ui`,
         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
       },
     },
     {
       resolve: `gatsby-source-contentful`,
       options: {
         spaceId: `${process.env.CONTENT_SPACE_ID}`,
         accessToken: `${process.env.CONTENT_ACCESS_TOKEN}`,
       },
     },
   ],
 };
