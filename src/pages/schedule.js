import * as React from "react"
import { Link } from "gatsby"

import { SCHEDULE_CONTENT } from '../constants/content/schedule'
import Layout from "../components/layout"
import { Footer } from "../components/Footer"
import { Box, Stack, Typography, Divider } from '@mui/material';


const LiturgySchedule = () => {
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
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
        Divine Liturgy Schedule
      </Typography>

      {/* Saturday Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Saturday
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          5:00 P.M. (English)
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Sunday Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Sunday
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          8:30 A.M. (Ukrainian)
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          10:00 A.M. (Ukrainian)
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Holy Days Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Holy Days
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          9:00 A.M. and 7:00 P.M.
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Week-days Special Intentions */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Week-days - Special Intentions
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          9:00 A.M. and/or 7:00 P.M.
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Baptisms Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Baptisms
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          By arrangement (973-887-3616), two months in advance
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Weddings Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Weddings
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          By arrangement (973-887-3616), six months in advance (Pre-Cana classes take place annually in March)
        </Typography>
      </Stack>
      <Divider sx={{ margin: '16px 0', borderColor: '#ccc' }} />

      {/* Confessions Schedule */}
      <Stack spacing={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Confessions
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          One-half hour before any Liturgy
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
  )
}
export default Schedule