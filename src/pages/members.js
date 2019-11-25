import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
import Roster from "../components/roster"
const Members = props => {
  const { location } = props
  return (
    <Layout>
      {/*<section className={"pt-32"}>*/}
      <Router>
        <PrivateRoute path="/members/roster" component={Roster} />
        <Login
          path="/members/login"
          prevPath={location.state && location.state.prevPath}
        />
      </Router>
      {/*</section>*/}
    </Layout>
  )
}
export default Members
