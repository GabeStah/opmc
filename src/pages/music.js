import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Songs from "../components/songs"
import { graphql } from "gatsby"

const MusicPage = ({ data, location }) => {
  const { hash } = location || {}
  const role = hash ? hash.substr(1) : ''
  const { nodes: songs } = data.allGoogleSheetSiteDataRow;
  return (<Layout>
    <SEO title="Music" />
    <section className={'p-10 pt-32'}>
      <p>Filter by roles or search by title and tags.</p>
      <Songs role={role} songs={songs}/>
    </section>
  </Layout>)
}

export default MusicPage

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
