import * as React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Styled from "./styles";
import { GENERAL_CONTENT } from "../../../constants/content/general";


export const LiturgyScheduleSmall = ({ language }) => {
  const theme = useTheme();

  return (
    <Grid container styles={Styled.homeScheduleContainer} paddingTop={2}>
      <Box sx={Styled.homeSchedBackgroundSection}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: "52px",
              textAlign: "center",
              color: "slategrey",
              fontWeight: 200,
            }}
          >
            {HOME_CONTENT[language].liturgySchedTitle}
          </Typography>
        </Box>
        <Stack
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
          paddingTop={2}
        >
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                {HOME_CONTENT[language].saturday} ({HOME_CONTENT[language].en})
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>5:00 P.M.</Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                {HOME_CONTENT[language].sunday} ({HOME_CONTENT[language].ua})
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                8:30 A.M. {GENERAL_CONTENT[language].and} 10:00 A.M.{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                {HOME_CONTENT[language].holyDays}
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                9:00 A.M. {GENERAL_CONTENT[language].and} 7:00 P.M.{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                {HOME_CONTENT[language].specialIntentions}
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableTextSmall}>
                9:00 A.M. {GENERAL_CONTENT[language].and_or} 7:00 P.M.{" "}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}


export const LiturgyScheduleFull = ({ language }) => {
  const theme = useTheme();

  return (
    <Grid container styles={Styled.homeScheduleContainer} paddingTop={2}>
      <Box sx={Styled.homeSchedBackgroundSection}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          pb={5}
        >
          <Typography sx={Styled.homeSchedText}>
            {HOME_CONTENT[language].liturgySchedTitle}
          </Typography>
        </Box>
        <Stack
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
          paddingTop={2}
        >
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                {HOME_CONTENT[language].saturday} ({HOME_CONTENT[language].en})
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>5:00 P.M.</Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                {HOME_CONTENT[language].sunday} ({HOME_CONTENT[language].ua})
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                8:30 A.M. {GENERAL_CONTENT[language].and} 10:00 A.M.{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingBottom={2}
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                {HOME_CONTENT[language].holyDays}
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                9:00 A.M. {GENERAL_CONTENT[language].and} 7:00 P.M.{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            paddingLeft={2}
            paddingRight={2}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"top"}
          >
            <Box
              width="45%"
              padding={0}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                {HOME_CONTENT[language].specialIntentions}
              </Typography>
            </Box>
            <Box
              width="55%"
              padding={0}
              display="flex"
              justifyContent={"right"}
              alignItems={"top"}
            >
              <Typography sx={Styled.schedTableText}>
                9:00 A.M. {GENERAL_CONTENT[language].and_or} 7:00 P.M.{" "}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}


export const HomeScheduleSection = ({ language }) => {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  return <>
    {phoneSize ? <LiturgyScheduleSmall language={language} /> : <LiturgyScheduleFull language={language} />}
  </>
};
