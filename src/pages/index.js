import * as React from "react"

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { HomeHero } from "../components/HomeComponents/HomeHero";
import { HomeScheduleSection } from "../components/HomeComponents/HomeSchedule";
import { SupportParish } from "../components/HomeComponents/HomeSupport";
import { HomeNewsSection } from "../components/HomeComponents/HomeNewsSection";
import { Announcement } from "../components/Announcements";
import { Box, styled } from "@mui/material";


// Styled Box for consistent styling
const FixedHeightBox = styled(Box)(({ theme, isSmallScreen }) => ({
  height: isSmallScreen ? '300px' : '500px', // Fixed height, adjusted for screen size
  // border: '2px solid #4CAF50',
  borderRadius: '8px',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',            // Center content horizontally
  backgroundColor: '#f5f5f5',
  overflow: 'hidden', // Keep overflow hidden to contain content.
  width: '90%',
  maxWidth: '1200px',
  margin: '10px auto',
  position: 'relative', // Needed for absolute positioning of resizable content
}));

const ResizableContent = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box', // Include padding and border in element's total width and height
  padding: 'inherit',  // Ensure padding from FixedHeightBox is applied
  overflow: 'hidden', // prevent content from overflowing
});

const PageContent = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HomeHero language={language} />
      <Announcement language={language} />
      <Box>
        <HomeScheduleSection language={language} />
      </Box>
      <Box>
        <HomeNewsSection language={language} />
      </Box>
      <Box paddingBottom={30}>
        <SupportParish language={language} />
      </Box>
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

const IndexPage = () => {
  return (
    <Layout>
      <PageContent />
      <Footer />
    </Layout>
  );
};

export default IndexPage;