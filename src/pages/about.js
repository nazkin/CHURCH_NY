import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ABOUT_CONTENT } from '../constants/content/about'

const AboutContent = ({ language }) => {
  return (
    <>
      <h1 style={{ marginTop: 80 }}>
        {ABOUT_CONTENT[language].title}
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
