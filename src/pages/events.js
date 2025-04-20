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
  console.log("EVENTS", scriptLoaded);
  useEffect(() => {
    // if (scriptLoaded) {
    // console.log("script loaded")
    // }
    console.log("RUN USE EFFECT!!!");
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
    ></Box>
  </Box>;
};

const Events = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    useEffect(() => {
    if (scriptLoaded) {
        console.log("RUN USE EFFECT!!!");
    }
    }, [scriptLoaded]);

  return (
    <Layout>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          data-events-calendar-app
          data-project-id="proj_rcajbWhaMnIMxDi4zif5R"
          width="80%"
          height="80%"
        ></div>
        <Script
          strategy="post-hydrate"
          onLoad={setScriptLoaded(true)}
          type="text/javascript"
          src="//dist.eventscalendar.co/embed.js"
        ></Script>
        {/* <div
          style={{ display: "flex", width: "80%", height: "80%" }}
          events-calendar-app
          project-id="proj_rcajbWhaMnIMxDi4zif5R"
        >
          <Script
            src="//dist.eventscalendar.co/embed.js"
            onLoad={setScriptLoaded(true)}
            width="100%"
            height="100%"
          />
        </div> */}

        <Footer />
      </Box>
    </Layout>
  );
};
export default Events