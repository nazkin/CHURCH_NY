import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography, Box } from "@mui/material";
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
          id
          announcementDate
          description {
            description
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
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;`,
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
          <Item key={i} item={item} />
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
        // padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        borderRadius: "1.5%",
        border: "1px solid white",
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
          padding: "0 10px 0 10px",
        }}
      >
        {" "}
        {props.item.title ?
        <h2
          style={{
            fontSize: "24px",
            color: darkBlue,
            lineHeight: "24px",
          }}
        >
          {props.item.title}
        </h2> : ' '}
        {props.item.announcementDate ? 
        <h3 style={{ fontWeight: 100, color: darkBlue }}>
          {props.item.announcementDate}
        </h3> : ' '}
      </span>
      {props.item.image.publicUrl ? <img
        src={props.item.image.publicUrl}
        alt="My Image"
        placeholder="blurred"
        width="auto"
        height="300px"
        style={{
          objectFit: "contain",
        }}
      /> : null}
      {props.item.summary ?
      <h3
        style={{ textAlign: "center", color: "darkslategray" }}
      >
        {props.item.summary}
      </h3> : null }
      {props.item.description && !phoneSize ? 
      <p
        style={{ color: "darkslategray", textAlign: "center", height: "250px" }}
      >
        {props.item.description.description}
      </p> : null}

      {props.item.linkOne ? 
        <a href={props.item.linkOne}>See More</a> : null }
      {props.item.linkTwo ? <a href={props.item.linkTwo}>View Social Media</a> : null}
    </Paper>
  );
};
