import React from "react"
import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

import * as styles from "../index.module.css"
import { Typography, Box } from "@mui/material";
import { steelBlue, white } from "../../constants/colors";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        background: steelBlue,
        color: white,
        height: 50,
        textAlign: "center",
      }}
    >
      <Box
        display="flex"
        justifyContent={phoneSize ? "center" : "space-evenly"}
        alignContent="center"
        paddingTop={2}
      >
        <Typography fontSize={12}>
          Copyright © 2026 St. John the Baptist Ukrainian Catholic Church
          Whippany, NJ 07981
        </Typography>
        {/* {!phoneSize && (
          <Typography fontSize={12}>Created By: Nazar Kinash</Typography>
        )} */}
        {/* <Facebook fontSize="small" className={styles.iconLG} /> */}
      </Box>
    </footer>
  );
};

export { Footer }