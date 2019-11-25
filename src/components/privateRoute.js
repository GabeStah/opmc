import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = props => {
  const { component: Component, location, ...rest } = props
  if (!isLoggedIn() && location.pathname !== `/members/login`) {
    navigate("/members/login", {
      state: {
        prevPath: location.state.prevPath,
      },
    })
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
