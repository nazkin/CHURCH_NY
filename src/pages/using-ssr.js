import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <h1>
        This the new shit
      </h1>

    </Layout>
  )
}

export const Head = () => <Seo title="Not Using SSR" />

export default UsingSSR
