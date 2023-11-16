import * as React from "react"
import {
  Grid,
  Button,
} from "@mui/material"

import Layout from "../components/layout"
import { FAQ } from "../components/FAQ/FaqComponent"
import Seo from "../components/seo"
import { ABOUT_CONTENT } from '../constants/content/about'
import history from '../../public/design.png'

const AboutContent = ({ language }) => {
  return (
    <>
      <h1 style={{ marginTop: 80 }}>
        {ABOUT_CONTENT[language].title}
      </h1>
      <Grid container>
        <Grid item md={6} style={{ padding: 40 }}>
          <img src={history} width="80%" height={1000} />
        </Grid>
        <Grid item md={6} style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <p>
            Sit deserunt cillum cupidatat est eiusmod. Fugiat cillum culpa culpa exercitation ullamco dolore officia minim pariatur laborum ut laborum ipsum. Quis reprehenderit ex in nostrud labore velit tempor laboris minim nulla consequat ad.

            Consectetur voluptate ut in magna do labore eu voluptate id consequat. Consectetur ad ea id Lorem ad ullamco irure. Id in irure occaecat Lorem. Voluptate proident fugiat irure adipisicing elit cillum laborum eiusmod ullamco irure.

            Ut dolore officia dolore esse fugiat culpa sunt nostrud ut deserunt aute incididunt pariatur. Ipsum qui aliquip ullamco nostrud fugiat non exercitation magna adipisicing. Fugiat aliqua ex aliqua irure aute aliquip nostrud nostrud officia pariatur ea. Magna nulla adipisicing est officia magna. Magna ipsum eiusmod enim dolor consequat amet non amet excepteur. Quis excepteur Lorem nisi est do qui ipsum est exercitation.
          </p>
          <p>
            Id non nostrud deserunt duis dolor occaecat. Est sint sunt velit ad nulla nostrud occaecat proident tempor laboris voluptate consectetur est. Et nulla adipisicing dolore aliquip voluptate est dolor est officia mollit. Esse non eu excepteur sit ex minim et duis. Proident aliquip sint elit id mollit proident.
          </p>
          <p>
            Consectetur voluptate ut in magna do labore eu voluptate id consequat. Consectetur ad ea id Lorem ad ullamco irure. Id in irure occaecat Lorem. Voluptate proident fugiat irure adipisicing elit cillum laborum eiusmod ullamco irure.
          </p>
        </Grid>
      </Grid>
      <Grid>
        <h1>Frequently Asked Questions</h1>
        <FAQ />
      </Grid>

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
