import * as React from "react";
import { Box, Grid, Button } from "@mui/material";

import Layout from "../components/layout";
import { Footer } from "../components/Footer";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { FileUploadForm } from "../components/PdfUpload";

export const Head = () => <Seo title="Bulletin" />;

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
        <Grid
          xs={12}
          md={6}
          py={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FileUploadForm />
        </Grid>
      </Grid>
      <Box sx={{ position: "fixed", bottom: "0", left: 0, width: "100%" }}>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Bulletin;
