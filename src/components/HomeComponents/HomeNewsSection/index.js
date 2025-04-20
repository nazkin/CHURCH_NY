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

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageCarousel from "../../ImageCarousel";

export const HomeNewsSection = ({ language, imageSelector }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alt="News poster or slide"
      px={2}
      style={{
        width: "100%",
        minHeight: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageCarousel language={language} imageSelector={imageSelector} />
    </Grid>
  );
};
