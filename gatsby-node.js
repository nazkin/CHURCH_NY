/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 });

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/contact",
    component: require.resolve("./src/pages/contact.js"),
    context: {},
    defer: true,
  })
}
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg|pdf)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "static/[name].[hash].[ext]",
              },
            },
          ],
        },
        // Add more rules for other file types if needed
      ],
    },
  });
};