import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { EVENTS_CONTENT } from "../constants/content/events"
import { Grid, Box, Stack, Divider, Typography } from "@mui/material";


const EventsContent = ({ language }) => (
    <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, paddingTop: '100px', paddingBottom: 130}} justifySelf={'center'}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
            {EVENTS_CONTENT[language].title}
        </Typography>
        <Box width="100%" display="flex" justifyContent={"center"} alignItems={"center"}>
            {EVENTS_CONTENT[language].content}
        </Box>
  </Box>
)

const Events = () => {
  return (
    <Layout>
      <EventsContent />
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  )
}
export default Events