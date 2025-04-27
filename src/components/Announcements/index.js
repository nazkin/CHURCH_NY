import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography, Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { graphql, useStaticQuery } from "gatsby";
import {
  darkBlue,
  white,
  lightYellow,
  darkYellow,
  lightBlue,
} from "../../constants/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GENERAL_CONTENT } from '../../constants/content/general';

export const Announcement = ({ language }) => {
  const theme = useTheme();

  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

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
  console.log(allContentfulAnnouncement.nodes)
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel
        animation="slide"
        interval="6000"
        indicators={false}
        navButtonsAlwaysVisible={true}
        NextIcon={<NavigateNextIcon />}
        PrevIcon={<NavigateBeforeIcon />}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: phoneSize ? "transparent" : "steelblue",
            color: phoneSize ? "steelblue" : white,
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            padding: phoneSize ? "0px" : "30px",
          },
        }}
      >
        {allContentfulAnnouncement.nodes.filter((item) => item.title !== "Test [DO NOT DELETE]").map((item, i) => (
          <Item key={i} item={item} language={language} />
        ))}
      </Carousel>
    </Container>
  );
};

const TitleSection = ({ title, date }) => {
  return (
    <Box
      style={{
        height: "100px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "30px",
      }}
    >
      <Box p={0} m={0}>
        <h3
          style={{
            fontSize: "18px",
            color: darkBlue,
            lineHeight: "20px",
          }}
        >
          {title}
        </h3>
      </Box>
      <Box p={0} m={0}>
        <h3
          style={{
            fontWeight: 100,
            color: darkBlue,
            lineHeight: "20px",
            fontSize: "16px",
          }}
        >
          {date}
        </h3>
      </Box>
    </Box>
  );
};

const Item = (props) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  const isSummaryAvailable = Boolean(
    props.item.summary || props.item.summaryUa
  );
  const isImageAvailable = Boolean(props.item.image?.publicUrl);
  const isDescriptionAvailable = Boolean(
    props.item.description?.description ||
      props.item.descriptionUa?.descriptionUa
  );

  const imageAndDescriptionAvailable =
    isDescriptionAvailable && isImageAvailable;

  return (
    <Paper
      sx={{
        background: "transparent",
        color: darkBlue,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5%",
        border: "1px solid white",
        paddingY: "5px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <TitleSection
          title={props.language == "en" ? props.item.title : props.item.titleUa}
          date={props.item.announcementDate}
        />
        {isSummaryAvailable && (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              padding: "15px 10px 0px 10px",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                color: "darkslategray",
                fontSize: "14px",
                lineHeight: "16px",
              }}
            >
              {props.language == "en"
                ? props.item.summary
                : props.item.summaryUa}
            </h6>
          </Box>
        )}
        {isDescriptionAvailable && (
          <Box
            style={{
              display: phoneSize & isImageAvailable ? "none" : "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: phoneSize & !isImageAvailable ? "50px" : "0px",
              minHeight: !isImageAvailable ? "400px" : undefined,
            }}
          >
            <p
              style={{
                color: "darkslategray",
                textAlign: "center",
              }}
            >
              {props.language == "en"
                ? props.item.description?.description
                : props.item.descriptionUa?.descriptionUa}
            </p>
          </Box>
        )}
        {isImageAvailable && (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingX: "2rem",
              paddingY: 0,
              magin: 0,
              width: phoneSize ? "80%" : "100%",
            }}
          >
            <img
              src={props.item.image?.publicUrl}
              alt="Event image"
              placeholder="blurred"
              width={isDescriptionAvailable ? "90%" : "100%"}
              height={isDescriptionAvailable ? "350px" : "500px"}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        )}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            margin: 0,
          }}
        >
          <a href={props.item.linkOne ? props.item.linkOne : ""}>
            {GENERAL_CONTENT[props.language].moreDetails}
          </a>
        </Box>
      </Box>
    </Paper>
  );
};
