import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Box, Stack, Divider, Typography } from "@mui/material";

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { AID_CONTENT } from "../constants/content/aid"
import { GENERAL_CONTENT } from "../constants/content/general";


const AidContent = ({ language }) => (
  <Box sx={{ width: '80%', minHeight: '800px', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, margin: '0 auto'}} justifySelf={'center'} alignItems={"top"}>
    <Stack width="100%" height="100%" display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={"65px"}>
        <Typography variant="h6" fontFamily={'serif'} fontSize={40}>
            {AID_CONTENT[language].title}
        </Typography>
        <a href="https://uaccnj.org/" target="_blank">
            <StaticImage src="../images/UACCNJ-logo.png" height="200"/>
        </a>
        <Box paddingTop={2} display="flex" justifyContent={"center"} alignItems={"center"}>
            <center>
            <Typography>
                {GENERAL_CONTENT[language].the}{GENERAL_CONTENT[language].UACCNJ}/{GENERAL_CONTENT[language].name}{AID_CONTENT[language].mainParagraphContent}
            </Typography>
            </center>
        </Box>
        <Box paddingTop={3} display="flex" justifyContent={"center"} alignItems={"center"}>
            <center>
            <Typography>
                {AID_CONTENT[language].secondParagraph}
            </Typography>
            </center>
        </Box>
        <Box paddingTop={3} display="flex" justifyContent={"center"} alignItems={"center"}>
            <center>
            <Typography>
                {AID_CONTENT[language].donationsLink}: <a href="https://www.paypal.com/donate/?hosted_button_id=R3BG7HYYM5HH4" tatget="_blank">https://www.paypal.com/donate/?hosted_button_id=R3BG7HYYM5HH4</a>
            </Typography>
            {/* <Typography>
                Download Printable Version of the Donations Flyer: <a download="donations_qr.png" href="donations_qr.png" tatget="_blank">here</a>
            </Typography> */}
            </center>
        </Box>
        <Box paddingTop={3} display="flex" paddingBottom={3} justifyContent={"center"} alignItems={"center"}>
            <StaticImage src="../images/donations_qr.png" />
        </Box>
        <Box sx={{ width: "100%" }} paddingBottom={3}>
            <Divider sx={{ borderBottomWidth: 2, borderColor: "grey.500" }} />
        </Box>
        <Box sx={{ width: "100%" }} paddingBottom={3}>
            <Typography fontWeight={600} fontSize={25}>{AID_CONTENT[language].pastDonations}:</Typography>
        </Box>
        <Box sx={{ width: "100%" }} paddingBottom={3}>
            <center>
                <video src="UACCNJ March 2022 - SD 480p.mov" />
            </center>
        </Box>
        <Box paddingBottom={50}></Box>
    </Stack>
  </Box>
)

const Aid = () => {
  return (
    <Layout>
      <AidContent />
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  )
}
export default Aid