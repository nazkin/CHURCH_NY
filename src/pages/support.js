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


export const Head = () => <Seo title="Support our Church" />


const sections = [
    {
      title: 'myEoffering',
      summary: 'Learn how you can support local shops and help them thrive in challenging times.',
      details: 'You can support local businesses by buying locally, promoting them on social media, and even donating to their crowdfunding campaigns.',
    },
    {
      title: 'Amazon Smile',
      summary: 'Join community-driven initiatives and offer your time to those in need.',
      details: 'Volunteer your time with local shelters, food banks, and non-profits to make a positive impact in your community.',
    },
    {
      title: 'ShopWithScrip',
      summary: 'Find out how to get involved with fundraising efforts for important causes.',
      details: 'Get involved with local or online fundraising campaigns. You can donate, host fundraising events, or even create your own campaign.',
    },
    {
        title: 'Participating Retailers',
        summary: 'Find out how to get involved with fundraising efforts for important causes.',
        details: 'Get involved with local or online fundraising campaigns. You can donate, host fundraising events, or even create your own campaign.',
      },
  ];

const ExpandableOption = ({ title, summary, details }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <Box sx={{ width: '100%', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
            {title}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setExpanded(!expanded)}
            sx={{ textTransform: 'none' }}
          >
            {expanded ? 'Show Less' : 'More Details'}
          </Button>
        </Stack>
        <Typography variant="body2" sx={{ color: '#555' }}>
          {summary}
        </Typography>
        {expanded && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {details}
            </Typography>
          </Box>
        )}
      </Box>
    );
  };

const SupportOptions = () => {
    return <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, marginTop: 8, height: '90vh'}} justifySelf={'center'}>
        <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
        {sections.map((section, index) => (
            <Box key={index} sx={{ width: '100%' }}>
            <ExpandableOption {...section} />
            {/* {index < sections.length - 1 && <Divider sx={{ width: '80%', margin: '16px auto', borderColor: '#ccc' }} />} */}
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