import createMarkdownPages from "./src/templates/createMarkdownPages"
import createWordpressPages from "./src/templates/wordpress"

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createMarkdownPages({ graphql, actions })
  await createWordpressPages({ graphql, actions, reporter })
}
