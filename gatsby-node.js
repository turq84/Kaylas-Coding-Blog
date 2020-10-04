const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.nodes
  const allTags = result.data.allMarkdownRemark.group

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]

    createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: post.fields.slug,
        previous,
        next,
      },
    })
  })

  // Tag template
  allTags.forEach(({ tag }) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve(`./src/templates/tags.tsx`),
      context: {
        tag: tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
