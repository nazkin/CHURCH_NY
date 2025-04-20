import * as React from "react"
import {useState, useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { EVENTS_CONTENT } from "../constants/content/events"
import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import { Script } from "react-dom";


const EventsContent = ({ language }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    console.log("EVENTS", scriptLoaded)
    useEffect(() => {
        // if (scriptLoaded) {
        // console.log("script loaded")
        // }
        console.log("RUN USE EFFECT!!!")
    }, []);

    <Box
      sx={{
        width: "80%",
        maxWidth: "1000px",
        backgroundColor: "#ffffff",
        padding: 2,
        borderRadius: "8px",
        boxShadow: 2,
        paddingTop: "100px",
        paddingBottom: 130,
        margin: "0 auto",
      }}
      justifySelf={"center"}
    >
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        {EVENTS_CONTENT[language].title}
      </Typography>
      <Box
        width="100%"
        height={"100%"}
        minWidth={"500px"}
        minHeight={"500px"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <div
          style={{ display: "flex", width: "80%", height: "80%" }}
          data-events-calendar-app
          data-project-id="proj_rcajbWhaMnIMxDi4zif5R"
        ></div>
      </Box>
    </Box>;
}

const Events = () => {
  return (
    <Layout>
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <iframe
          src="//dist.eventscalendar.co/embed.js"
          width={500}
          height={500}
        />
        <Footer />
      </Box>
    </Layout>
  );
};
export default Events