import * as React from "react"
import { Link } from "gatsby"
import {
  Container,
  TextField,
  Button
} from '@mui/material'

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    const res = {
      name,
      email,
      phone,
      message
    }
    console.log(`Form content ${name}`)
  }

  return <Layout>
    <h1 style={{ marginTop: 100 }}>
      Contact Our Church
    </h1>
    <Container style={{ background: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }}>
      <TextField
        id="name-input"
        label="Name"
        type="Name"
        autoComplete="Your Name"
        variant="outlined"
        style={{
          width: '60%',
          marginTop: 50
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <TextField
        id="email-input"
        label="Email"
        type="Email"
        autoComplete="Your Email"
        variant="outlined"
        style={{
          width: '60%',
          marginTop: 50
        }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        id="phone-input"
        label="Phone"
        type="Phone"
        autoComplete="Your Phone"
        variant="outlined"
        style={{
          width: '60%',
          marginTop: 50
        }}
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value)
        }}
      />
      <TextField
        id="message-input"
        label="Message"
        type="Message"
        autoComplete="Your Message"
        variant="outlined"
        multiline={true}
        rows={5}
        style={{
          width: '60%',
          marginTop: 50
        }}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <Button onClick={(e) => onSubmit(e)} variant="outlined" style={{ width: 100, marginTop: 100 }}>Submit</Button>
    </Container>
  </Layout>
}

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
