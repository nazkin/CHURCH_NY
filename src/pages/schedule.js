import * as React from "react"
import { Link } from "gatsby"

import { SCHEDULE_CONTENT } from '../constants/content/schedule'
import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { Box, Stack, Typography, Divider } from '@mui/material';
import { GENERAL_CONTENT } from "../constants/content/general"


const LiturgySchedule = ({ language }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
        paddingTop: '80px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        paddingBottom: 50
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
        {SCHEDULE_CONTENT[language].title}
      </Typography>

      {/* Saturday Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].saturday}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          5:00 P.M. ({SCHEDULE_CONTENT[language].english})
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Sunday Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].sunday}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          8:30 A.M. ({SCHEDULE_CONTENT[language].ukrainian})
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          10:00 A.M. ({SCHEDULE_CONTENT[language].ukrainian})
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Holy Days Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].holidays}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          9:00 A.M. {GENERAL_CONTENT[language].and} 7:00 P.M.
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Week-days Special Intentions */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].week_days} - {SCHEDULE_CONTENT[language].special_intentions}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          9:00 A.M. {GENERAL_CONTENT[language].and_or} 7:00 P.M.
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Baptisms Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].baptisms}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          {SCHEDULE_CONTENT[language].baptismsContent}
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Weddings Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].weddings}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          {SCHEDULE_CONTENT[language].weddingsContent}
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Confessions Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {SCHEDULE_CONTENT[language].confessions}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          {SCHEDULE_CONTENT[language].confessionsContent}
        </Typography>
      </Stack>
    </Box>
  );
};

const Schedule = () => {
  return (
    <Layout>
      <LiturgySchedule />
      <Footer />
    </Layout>
  );
}
export default Schedule