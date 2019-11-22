import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `90%`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className={'font-sans text-4xl'}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/*<ul style={{ listStyle: `none`, float: `right` }}>*/}
      {/*  <ListLink to="/">Home</ListLink>*/}
      {/*  <ListLink to="/music/">Music</ListLink>*/}
      {/*</ul>*/}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
