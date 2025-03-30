import React, { useState, useEffect } from 'react';

import {
  Grid,
  Alert,
  TextField,
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Stack,
  Divider
} from '@mui/material'
import emailjs from '@emailjs/browser'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import Seo from "../components/seo"
import { CONTACT_CONTENT } from '../constants/content/contact'
import { GENERAL_CONTENT } from '../constants/content/general'
import { ADDRESS_LINE_1, ADDRESS_LINE_2, PHONE_NUMBER, EMAIL } from '../constants/info'
import { SUPPORT_CONTENT } from '../constants/content/support';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { steelBlue } from '../constants/colors';


export const Head = () => <Seo title="Support our Church" />


const ExpandableOption = ({ name, title, summary, details, link, logo, language }) => {
    const [expanded, setExpanded] = useState(false);
    console.log(logo)
    return (
      <Box sx={{ width: '100%', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
          <Stack direction="row" justifyContent={"left"} alignItems={"center"}>
            {name === 'myEoffering' ? <StaticImage src="../images/myEoffering_logo.png" /> : null}
            {name && !logo ? <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                {name}
            </Typography> : null}
          </Stack>
          <Stack direction={"row"} display="flex" justifyContent={"right"} alignItems={"center"} gap={2}>
            <a href={link}  target='_blank'>
          <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: 'none' }}
            >
                {SUPPORT_CONTENT[language].startSupport}
            </Button>
            </a>
          </Stack>
        </Stack>
        {title ? <Typography>{title}</Typography> : null}
        <Typography variant="body1" sx={{ color: '#333' }}>
          {summary}
        </Typography>
        {expanded && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {details}
            </Typography>
          </Box>
        )}
        <Stack direction={"row"} display="flex" justifyContent={"left"} alignItems={"center"} gap={2} paddingTop={2}>
            {expanded ? <a href={link}  target='_blank'>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none' }}
                >
                    {SUPPORT_CONTENT[language].support}
                </Button>
            </a> : null}
            <Button
                variant="outlined"
                color="primary"
                onClick={() => setExpanded(!expanded)}
                sx={{ textTransform: 'none' }}
            >
                {expanded ? GENERAL_CONTENT[language].lessDetails : GENERAL_CONTENT[language].moreDetails}
            </Button>
          </Stack>
      </Box>
    );
  };

const SupportOptions = ({language}) => {
    const sections = [
        {
          name: "myEoffering",
          title: SUPPORT_CONTENT[language].myEofferingTitle,
          summary: SUPPORT_CONTENT[language].myEofferingSummary,
          details: SUPPORT_CONTENT[language].myEofferingDetails,
          link: SUPPORT_CONTENT[language].myEofferingLink,
          logo: SUPPORT_CONTENT[language].logo,
          language: language
        },
      ];

    return <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, marginTop: 8, paddingBottom: "700px", minHeight: 1000}} justifySelf={'center'}>
        <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
        {sections.map((section, index) => (
            <Box key={index} sx={{ width: '100%' }}>
            <ExpandableOption {...section} />
        </Box>
      ))}
    </Stack>
    </Box>
}

const SupportOutChurch = () => {
  return <Layout>
    <SupportOptions />
    <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
  </Layout>
}

export default SupportOutChurch