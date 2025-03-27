import React from "react"
import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

import * as styles from "../index.module.css"
import { Typography, Box } from "@mui/material";
import { steelBlue, white } from "../../constants/colors";

const Footer = () => (
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
      justifyContent="center"
      alignContent="center"
      paddingTop={2}
    >
      <Typography>
        Copyright © 2025 St. John the Baptist Ukrainian Catholic Church
        Whippany, NJ 07981
      </Typography>
      {/* <Facebook fontSize="small" className={styles.iconLG} /> */}
    </Box>
  </footer>
);

export { Footer }