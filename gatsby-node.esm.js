import { createFilePath } from "gatsby-source-filesystem"
import createMarkdownPages from "./src/templates/createMarkdownPages"
import createWordpressPages from "./src/templates/wordpress"
import createMarkdownPosts from "./src/templates/createMarkdownPosts"

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createMarkdownPages({ graphql, actions })
  await createMarkdownPosts({ graphql, actions })
  if (process.env.IMPORT_WORDPRESS && process.env.IMPORT_WORDPRESS === 'true') {
    await createWordpressPages({ graphql, actions, reporter })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      image: String
      tags: [String!]
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Process posts
  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter &&
    node.frontmatter.type &&
    node.frontmatter.type === "post"
  ) {
    const slug = createFilePath({ node, getNode, basePath: `content/posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/members/)) {
    page.matchPath = "/members/*"
    // Update the page.
    createPage(page)
  }
}
