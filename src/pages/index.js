import * as React from "react"
import {
  Grid,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import Seo from "../components/seo"
import { HOME_CONTENT } from '../constants/content/home'
import * as styles from "../components/index.module.css"

const PageContent = ({ language }) => {
  console.log("language", language); //check

  return (
    <>
      <div
        style={{
          padding: 0,
          margin: "50px 0 40px 0",
          width: "100%",
          height: 550,
          backgroundImage: `url('hero.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Grid
          style={{
            background: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
          }}
          container
          spacing={0}
        >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <section>
              <div
                style={{
                  width: "100%",
                  color: "whitesmoke",
                  fontSize: 54,
                  textAlign: "center",
                }}
              >
                {HOME_CONTENT[language].heroWelcome}
              </div>
              <div
                style={{
                  width: "100%",
                  color: "whitesmoke",
                  fontSize: 54,
                  textAlign: "center",
                }}
              >
                {HOME_CONTENT[language].churchName}
              </div>
            </section>
            <section
              style={{
                width: "100%",
                marginTop: 30,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                style={{ color: "goldenrod", fontSize: 24 }}
              >
                {HOME_CONTENT[language].humanitarianBtn}
              </Button>
              <img src={"pfu.png"} height={200} width={200} />
            </section>
          </Grid>
        </Grid>
      </div>
      <Grid
        container
        alt="News poster or slide"
        style={{
          margin: `0 auto 40px auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          minHeight: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 50,
        }}
      >
        {/* <h1 >Schedule</h1> */}
        <div
          style={{
            width: "100%",
            marginBottom: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "34px", color: "slategrey", fontWeight: 200 }}>
            {HOME_CONTENT[language].liturgySchedTitle}
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ width: "33%" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                {HOME_CONTENT[language].saturday}
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                {HOME_CONTENT[language].sunday}
              </p>
            </div>
            <div style={{ width: "33%" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                5:00pm
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                8:45am, 11:00am{" "}
              </p>
            </div>
            <div style={{ width: "33%" }}>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                {HOME_CONTENT[language].en}
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: "25px",
                  color: "darkslategrey",
                }}
              >
                {HOME_CONTENT[language].ua}
              </p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          {HOME_CONTENT[language].summary}
        </p>
      </Grid>
      <Grid
        container
        alt="News poster or slide"
        style={{
          margin: `0 auto 40px auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          minHeight: 400,
          background: "whitesmoke",
        }}
      >
        <ImageList sx={{ width: "100%", minHeight: 400 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              style={{ fontSize: "30px", background: "whitesmoke" }}
              component="div"
            >
              {HOME_CONTENT[language].easterCeleb}
            </ListSubheader>
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
      <Grid
        container
        spacing={1}
        style={{
          margin: `0 auto 40px auto`,
          maxWidth: `var(--size-content)`,
          minHeight: 300,
        }}
      >
        <Grid
          item
          sm={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <span className={styles.headerOne}>
            {HOME_CONTENT[language].supportTitle}
          </span>
          <p style={{ textAlign: "center" }}>
            {HOME_CONTENT[language].history}
          </p>
          <Button variant="outlined">
            {HOME_CONTENT[language].supportBtn}
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

const IndexPage = () => (
  <Layout>
    <PageContent />
  </Layout>
);

export default IndexPage;