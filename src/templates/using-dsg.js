import * as React from "react"
import { Link } from "gatsby"

import {
  Grid,
  Alert,
  TextField,
  Button
} from '@mui/material'
import emailjs from '@emailjs/browser';

import Layout from "../components/layout"
import Seo from "../components/seo"
import contactImg from '../../public/c3.jpg'

const SERVICE = 'service_l2h0844'
const TEMPLATE = 'template_smhk7ll'
const PUBLIC_KEY = 'Bnn2RnFZ7su91pwrn'

const UsingDSG = () => {
  const form = React.useRef()
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {

    setTimeout(() => {
      setSuccess(false)
      setError(false)
    }, 6000)

  }, [message]);

  const onSubmit = (e) => {
    e.preventDefault()
    const params = {
      name,
      email,
      "user_phone": phone,
      "user_msg": message
    }

    emailjs.send(SERVICE, TEMPLATE, params, PUBLIC_KEY)
      .then((result) => {
        console.log(result);

        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setSuccess(true)

      }, (error) => {
        setError(true)
        console.log(error.text);
      });
  }

  return <Layout>
    <h1 style={{ marginTop: 100 }}>
      Contact Our Church
    </h1>
    <Grid
      container
      style={{
        background: "whitesmoke",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItem: "center"
      }}>
      <Grid md={6} style={{ padding: 20 }}>

        <TextField
          id="name-input"
          label="Name"
          type="name"
          autoComplete="Your Name"
          variant="outlined"
          style={{
            width: '90%',
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
          type="email"
          autoComplete="Your Email"
          variant="outlined"
          style={{
            width: '90%',
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
          type="phone"
          autoComplete="Your Phone"
          variant="outlined"
          style={{
            width: '90%',
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
          type="message"
          autoComplete="Your Message"
          variant="outlined"
          multiline={true}
          rows={5}
          style={{
            width: '90%',
            marginTop: 50
          }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <div style={{ height: 75, marginTop: 15 }}>
          {success && <Alert severity="success">
            Contact message was sent successfully. Thank you!
          </Alert>
          }
          {error && <Alert severity="error">
            Unable to send the message. Please try again !
          </Alert>
          }
        </div>

        <Button onClick={(e) => onSubmit(e)} type="submit" variant="outlined" style={{ width: 100 }}>Submit</Button>

      </Grid>
      <Grid md={5} style={{
        background: "lightsteelblue",
        border: "30px solid lightsteelblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}>
        <img src={contactImg} />
      </Grid>
    </Grid>
  </Layout>
}

export const Head = () => <Seo title="Contact" />

export default UsingDSG
