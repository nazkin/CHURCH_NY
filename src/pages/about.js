import * as React from "react"
import { Grid, Box, Stack, Divider } from "@mui/material";

import Layout from "../components/layout"
import { FAQ } from "../components/FAQ/FaqComponent"
import { Footer } from "../components/Footer"
import Seo from "../components/seo"
import { ABOUT_CONTENT } from '../constants/content/about'
import { StaticImage } from "gatsby-plugin-image"


const AboutContent = ({ language }) => {
  return (
    <Box width="80%" height="100%" marginTop={5} justifySelf={"center"}>
      <Grid container paddingTop={10}>
        <Grid item md={6} style={{ padding: 5 }}>
          <Box
            display={"flex"}
            width="80%"
            height="80%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <StaticImage src="about.jpg" placeholder="blurred" />
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          style={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
          }}
        >
          <Stack width="100%" height="100%" direction="column" gap={2}>
            <Box>{ABOUT_CONTENT[language].welcome}</Box>
            <Box>{ABOUT_CONTENT[language].about}</Box>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "grey.500" }} />
      </Box>
      <Grid container>
        <Grid item xs={12} md={12} style={{ padding: 5 }}>
          <Box>
            <h2>{ABOUT_CONTENT[language].histroyTitle}</h2>
          </Box>
          {ABOUT_CONTENT[language].history}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12} style={{ padding: 5 }}></Grid>
        <Grid item xs={12} md={12} style={{ padding: 5 }}>
          <h2>{ABOUT_CONTENT[language].faq}</h2>
          <FAQ language={language} />
        </Grid>
      </Grid>
    </Box>
  );
}

export const Head = () => <Seo title="About Page" />

const About = () => {
  return <Layout>
    <AboutContent />
    <Footer />
  </Layout>
}

export default About
