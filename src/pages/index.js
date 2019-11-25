import React from "react"
import SEO from "../components/seo"
import "../styles/styles.css"
import Hero from "../components/hero"
import PostList from "../components/postList"
import Featured from "../components/featured"
import Layout from "../components/layout"
import { graphql} from "gatsby"

const getPostsFromWordpress = data => {
  const { nodes: posts } = data.allWordpressPost
  return posts
}

const getPostsFromMarkdown = data => {
  const { nodes: posts } = data.allMarkdownRemark
  return posts
}

const IndexPage = ({ data, location }) => {
  const { nodes: posts } = data.allWordpressPost
  const nonFeaturedPosts = posts.filter(
    post =>
      post.categories.filter(category => category.name === "Featured")
        .length === 0
  )
  const featuredPosts = posts.filter(
    post =>
      post.categories.filter(category => category.name === "Featured").length >
      0
  )
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Featured posts={featuredPosts} />
        <PostList posts={nonFeaturedPosts} />
        {/*<Pricing/>*/}

        {/*<section className="container mx-auto text-center py-6 mb-12">*/}
        {/*  <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Call to Action</h1>*/}
        {/*  <div className="w-full mb-4">*/}
        {/*    <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"/>*/}
        {/*  </div>*/}
        {/*  <h3 className="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>*/}
        {/*  <button>Action!</button>*/}
        {/*</section>*/}
      </Layout>
    </>
  )
}

export default IndexPage

// export const postList = graphql`
//   query AllPostsQuery {
//     allMarkdownRemark {
//         nodes {
//             frontmatter {
//                 date
//                 image
//                 path
//                 title
//                 type
//             }
//             excerpt
//             fileAbsolutePath
//             html
//             id
//             internal {
//                 content
//                 type
//                 owner
//                 mediaType
//                 ignoreType
//                 fieldOwners
//                 description
//                 contentDigest
//             }
//             tableOfContents
//             rawMarkdownBody
//             wordCount {
//                 words
//                 sentences
//                 paragraphs
//             }
//         }
//     }
//     allWordpressPost {
//         nodes {
//             content
//             date
//             template
//             title
//             type
//             sticky
//             slug
//             path
//             modified
//             link
//             guid
//             format
//             excerpt
//             comment_status
//             featured_media {
//                 alt_text
//                 caption
//                 id
//                 link
//                 path
//                 mime_type
//                 media_type
//                 source_url
//                 title
//             }
//             categories {
//                 name
//                 path
//                 slug
//             }
//         }
//     }
//   }
// `
//
export const postList = graphql`
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
`
