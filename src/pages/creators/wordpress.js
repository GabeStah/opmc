const path = require(`path`)

const wordpress = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllPostsQuery {
      allWordpressPost {
        nodes {
          content
          date
          template
          title
          type
          sticky
          slug
          path
          modified
          link
          guid
          format
          excerpt
          comment_status
          featured_media {
            alt_text
            caption
            id
            link
            path
            mime_type
            media_type
            source_url
            title
          }
          categories {
            name
            path
            slug
          }
        }
      }
    }
  `)
  result.data.allWordpressPost.nodes.forEach(post => {
    createPage({
      path: post.path,
      component: path.resolve(`./src/pages/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        // slug: post.slug,
        // path: post.path,
        post: post,
      },
    })
  })
}

export default wordpress
