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
    <div style={{ padding: 0, margin: "50px 0 40px 0", width: "100%", height: 550, backgroundImage: `url('hero.jpg')`, backgroundPosition: "center", backgroundSize: "cover" }}>
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 50,
    }}>
      {/* <h1 >Schedule</h1> */}
      <div style={{
        width: "100%",
        marginBottom: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

      }}>
        <h4 style={{ fontSize: '34px', color: "slategrey", fontWeight: 200 }}>Divine Liturgy Schedule</h4>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: '100%' }}>
          <div style={{ width: "33%" }}>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>Saturday</p>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>Sunday</p>
          </div>
          <div style={{ width: "33%" }}>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>5:00pm</p>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>8:45am, 11:00am </p>
          </div>
          <div style={{ width: "33%" }}>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>(English)</p>
            <p style={{ textAlign: "center", width: "100%", fontSize: '25px', color: "darkslategrey" }}>(Ukrainian)</p>
          </div>
        </div>

      </div>
      <p style={{ textAlign: "center" }}>
        Condimentum id venenatis a condimentum. Sed enim ut sem viverra aliquet eget. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Aliquet bibendum enim facilisis gravida neque convallis. At tempor commodo ullamcorper a lacus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.

        Id semper risus in hendrerit gravida. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Tincidunt ornare massa eget egestas purus. Risus in hendrerit gravida rutrum quisque non tellus orci. Neque vitae tempus quam pellentesque nec nam aliquam.
      </p>

    </Grid>
    <Grid container alt="News poster or slide" style={{
      margin: `0 auto 40px auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`,
      minHeight: 400,
      background: 'whitesmoke',

    }}>
      <ImageList sx={{ width: '100%', minHeight: 400 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader style={{ fontSize: "30px", background: "whitesmoke" }} component="div">Easter Celebration at St. John the Baptist Catholic Church</ListSubheader>
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
    <Grid container spacing={1} style={{
      margin: `0 auto 40px auto`,
      maxWidth: `var(--size-content)`,
      minHeight: 300,
      // display: "flex",
      // justifyContent: "space-between",

    }}>
      {/* <Grid item sm={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <span className={styles.headerOne}>Useful Links</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Why Chinese eat dogs?</a></div>
          <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> How to train your dragon?</a></div>
          <div style={{ padding: '8px 0px 8px 0px' }}><a className={styles.anchorTag} styles={{ textDeration: "none" }} href="https://www.newyorker.com/magazine/2021/05/10/how-the-pentagon-started-taking-ufos-seriously"> Why Russians eat ass for breakfast?</a></div>
        </div>
      </Grid> */}
      <Grid item sm={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
        <span className={styles.headerOne}>Support Your Parish</span>
        <p style={{ textAlign: 'center' }}>
          Founded in 1921, our church is located in the heart of historic Morris County,
          five miles from Morristown, in the town of Whippany, New Jersey.
          It is a very active and growing parish with a new campus that includes our newly
          consecrated church as well as the 24,000 square foot Ukrainian American Cultural Center of NJ.
        </p>
        <Button variant="outlined">Support Here</Button>
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
