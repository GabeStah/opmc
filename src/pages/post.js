import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const PostPage = ({ pageContext }) => {
  const { post } = pageContext;
  return (<Layout>
    <SEO title="Post" />
    <section className={'p-10 pt-32'}>
      <Post post={post}/>
    </section>
  </Layout>)
}

export default PostPage
