import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

export const MarkdownPostTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const post = {
    content: html,
    title: frontmatter.title,
    image: frontmatter.image,
    date: frontmatter.date,
    featured: frontmatter.featured,
    // tags: frontmatter.tags
  }

  return (
    <Layout>
      <SEO title="Blog Post" />
      <section className={"p-10 pt-32"}>
        <Post post={post} />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        featured
        title
        type
      }
    }
  }
`

export default MarkdownPostTemplate
