import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Typography, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export const Announcement = (props) => {
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
      name: "The Best of the Best of them All",
      description:
        "Come support your church and do a good deed once in a while. We can talk God and stay away from politics. It will be good for you.",
      image: "c3.jpg",
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ color: "slategray" }}>
          Announcements
        </Typography>
      </Box>
      <Carousel
        animation="fade"
        interval="8000"
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
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={props.item.image}
        alt="My Image"
        placeholder="blurred"
        width="60%"
        height="300px"
      />

      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">See More</Button>
    </Paper>
  );
};
