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
  return (
    <Paper
      sx={{
        background: white,
        color: darkBlue,
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
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
          padding: "0 20px 0 20px",
        }}
      >
        {" "}
        <h2
          style={{
            fontSize: "34px",
            color: darkBlue,
            lineHeight: "34px",
          }}
        >
          {props.item.title}
        </h2>
        <h3 style={{ fontWeight: 100, color: darkBlue }}>
          {props.item.announcementDate}
        </h3>
      </span>
      <img
        src={props.item.image.publicUrl}
        alt="My Image"
        placeholder="blurred"
        width="auto"
        height="400px"
        style={{
          objectFit: "contain",
        }}
      />
      <h3
        style={{ textAlign: "center", color: "darkslategray", height: "50px" }}
      >
        {props.item.summary}
      </h3>
      <p
        style={{ color: "darkslategray", textAlign: "center", height: "250px" }}
      >
        {props.item.description.description}
      </p>

      <a href={props.item.linkOne}>See More</a>
      <a href={props.item.linkTwo}>View Social Media</a>
    </Paper>
  );
};
