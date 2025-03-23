import * as React from "react";
import { Grid, Button, Box, Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HOME_CONTENT } from "../../../constants/content/home";

import * as Styles from "./styles";

export const HomeHero = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={Styles.mainHeroContainer}>
      <Grid sx={Styles.heroImageOpacityStyle} container spacing={0}>
        <Grid item xs={12} sx={Styles.flexColSpaceAround}>
        <Container width="100%" sx={Styles.heroBtnsContainer}>
            <Button variant="contained" sx={Styles.heroHumanitarianBtn}>
              {HOME_CONTENT[language].humanitarianBtn}
            </Button>
            {/* {!phoneSize && (
              <Box>
                <img src={"pfu.png"} height={200} width={200} />
              </Box>
            )} */}
          </Container>
          <Box paddingLeft={"20px"}>
            <Box
              sx={
                phoneSize
                  ? Styles.heroTextContainerSm
                  : Styles.heroTextContainerLg
              }
            >
              {HOME_CONTENT[language].heroWelcome}{' '}{HOME_CONTENT[language].churchName}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
