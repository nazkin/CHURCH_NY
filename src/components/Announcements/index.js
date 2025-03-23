import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export const Announcement = ({language}) => {
  var items = [
    {
      name: "Event Super Awesome",
      description: "Come hang out with friends and family and eat good food",
      image: "c5.jpg",
    },
    {
      name: "Event Even Better",
      description:
        "Come enjoy Bible study and learn about the best way to enjoy",
      image: "c6.jpg",
    },
    {
      name: "Next Liturgy",
      description:
        "Saturday at 5PM, Sunday ay 8AM in Ukrainian and 10AM mixed Ukrainian and English",
      image: "c3.jpg",
    },
  ];

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
        {items.map((item, i) => (
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
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img
        src={props.item.image}
        alt="My Image"
        placeholder="blurred"
        width="60%"
        height="300px"
      />

      <Button className="CheckButton">See More</Button>
    </Paper>
  );
};
