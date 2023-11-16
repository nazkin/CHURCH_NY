import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutContent = ({ language }) => {
  return (
    <>
      <h1>
        This the new shit
      </h1>

    </>
  )
}

export const Head = () => <Seo title="About Page" />

const About = () => {
  return <Layout>
    <AboutContent />
  </Layout>
}

export default About
