import * as React from "react"
import {
  Grid,
  Item,
  Container,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader
} from '@mui/material'


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div style={{ padding: 0, margin: "0 0 40px 0", width: "100%", height: 550, backgroundImage: `url('hero.jpg')`, backgroundPosition: "center", backgroundSize: "cover" }}>
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
    <Grid container alt="News poster or slide" style={{
      margin: `0 auto 40px auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`,
      minHeight: 400,
      background: 'whitesmoke',

    }}>
      <ImageList sx={{ width: '100%', minHeight: 400 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader style={{ fontSize: "30px", background: 'whitesmoke', }} component="div">Easter Celebration at St. John the Baptist Catholic Church</ListSubheader>
        </ImageListItem>
        {["c1.jpg", "c2.jpg"].map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
            <ImageListItemBar
              title="Write a general title for photo"
              subtitle="Add a photo description"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
    <Grid container alt="News poster or slide" style={{
      margin: `0 auto 40px auto`,
      maxWidth: `var(--size-content)`,
      minHeight: 300,
    }}>
      <Grid item sm={12} md={6} style={{}}>
        <span className={styles.headerOne}>Important World Events</span>
        <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Fact Check: Only assholes eat dogs. Answer: True</a></div>
        <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Why Chinese eat dogs?</a></div>
        <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> How to train your dragon?</a></div>
        <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Why Russians eat ass for breakfast?</a></div>
        <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Putin will die as the stupidest house elf in history</a></div>
      </Grid>
      <Grid item sm={12} md={6} style={{ background: "whitesmoke", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="news.png" />
      </Grid>
    </Grid>
  </Layout >
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
