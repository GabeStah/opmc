import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Roster from "../components/roster"

const RosterPage = ({ data, location }) => {
  // const { hash } = location || {}
  // const role = hash ? hash.substr(1) : ""
  const { nodes: roster } = data.allGoogleSheetRosterRow
  // console.log(data)
  return (
    <Layout>
      <SEO title="Music" />
      <section className={"p-10 pt-32"}>
        <p>Search by name, spouse, and email.</p>
        <Roster roster={roster} />
      </section>
    </Layout>
  )
}

export default RosterPage

export const query = graphql`
  query RosterQuery {
    allGoogleSheetRosterRow {
      nodes {
        active
        address
        cell
        email
        firstname
        lastname
        part
        phone
        spouse
      }
    }
  }
`
