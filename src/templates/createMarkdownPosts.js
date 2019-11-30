const path = require(`path`)

const createMarkdownPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const markdownTemplate = path.resolve(`./src/templates/markdownPost.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields)
    createPage({
      path: node.fields.slug,
      component: markdownTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

export default createMarkdownPages
