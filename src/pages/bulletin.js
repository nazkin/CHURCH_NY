import * as React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { FileUploadForm } from "../components/PdfUpload";

export const Head = () => <Seo title="Bulletin" />;


const VerticalDivider = () => {
  const dividerStyle = {
    position: 'absolute',
    left: '50%', // Center the divider horizontally within its parent
    top: '5%', // Start the divider 5% from the top of the parent container
    width: '2px', // Thicker divider for better visibility
    height: '90%', // Occupy 90% of the parent container's height
    backgroundColor: '#ccc', // Lighter color for a more subtle look
    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)', // Slight shadow for a subtle 3D effect
  };

  return <div style={dividerStyle}></div>;
};

const AnnouncementsComponent = () => {
  const announcements = [
    {
      title: 'Holy Communion and Sacrament of Holy Confession',
      date: 'March 23, 2025',
      text: 'Preparation of our children for Solemn Holy Communion and Sacrament of Holy Confession will be held each Sunday at the Church starting at 11:15 A.M. on October 06, 2024. I encourage parents to bring the children who are in the 1st grade to school as well. In this case they will receive instruction for two years. Children in the 2nd grade in school or older who attend the classes will be ready to receive the Sacrament of Holy Confession  late in  May or beginning of June, 2024. For further information please contact Fr. Stepan. Celebration of our children receiving their First Holy Sacrament of Confession will be held during 10:00 A.M. Sunday Divine Liturgy . Date to be announced.',
    },
    {
      title: 'Announcement 2',
      date: 'March 22, 2025',
      text: 'Here’s another announcement. This one is a bit longer than the last.',
    },
    {
      title: 'Announcement 3',
      date: 'March 21, 2025',
      text: 'This is a shorter description for the third announcement.',
    },
  ];

  return <Stack spacing={2} alignItems="center" sx={{ width: '100%', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
    <Typography variant="h6" sx={{ fontWeight: '600', color: '#333' }}>Announcements</Typography>
  {announcements.map((announcement, index) => (
    <Box key={index} sx={{ width: '100%', maxWidth: '600px' }}>
      {/* Announcement content */}
      <Box
        sx={{
          padding: '16px',
          backgroundColor: '#ffffff', // Bright white background for announcements
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow to make the background stand out
          border: '1px solid #ddd', // Light border for subtle contrast
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontWeight: '500', color: '#333' }}>
            {announcement.title}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'lighter', color: '#777' }}>
            {announcement.date}
          </Typography>
        </Stack>
        <Typography variant="body1" sx={{ mt: 2, color: '#555' }}>
          {announcement.text}
        </Typography>
      </Box>
      
      {/* Horizontal Divider */}
      {index < announcements.length - 1 && (
        <Divider sx={{ width: '90%', margin: '16px auto', borderColor: '#ccc' }} />
      )}
    </Box>
  ))}
</Stack>
}

const Bulletin = () => {
  const [numPages, setNumPages] = React.useState();
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
            extension
            dir
          }
        }
      }
    }
  `);
  const bulletin = data.allFile.edges[0];

  const handleViewFullScreen = (url) => {
    window.open(url, "_blank");
  };
  console.log(bulletin);
  return (
    <Layout>
      <Grid
        container
        mt={"80px"}
        py="20px"
        style={{
          background: "whitesmoke",
        }}
      >
        <Grid xs={12} md={6} px={"10px"} style={{ height: "75vh" }}>
          <Box
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button
              style={{
                display: "relative",
                top: -7,
                right: 0,
                background: "gold",
                color: "steelblue",
                fontWeight: 800,
              }}
              variant="contained"
              onClick={() => handleViewFullScreen(bulletin.node.publicURL)}
            >
              View Full Screen
            </Button>
            <iframe
              src={bulletin.node.publicURL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Sample PDF"
              style={{
                border: "4px solid darkslategrey",
                scrollbarColor: `${"darkslategrey"} ${"black"}`,
                scrollbarWidth: "5px",
              }}
            />
          </Box>
        </Grid>
        <VerticalDivider />
        <Grid
          xs={12}
          md={6}
          // py={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
          }}
        >
          <AnnouncementsComponent />
        </Grid>
      </Grid>
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Bulletin;
