import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"
import PrivateRoute from "../components/privateRoute"
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App
