import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SongsClass from "../components/songs-class"
import { graphql } from "gatsby"

const IndexPage = ({ data, location }) => {
  const { hash } = location || {}
  const role = hash ? hash.substr(1) : ''
  const { nodes: songs } = data.allGoogleSheetSiteDataRow;
  return (<Layout>
    <SEO title="Music" />
    <h1>Repertoire</h1>
    <p>Filter by roles or search by title and tags.</p>
    <SongsClass role={role} songs={songs}/>
  </Layout>)
}

export default IndexPage

export const query = graphql`
    query MusicQuery {
        allGoogleSheetSiteDataRow {
            nodes {
                id
                baritone
                bass
                ensemble
                lead
                tenor
                title
                tags
            }
        }
    }
`
