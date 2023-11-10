import * as React from "react"
import { Link } from "gatsby"
import {
  Container,
} from '@mui/material'
import file from '../../public/test_schedule.pdf'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1 style={{ marginTop: 100 }}>
      Explore Our Weekly Bulletin
    </h1>
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }}>
      <iframe src={file} style={{ width: "100%", height: 1200 }} />
    </Container>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
