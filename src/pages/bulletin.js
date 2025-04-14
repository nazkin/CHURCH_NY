import * as React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import { PdfDisplay } from "../components/PdfDisplay";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const Head = () => <Seo title="Bulletin" />;

const VerticalDivider = () => {
  const dividerStyle = {
    position: "absolute",
    left: "50%", // Center the divider horizontally within its parent
    top: "5%", // Start the divider 5% from the top of the parent container
    width: "2px", // Thicker divider for better visibility
    height: "90%", // Occupy 90% of the parent container's height
    backgroundColor: "#ccc", // Lighter color for a more subtle look
    boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)", // Slight shadow for a subtle 3D effect
  };

  return <div style={dividerStyle}></div>;
};

const AnnouncementsComponent = () => {
  const { allContentfulAnnouncement } = useStaticQuery(graphql`
    query getAnnouncementsQuery {
      allContentfulAnnouncement {
        totalCount
        nodes {
          linkOne
          linkTwo
          summary
          title
          summaryUa
          titleUa
          id
          announcementDate
          description {
            description
          }
          descriptionUa {
            descriptionUa
          }
          image {
            publicUrl
          }
        }
      }
    }
  `);

  return (
    <Stack
      spacing={2}
      alignItems="center"
      sx={{ width: "100%", backgroundColor: "#f4f4f4", minHeight: "100vh" }}
    >
      <Typography variant="h6" sx={{ fontWeight: "600", color: "#333" }}>
        Announcements
      </Typography>
      {allContentfulAnnouncement.nodes.map((announcement, index) => (
        <Box key={index} sx={{ width: "100%", maxWidth: "600px" }}>
          {/* Announcement content */}
          <Box
            sx={{
              padding: "16px",
              backgroundColor: "#ffffff", // Bright white background for announcements
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow to make the background stand out
              border: "1px solid #ddd", // Light border for subtle contrast
            }}
          >
            <img
              src={announcement.image?.publicUrl}
              height="200px"
              width="100%"
              style={{
                objectFit: "contain",
              }}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "500", color: "#333" }}>
                {announcement.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "lighter", color: "#777" }}
              >
                {announcement.announcementDate}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
              {announcement.summary}
            </Typography>
          </Box>

          {/* Horizontal Divider */}
          {index < allContentfulAnnouncement.totalCount - 1 && (
            <Divider
              sx={{ width: "90%", margin: "16px auto", borderColor: "#ccc" }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

const Bulletin = () => {
  return (
    <Layout>
      <Grid
        container
        mt={"80px"}
        py="20px"
        style={{
          background: "whitesmoke",
        }}
        marginTop={'70px'}
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
            <Box sx={{width: '100%', height: '75%'}}>
              <PdfDisplay pdfUrl={"/2024ltr.pdf"} aspectRatio="calc(100% * 1.414)" />
            </Box>
          </Box>
        </Grid>
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
      <Box paddingBottom={100}></Box>
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Bulletin;
