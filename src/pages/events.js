import * as React from "react"
import {useState, useEffect} from "react"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { EVENTS_CONTENT } from "../constants/content/events"
import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import EventsList from "../components/EventList"


const Events = () => {
  return (
    <Layout>
      <EventsList />

      <Footer />
    </Layout>
  );
};
export default Events