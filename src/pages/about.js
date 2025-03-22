import * as React from "react"
import {
  Grid,
  Button,
  Box,
  Stack,
  Typography,
  Divider
} from "@mui/material"

import Layout from "../components/layout"
import { FAQ } from "../components/FAQ/FaqComponent"
import { Footer } from "../components/Footer"
import Seo from "../components/seo"
import { ABOUT_CONTENT } from '../constants/content/about'
import history from '../../public/design.png'


const AboutContent = ({ language }) => {
  return (
    <Box width="80%" height="100%" marginTop={10} justifySelf={"center"}>
      <Grid container paddingTop={5}>
        <Grid item md={6} style={{ padding: 5 }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={
            "center"
          }><img src="/church_icon.png" width="70%" height={"70%"} /></Box>
        </Grid>
        <Grid item md={6} style={{ padding: 5, display: "flex", flexDirection: "column", justifyContent: "left"}}>
          <Stack width="100%" height="100%" direction="column" gap={2}>
            <Box>{ABOUT_CONTENT[language].welcome}</Box>
            <Box>{ABOUT_CONTENT[language].about}</Box>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%'}}>
        <Divider sx={{ borderBottomWidth: 2, borderColor: 'grey.500' }} />
      </Box>
      <Grid container>
        <Grid item xs={12} md={12} style={{ padding: 5 }}>
          <Box><h2>{ABOUT_CONTENT[language].histroyTitle}</h2></Box>
          {ABOUT_CONTENT[language].history}
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} md={12} style={{ padding: 5 }}>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 5 }}>
          <h2>{ABOUT_CONTENT[language].faq}</h2>
          <FAQ language={language} />
        </Grid>
      </Grid>
    </Box>
  )
}

export const Head = () => <Seo title="About Page" />

const About = () => {
  return <Layout>
    <AboutContent />
    <Footer />
  </Layout>
}

export default About
