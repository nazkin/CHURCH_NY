import * as React from "react"
import { Grid, Item, Container, Button } from '@mui/material'

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div style={{ padding: 0, margin: 0, width: "100%", height: 550, backgroundImage: `url('hero.jpg')`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <Grid style={{ background: 'rgba(0,0,0,0.5)', width: "100%", height: '100%' }} container spacing={0}>
        <Grid item xs={12} style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <section>
            <div style={{ width: "100%", color: "whitesmoke", fontSize: 54, textAlign: "center" }}>Welcome to</div>
            <div style={{ width: "100%", color: "whitesmoke", fontSize: 54, textAlign: "center" }}>St. John the Baptist Ukrainian Catholic Church</div>
          </section>
          <section style={{ width: "100%", marginTop: 30, display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Button variant="contained" style={{ color: "goldenrod", fontSize: 24 }}>UACCNJ Humanitarian Aid Drive</Button>
            <img src={"pfu.png"} height={200} width={200} />
          </section>
        </Grid>
      </Grid>

    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
