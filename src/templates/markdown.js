import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Page from "../components/page"

export const MarkdownTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  // Type
  const type = frontmatter.type || "post"

  const obj = {
    content: html,
    title: frontmatter.title,
  }

  if (type === "post") {
    obj.date = frontmatter.date
    obj.featured_media = {
      source_url: frontmatter.image,
    }
  }

  return (
    <Layout>
      <SEO title="Blog Post" />
      <section className={"p-10 pt-32"}>
        {type === "post" ? <Post post={obj} /> : <Page page={obj} />}
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        path
        title
        type
      }
    }
  }
`

export default MarkdownTemplate
