/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      // bodyAttributes={{
      //   class: 'gradient'
      // }}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="text/javascript">{`
        let scrollpos = window.scrollY
        const header = document.getElementById("header")
        const navcontent = document.getElementById("nav-content")
        const navaction = document.getElementById("navAction")
        const brandname = document.getElementById("brandname")
        const toToggle = document.querySelectorAll(".toggleColour")
        
        document.addEventListener("scroll", function() {
          let i
          /*Apply classes for slide in bar*/
          scrollpos = window.scrollY
        
          if (scrollpos > 10) {
            header.classList.add("bg-white")
            header.classList.add("shadow")
            
            // navaction.classList.remove("bg-white")
            // navaction.classList.remove("text-gray-800")
            // navaction.classList.add("bg-gray-600")
            // navaction.classList.add("text-white")
            
            navcontent.classList.remove("bg-gray-100")
            navcontent.classList.add("bg-white")
          } else {
            header.classList.remove("bg-white")
            header.classList.remove("shadow")
            
            // navaction.classList.remove("bg-gray-600")
            // navaction.classList.remove("text-white")
            // navaction.classList.add("bg-white")
            // navaction.classList.add("text-gray-800")
            //
            navcontent.classList.remove("bg-white")
            navcontent.classList.add("bg-gray-100")
          }
        })
        
        /*Toggle dropdown list*/
        /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/
        
        const navMenuDiv = document.getElementById("nav-content")
        const navMenu = document.getElementById("nav-toggle")
        
        document.onclick = check
        
        function check(e) {
          const target = (e && e.target)
        
          //Nav Menu
          if (!checkParent(target, navMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, navMenu)) {
              // click on the link
              if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden")
              } else {
                navMenuDiv.classList.add("hidden")
              }
            } else {
              // click both outside link and outside menu, hide menu
              navMenuDiv.classList.add("hidden")
            }
          }
        }
        
        function checkParent(t, elm) {
          while (t.parentNode) {
            if (t == elm) {
              return true
            }
            t = t.parentNode
          }
          return false
        }
      `}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
