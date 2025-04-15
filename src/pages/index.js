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
import { Box, Modal, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PageContent = ({ language }) => {
  const [isModalOpen, setOpenModal] = React.useState(false);
  const [selectedImage, selectImage] = React.useState(null);
  const [isClient, setIsClient] = React.useState(false);
  const rootRef = React.useRef(null);

  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  const imageSelector = (image) => {
    setOpenModal(true);
    selectImage(image);
  };
  const handleClose = () => setOpenModal(false);
  console.log(selectedImage);
  return (
    <>
      <HomeHero language={language} />
      <Announcement language={language} />
      <Box>
        <HomeScheduleSection language={language} />
      </Box>
      <Box ref={rootRef}>
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          container={() => rootRef.current}
        >
          <Box
            sx={(theme) => ({
              position: "relative",
              height: "80vh",
              minWidth: !phoneSize && 1000,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              p: 4,
            })}
          >
            <GatsbyImage
              image={selectedImage?.src}
              alt={selectedImage?.alt || selectedImage?.desc}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Modal>
        <HomeNewsSection language={language} imageSelector={imageSelector} />
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