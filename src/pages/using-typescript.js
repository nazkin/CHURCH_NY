import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const PageThree = () => (
  <Layout>
    <h1>
      This is page 3
    </h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default PageThree