import * as React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Styled from "./styles";

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
        <Stack
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box width="100%" display="flex" justifyContent={"space-between"} alignItems={"center"}>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].saturday}
            </Typography>
            <Typography sx={Styled.schedTableText}>5:00 P.M.</Typography>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].en}
            </Typography>
          </Box>
          <Box width="100%" display="flex" justifyContent={"space-between"} alignItems={"center"}>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].sunday}
            </Typography>
            <Typography sx={Styled.schedTableText}>8:30 A.M. and 10:00 A.M. </Typography>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].ua}
            </Typography>
          </Box>
          <Box width="100%" display="flex" justifyContent={"space-between"} alignItems={"center"}>
          <Box width="33%" display="flex" justifyContent={"right"} alignItems={"center"}>
            <Typography sx={Styled.schedTableText}>
              {HOME_CONTENT[language].holyDays}
            </Typography>
            </Box>
            <Box width="33%" display="flex" justifyContent={"center"} alignItems={"center"}>
            <Typography sx={Styled.schedTableText}>9:00 A.M. and 7:00 P.M. </Typography>
            </Box>
            <Box width="33%" display="flex" justifyContent={"left"} alignItems={"center"}>
            <Typography>{'           '}</Typography>
            </Box>
          </Box>
          <Box width="100%" display="flex" justifyContent={"space-between"} alignItems={"center"}>
            <Box width="33%" display="flex" justifyContent={"right"} alignItems={"center"}>
              <Typography sx={Styled.schedTableText}>
                {HOME_CONTENT[language].specialIntentions}
              </Typography>
            </Box>
            <Box width="33%">
              <Typography sx={Styled.schedTableText}>9:00 A.M. and/or 7:00 P.M. </Typography>
            </Box>
            <Box width="33%">
              <Typography>{'           '}</Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};
