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
    <Container
      style={{
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 18px, rgba(0, 0, 0, 0.22) 0px 10px 10px;`,
        borderRadius: '8px',
        width: "100%",
        height: "100%",

      }}
    >
      <Carousel
        animation="fade"
        interval="3000"
        indicators={false}
        navButtonsAlwaysVisible={true}
        NextIcon={<NavigateNextIcon />}
        PrevIcon={<NavigateBeforeIcon />}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: darkYellow,
            color: white,
          },
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            padding: "30px",
          },
        }}
      >
        {allContentfulAnnouncement.nodes.map((item, i) => (
          <Item key={i} item={item} language={language} />
        ))}
      </Carousel>
    </Container>
  );
};

const Item = (props) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      sx={{
        background: white,
        color: darkBlue,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5%",
        border: "1px solid white",
        height: "100%"
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          padding: "0 10px 0 10px",
          height: "5%",
        }}
      >
        {" "}
        {props.item.title ?
          <>{ phoneSize ? 
              <h5
                style={{
                  fontSize: "15px",
                  color: darkBlue,
                  lineHeight: "15px",
                }}
              >
                {props.item.title}
              </h5> : 
              <h3
                style={{
                  fontSize: "20px",
                  color: darkBlue,
                  lineHeight: "20px",
                }}
              >
                {props.language == 'en' ? props.item.title : props.item.titleUa}
              </h3>
            }
          </> : ' '}

        {props.item.announcementDate ? 
          <>{ phoneSize ? 
              <h5 style={{ fontWeight: 100, fontSize: "15px", color: darkBlue }}>
                {props.item.announcementDate}
              </h5> : 
              <h3 style={{ fontWeight: 100, color: darkBlue }}>
                {props.item.announcementDate}
              </h3>
            }
          </> : ' '}
      </span>

      {phoneSize ? 
        <Stack padding="5px" height="95%" alignItems={"center"} display={"flex"} justifyContent={"center"} sx={{background: "red"}}>
          {/* Either image or long description is required */}
          <>
            {props.item.image.publicUrl ? 
              <Box height={props.item.summary ? "60%" : "90%"}><img
                src={props.item.image.publicUrl}
                alt="Event image"
                placeholder="blurred"
                width="auto"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              /></Box> : 
              <p style={{ color: "darkslategray", textAlign: "center" }}>
                {props.item.description.description}
              </p>
            }
          </>
          {props.item.summary ?
          <h6
            style={{ textAlign: "center", color: "darkslategray", fontSize: "14px" }}
          >
            {props.language == 'en' ? props.item.summary : props.item.summaryUa}
          </h6> : null }
          {props.item.linkOne ? 
            <a href={props.item.linkOne}>{GENERAL_CONTENT[props.language].moreDetails}</a> : null }
        </Stack> : 
        <Stack>
          <>
            {props.item.image.publicUrl ? 
              <Box height={props.item.summary ? "60%" : "90%"}><img
                src={props.item.image.publicUrl}
                alt="Event image"
                placeholder="blurred"
                width="auto"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              /></Box> : 
              <p style={{ color: "darkslategray", textAlign: "center" }}>
                {props.language == 'en' ? props.item.description.description : props.item.descriptionUa.descriptionUa}
              </p>
            }
          </>
          {props.item.summary ?
          <h6
            style={{ textAlign: "center", color: "darkslategray", fontSize: "14px" }}
          >
            {props.language == 'en' ? props.item.summary : props.item.summaryUa}
          </h6> : null }
          {props.item.description ? 
          <p
            style={{ color: "darkslategray", textAlign: "center", height: "250px" }}
          >
            {props.language == 'en' ? props.item.description.description : props.item.descriptionUa.descriptionUa}
          </p> : null}
          {props.item.linkOne ? 
            <a href={props.item.linkOne}>{GENERAL_CONTENT[props.language].moreDetails}</a> : null }
        </Stack>
      }
    </Paper>
  );
};
