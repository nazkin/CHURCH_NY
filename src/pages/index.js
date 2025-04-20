import * as React from "react"

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { HomeHero } from "../components/HomeComponents/HomeHero";
import { white } from "../constants/colors";
import { HOME_CONTENT } from "../constants/content/home";
import { SupportParish } from "../components/HomeComponents/HomeSupport";
import { HomeNewsSection } from "../components/HomeComponents/HomeNewsSection";
import { Announcement } from "../components/Announcements";
import { Box, Modal, Typography, Container, Grid } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Schedule from "../components/HomeComponents/sched/index";
import { darkBlue } from "../constants/colors";
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
  return (
    <>
      <HomeHero language={language} />
      <Announcement language={language} />
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
      >
        <Typography
          sx={{
            fontSize: "52px",
            textAlign: "center",
            color: darkBlue,
            fontWeight: 200,
          }}
        >
          {HOME_CONTENT[language].liturgySchedTitle}
        </Typography>
      </Box>
      <Container
        py={10}
        px={10}
        sx={{
          background: white,
        }}
      >
        <Schedule language={language} />
      </Container>
      <Box my={10} ref={rootRef}>
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
                objectFit: "fill",
              }}
            />
          </Box>
        </Modal>
        <HomeNewsSection language={language} imageSelector={imageSelector} />
      </Box>
      <Box pb={15}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: "52px",
              textAlign: "center",
              color: darkBlue,
              fontWeight: 200,
              paddingBottom: 5,
            }}
          >
            {HOME_CONTENT[language].supportTitle}
          </Typography>
        </Box>
        <SupportParish language={language} phoneSize={phoneSize} />
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