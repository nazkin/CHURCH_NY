import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import {
  Grid,
  Alert,
  TextField,
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Stack
} from '@mui/material'
import emailjs from '@emailjs/browser'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import Seo from "../components/seo"
import { CONTACT_CONTENT } from '../constants/content/contact'
import { GENERAL_CONTENT } from '../constants/content/general'
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER, EMAIL } from '../constants/info'

const SERVICE = 'service_mhbcm0d'
const TEMPLATE = 'template_smhk7ll'
const PUBLIC_KEY = 'qMiZK74sZIp_Lm_UE'

const ContactInfo = ({ language }) => {
  const [isClient, setIsClient] = useState(false);
  const churchName = GENERAL_CONTENT[language].name
  const pastorName = GENERAL_CONTENT[language].pastor

  useEffect(() => {
    // Ensure that the code runs only on the client-side
    setIsClient(true);
  }, []);

  const handleCopyAddress = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText(`${ADDRESS_LINE_1} ${ADDRESS_LINE_2}`)
    }
  };

  const handleCopyEmail = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText(`${EMAIL}`)
    }
  };

  return <Box>
    <Box paddingBottom={"10pt"}>
    <Typography fontWeight={500} fontSize={18}>
      {churchName}
    </Typography>
    </Box>
    <Box paddingBottom={"10pt"} alignItems={"center"}>
      <Stack width="100%" direction="row" display={"flex"} justifyContent={"left"} alignItems={"center"} gap={1}>
        <Typography fontWeight={400} fontSize={15}>
          {ADDRESS_LINE_1}{' '}{ADDRESS_LINE_2}
        </Typography>
        <Tooltip title={CONTACT_CONTENT[language].copyAddress}>
          <IconButton onClick={handleCopyAddress()} sx={{ padding: 0, fontSize: 18 }}>
            <ContentCopyIcon sx={{ fontSize: "inherit" }}/>
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
    <Box paddingBottom={"20pt"}>
      <Typography fontWeight={400} fontSize={15}>
        {CONTACT_CONTENT[language].phoneLabel}{' '}{PHONE_NUMBER}
      </Typography>
      <Stack width="100%" direction="row" display={"flex"} justifyContent={"left"} alignItems={"center"} gap={1}>
      <Typography fontWeight={400} fontSize={15}>
        {EMAIL}
      </Typography>
        <Tooltip title={CONTACT_CONTENT[language].copyEmail}>
            <IconButton onClick={handleCopyEmail()} sx={{ padding: 0, fontSize: 18 }}>
              <ContentCopyIcon sx={{ fontSize: "inherit" }}/>
            </IconButton>
        </Tooltip>
      </Stack>
    </Box>
    <Box>
    <Typography fontWeight={400} fontSize={15}>
        {GENERAL_CONTENT[language].pastorLabel}{' - '}{pastorName}
      </Typography>
    </Box>
  </Box>
}

const ContactForm = ({ language }) => {

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
    }, 15000)

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

  return <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, paddingTop: '100px', paddingBottom: 50, margin: '0 auto'}} justifySelf={'center'}>
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItem: "center",
        paddingBottom: "100px",
      }}>
      <Grid md={6} display={"flex"} flexDirection={"column"}>
          <Grid>
            <ContactInfo language={language} />
          </Grid>
          <Grid>
          <TextField
            id="name-input"
            label={CONTACT_CONTENT[language].nameInput}
            type="name"
            variant="outlined"
            style={{
              width: '100%',
              marginTop: 50
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            size="small"
          />
          <TextField
            id="email-input"
            label={CONTACT_CONTENT[language].emailInput}
            type="email"
            autoComplete="Your Email"
            variant="outlined"
            style={{
              width: '100%',
              marginTop: 20
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            size="small"
          />
          <TextField
            id="phone-input"
            label={CONTACT_CONTENT[language].phoneInput}
            type="phone"
            autoComplete="Your Phone"
            variant="outlined"
            style={{
              width: '100%',
              marginTop: 20
            }}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            size="small"
          />
          <TextField
            id="message-input"
            label={CONTACT_CONTENT[language].messageInput}
            type="message"
            autoComplete="Your Message"
            variant="outlined"
            multiline={true}
            rows={5}
            style={{
              width: '100%',
              marginTop: 20
            }}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          {success && <Box width={'100%'} marginTop={"20pt"}>
            <Alert severity="success">{CONTACT_CONTENT[language].successMsg}</Alert>
          </Box>}
          {error && <Box width={'100%'} marginTop={"20pt"}>
            <Alert severity="error">{CONTACT_CONTENT[language].errorMsg}</Alert>
          </Box>}
          <Box width={"100%"} display={"flex"} justifyContent={"right"} marginTop={"20pt"} paddingBottom={2}>
            <Button onClick={(e) => onSubmit(e)} type="submit" variant="contained" style={{ minWidth: 100 }}>
              {CONTACT_CONTENT[language].submitBtn}
            </Button>
          </Box>
          </Grid>
      </Grid>
      <Grid md={5} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        alignItems: "top",
      }}>
        <Box height="90%" direction="flex" justifyContent={"centse"} alignItems={"top"}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.6451164792375!2d-74.42900408727112!3d40.83575807125593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a7c048043bef%3A0xbc81a8fd3b1a55b5!2sSaint%20John%20the%20Baptist%20Ukrainian%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1742655055864!5m2!1sen!2sus" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
      </Grid>
    </Grid>
  </Box>
}

export const Head = () => <Seo title="Contact" />

const Contact = () => {
  return <Layout>
    <ContactForm />
    <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
      <Footer />
    </Box>
  </Layout>
}

export default Contact
