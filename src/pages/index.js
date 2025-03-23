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

const PageContent = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HomeHero language={language} />
      <HomeScheduleSection language={language} />
      <Announcement />
      <HomeNewsSection language={language} />
      <SupportParish language={language} />
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

const IndexPage = () => (
  <Layout>
    <PageContent />
    <Footer />
  </Layout>
);

export default IndexPage;