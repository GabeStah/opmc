import { useStaticQuery, graphql } from "gatsby"
export const useSongs = () => {
  const { allSongs } = useStaticQuery(graphql`
      query SongQuery {
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
  `)
  return allSongs.nodes
}
