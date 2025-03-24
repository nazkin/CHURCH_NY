import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { graphql, useStaticQuery } from "gatsby";

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
    <Container>
      <Carousel
        animation="fade"
        interval="3000"
        indicators={false}
        navButtonsAlwaysVisible={true}
        NextIcon={<NavigateNextIcon />}
        PrevIcon={<NavigateBeforeIcon />}
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
        background: "#f6f6f6",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>
        {" "}
        <h2>{props.item.title}</h2>
        <h5>{props.item.announcementDate}</h5>
      </span>
      <h3 style={{ textAlign: "center" }}>{props.item.summary}</h3>
      <p style={{ color: "slategrey" }}>{props.item.description.description}</p>
      <img
        src={props.item.image.publicUrl}
        alt="My Image"
        placeholder="blurred"
        width="60%"
        height="400px"
      />
      <a href={props.item.linkOne}>See More</a>
      <a href={props.item.linkTwo}>View Social Media</a>
    </Paper>
  );
};
