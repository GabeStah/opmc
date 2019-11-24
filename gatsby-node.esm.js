import createMarkdownPages from "./src/pages/creators/markdown"
import createWordpressPages from "./src/pages/creators/wordpress"

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createMarkdownPages({ graphql, actions })
  await createWordpressPages({ graphql, actions, reporter })
}
