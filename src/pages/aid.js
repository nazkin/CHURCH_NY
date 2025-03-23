import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { AID_CONTENT } from "../constants/content/aid"


const AidContent = ({ language }) => (
  <>
    <h2 style={{ marginTop: 80 }}>

      {AID_CONTENT[language].title}
    </h2>
    
  </>
)

const Aid = () => {
  return (
    <Layout>
      <AidContent />
      <Footer />
    </Layout>
  )
}
export default Aid