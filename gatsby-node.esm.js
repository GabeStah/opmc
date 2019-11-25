import createMarkdownPages from "./src/templates/createMarkdownPages"
import createWordpressPages from "./src/templates/wordpress"

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createMarkdownPages({ graphql, actions })
  await createWordpressPages({ graphql, actions, reporter })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/members/)) {
    page.matchPath = "/members/*"
    // Update the page.
    createPage(page)
  }
}
