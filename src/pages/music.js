import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Songs from "../components/songs"

const MusicPage = ({ location }) => {
  const { hash } = location || {}
  const role = hash ? hash.substr(1) : ''
  return (<Layout>
    <SEO title="Music" />
    <h1>Repertoire</h1>
    <p>Click below to filter by roles.</p>
    <Songs role={role}/>
  </Layout>)
}

export default MusicPage
