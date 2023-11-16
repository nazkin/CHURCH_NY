import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const SchduleContent = () => (
  <>
    <h1 style={{ marginTop: 200 }}>
      This is page 3
    </h1>

    <Link to="/">Go back to the homepage</Link>
  </>
)

const Schedule = () => {
  return (
    <Layout>
      <SchduleContent />
    </Layout>
  )
}
export default Schedule