import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Styled from "./styles";
import background from "../../../../public/back.png";

export const HomeScheduleSection = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alt="News poster or slide"
      styles={Styled.homeScheduleContainer}
    >
      {/* <h1 >Schedule</h1> */}
      <Box sx={Styled.homeSchedBackgroundSection}>
        <Typography sx={Styled.homeSchedText}>
          {HOME_CONTENT[language].liturgySchedTitle}
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box style={{ width: "33%" }}>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].saturday}
            </Typography>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].sunday}
            </Typography>
          </Box>
          <Box style={{ width: "33%" }}>
            <Typography sx={Styled.schedTableText}>5:00pm</Typography>
            <Typography sx={Styled.schedTableText}>8:45am, 11:00am </Typography>
          </Box>
          <Box style={{ width: "33%" }}>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].en}
            </Typography>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].ua}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={Styled.centerCenter}>
        <p style={{ textAlign: "center" }}>{HOME_CONTENT[language].summary}</p>
      </Box>
    </Grid>
  );
};
