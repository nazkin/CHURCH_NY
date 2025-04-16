import * as React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import { PdfDisplay } from "../components/PdfDisplay";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { GlobalStyles } from "@mui/system";
import { BULLETIN_CONTENT } from "../constants/content/bulletin";
import { GENERAL_CONTENT } from "../constants/content/general";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const Head = () => <Seo title="Bulletin" />;

const AnnouncementsComponent = ({ language }) => {
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
      sx={{
        width: "100%",
        backgroundColor: "#f4f4f4",
        height: "100%",
        margin: "0px 0px 100px 0px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "600", color: "#333" }}>
        {BULLETIN_CONTENT[language].announcements}
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
            {announcement.image ? (
              <img
                src={announcement.image?.publicUrl}
                height="200px"
                width="100%"
                style={{
                  objectFit: "contain",
                }}
              />
            ) : null}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={{ fontWeight: "500", color: "#333" }}>
                {language == "en" ? announcement.title : announcement.titleUa}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "lighter", color: "#777" }}
              >
                {announcement.announcementDate}
              </Typography>
            </Stack>
            {announcement.summary ? (
              <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                {language == "en"
                  ? announcement.summary
                  : announcement.summaryUa}
              </Typography>
            ) : null}
            {announcement.linkOne ? (
              <Typography
                variant="body1"
                sx={{ mt: 2, color: "#555", justifySelf: "right" }}
              >
                <a href={announcement.linkOne} target="_blank">
                  {GENERAL_CONTENT[language].moreDetails}
                </a>
              </Typography>
            ) : null}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const BulletinContent = ({ language }) => {
  const scrollRef = React.useRef(null);
  const animationFrame = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    const element = scrollRef.current;
    if (!element || phoneSize || hovered) return;

    const scrollTo = (from, to, duration, callback) => {
      let start = null;

      const animate = (timestamp) => {
        if (hovered) return;
        if (!start) start = timestamp;

        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOut =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        element.scrollTop = from + (to - from) * easeInOut;

        if (progress < 1) {
          animationFrame.current = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };

      animationFrame.current = requestAnimationFrame(animate);
    };

    const scrollLoop = () => {
      const downDistance = 400;
      const duration = 23000;

      scrollTo(0, downDistance, duration, () => {
        scrollTo(downDistance, 0, duration, () => {
          if (!hovered) scrollLoop();
        });
      });
    };

    scrollLoop();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [hovered]);

  return (
    <Grid
      container
      mt={"80px"}
      py="20px"
      style={{
        background: "whitesmoke",
      }}
      marginTop={"70px"}
    >
      <Grid xs={12} md={6} px={"10px"} style={{ height: "85vh" }}>
        <PdfDisplay pdfUrl={"/2024ltr.pdf"} aspectRatio="calc(100% * 1.414)" />
      </Grid>
      <GlobalStyles
        styles={{
          ".example::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <Grid
        xs={12}
        md={6}
        className="example"
        ref={scrollRef}
        onMouseEnter={() => setHovered(true)}
        onClick={() => setHovered(true)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
          height: "80vh",
          overflowY: "scroll",
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
        }}
      >
        <AnnouncementsComponent language={language} />
      </Grid>
      {/* </GlobalStyles> */}
    </Grid>
  );
};

const Bulletin = () => {
  return (
    <Layout hasScroll={false}>
      <BulletinContent />
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Bulletin;
