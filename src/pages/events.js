import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { EVENTS_CONTENT } from "../constants/content/events"


const EventsContent = ({ language }) => (
  <>
    <h1 style={{ marginTop: 80 }}>

      {EVENTS_CONTENT[language].title}
    </h1>
    <div data-events-calendar-app data-project-id="proj_rcajbWhaMnIMxDi4zif5R" ></div>
      <script type="text/javascript" src="//dist.eventscalendar.co/embed.js"></script>
  </>
)

const Events = () => {
  return (
    <Layout>
      <EventsContent />
      <Footer />
    </Layout>
  )
}
export default Events