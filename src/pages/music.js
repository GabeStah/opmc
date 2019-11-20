import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SongsClass from "../components/songs-class"
import { graphql } from "gatsby"

const MusicPage = ({ data, location }) => {
  const { hash } = location || {}
  const role = hash ? hash.substr(1) : ''
  const { nodes: songs } = data.allSongs;
  return (<Layout>
    <SEO title="Music" />
    <h1>Repertoire</h1>
    <p>Click below to filter by roles.</p>
    <SongsClass role={role} songs={songs}/>
  </Layout>)
}

export default MusicPage

export const query = graphql`
    query MusicQuery {
        allSongs {
            nodes {
                id
                baritone
                bass
                ensemble
                lead
                tenor
                title
            }
        }
    }
`
