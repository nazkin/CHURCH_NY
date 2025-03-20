import * as React from "react"
import {
  Grid,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Box,
  Hidden,
} from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";
import { HOME_CONTENT } from "../constants/content/home";
import * as styles from "../components/index.module.css";
import background from "../../public/back.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { HomeHero } from "../components/HomeComponents/HomeHero";
import { HomeScheduleSection } from "../components/HomeComponents/HomeSchedule";
import { SupportParish } from "../components/HomeComponents/HomeSupport";
const PageContent = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HomeHero language={language} />
      <HomeScheduleSection language={language} />
      <Grid
        container
        alt="News poster or slide"
        style={{
          margin: `0 auto 40px auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          minHeight: 400,
          backgroundImage: `url(${background})`,
        }}
      >
        <ImageList sx={{ width: "100%", minHeight: 400 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              style={{ fontSize: "30px", background: "whitesmoke" }}
              component="div"
            >
              {HOME_CONTENT[language].easterCeleb}
            </ListSubheader>
          </ImageListItem>
          {["c1.jpg", "c2.jpg"].map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
              />
              <ImageListItemBar
                title="Write a general title for photo"
                subtitle="Add a photo description"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
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