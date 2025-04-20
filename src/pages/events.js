import * as React from "react"
import {useState, useEffect} from "react"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { EVENTS_CONTENT } from "../constants/content/events"
import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import EventsList from "../components/EventList"
// import { Script } from "react-dom";


const Events = () => {
  return (
    <Layout>
        <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, paddingTop: '100px', paddingBottom: 50, margin: '0 auto'}} justifySelf={'center'}>
            <EventsList />
        </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Footer />
      </Box>
    </Layout>
  );
};
export default Events