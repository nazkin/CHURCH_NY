import * as React from "react";
import { Grid, Button } from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";
import * as styles from "../../index.module.css";
import * as Styled from "./styles";

export const SupportParish = ({ language }) => {
  return (
    <Grid
      container
      spacing={1}
      style={{
        margin: `0 auto 40px auto`,
        maxWidth: `var(--size-content)`,
        minHeight: 300,
      }}
    >
      <Grid item sm={12} sx={Styled.flexColSpaceAround}>
        <span className={styles.headerOne}>
          {HOME_CONTENT[language].supportTitle}
        </span>
        <p style={{ textAlign: "center" }}>{HOME_CONTENT[language].history}</p>
        <Button variant="outlined">{HOME_CONTENT[language].supportBtn}</Button>
      </Grid>
    </Grid>
  );
};
