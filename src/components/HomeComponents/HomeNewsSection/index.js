import * as React from "react";
import {
  Grid,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";
import * as styles from "../../index.module.css";
import background from "../../../../public/back.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const HomeNewsSection = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alt="News poster or slide"
      style={{
        width: "100%",
        minHeight: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box px={2}>
        <ImageList
          sx={{
            width: "100%",
            minHeight: 400,
            backgroundImage: `url(${background})`,
            margin: 0,
          }}
        >
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader
              style={{
                fontSize: "30px",
                background: "whitesmoke",
                textAlign: "center",
              }}
              component="div"
            >
              {HOME_CONTENT[language].easterCeleb}
            </ListSubheader>
          </ImageListItem>
          {["c1.jpg", "c2.jpg"].map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
              />
              <ImageListItemBar
                title="Write a general title for photo"
                subtitle="Add a photo description"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
};
