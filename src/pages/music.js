import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Songs from "../components/songs"

const MusicPage = ({ location }) => {
  const { state } = location || {}
  const { filter } = state || {}
  return (<Layout>
    <SEO title="Music" />
    <h1>Music Page</h1>
    <ul>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to="/music">All</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to="/music" state={{ filter: { role: 'lead' } }}>Lead</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to="/music" state={{ filter: { role: 'tenor' } }}>Tenor</Link>
      </li>
    </ul>
    <p>Welcome to music</p>
    <Songs filter={filter}/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>)
}

export default MusicPage
