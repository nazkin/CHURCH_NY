import * as React from "react"
import { Link } from "gatsby"

import { SCHEDULE_CONTENT } from '../constants/content/schedule'
import Layout from "../components/layout"


const ScheduleContent = ({ language }) => (
  <>
    <h1 style={{ marginTop: 80 }}>

      {SCHEDULE_CONTENT[language].title}
    </h1>
  </>
)

const Schedule = () => {
  return (
    <Layout>
      <ScheduleContent />
    </Layout>
  )
}
export default Schedule