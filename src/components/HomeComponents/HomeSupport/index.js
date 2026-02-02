import * as React from "react";
import { Grid, Button, Box, Typography, Stack, Tooltip } from "@mui/material";

import { HOME_CONTENT } from "../../../constants/content/home";
import { GENERAL_CONTENT } from "../../../constants/content/general";
import * as styles from "../../index.module.css";
import * as Styled from "./styles";
import { StaticImage } from "gatsby-plugin-image";
import {
  darkBlue,
  steelBlue,
  whitesmoke,
  white,
  lightYellow,
  darkYellow,
  lightBlue,
} from "../../../constants/colors";

export const SupportParish = ({ language, phoneSize }) => {
  const [hoverUACCNJ, setHoverUACCNJ] = React.useState(false);
  const [hoverUCAP, setHoverUCAP] = React.useState(false);
  const [hoverUCC, setHoverUCC] = React.useState(false);
  const [hoverDyvensvit, setHoverDyvensvit] = React.useState(false);

  return (
    <Grid
      container
      // gap={1}
      style={{
        margin: `0 auto 0 auto`,
        maxWidth: `var(--size-content)`,
        minHeight: 120,
        display: "flex",
        justifyContent: "space-evenly",
        // padding: 10,
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={Styled.flexColSpaceAround}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          padding={2}
          // gap={5}
          sx={{
            background: hoverUACCNJ ? darkBlue : "transparent",
          }}
        >
          {/* <Button variant="outlined">{HOME_CONTENT[language].supportParishBtn}</Button> */}
          <Tooltip title={GENERAL_CONTENT[language].UACCNJ}>
            <a
              href="https://uaccnj.org/"
              target="_blank"
              onMouseLeave={() => setHoverUACCNJ(false)}
              onMouseEnter={() => setHoverUACCNJ(true)}
              style={{
                background: white,
                padding: "15px",
                opacity: hoverUACCNJ ? 0.98 : 1,
                border: "1px solid whitesmoke",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StaticImage
                src="../../../images/uaccnj-logo.png"
                width="120px"
                height="100px"
              />
            </a>
          </Tooltip>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={Styled.flexColSpaceAround}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          padding={2}
          // gap={5}
          sx={{
            background: hoverUCC ? darkBlue : "transparent",
          }}
        >
          <Tooltip title={GENERAL_CONTENT[language].UGCC}>
            <a
              href={GENERAL_CONTENT[language].ugcc_url}
              target="_blank"
              onMouseLeave={() => setHoverUCC(false)}
              onMouseEnter={() => setHoverUCC(true)}
              style={{
                background: white,
                padding: "15px",
                opacity: hoverUCC ? 0.98 : 1,
                border: "1px solid whitesmoke",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <StaticImage
                  src="../../../images/logo-ugcc.png"
                  width="150px"
                  height="60px"
                />
                <Typography
                  fontWeight={600}
                  fontFamily={"cursive"}
                  fontSize={20}
                >
                  {GENERAL_CONTENT[language].UGCC_LABEL}
                </Typography>
              </Stack>
            </a>
          </Tooltip>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={Styled.flexColSpaceAround}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          padding={2}
          // gap={5}
          sx={{
            background: hoverUCAP ? darkBlue : "transparent",
          }}
        >
          <Tooltip title={GENERAL_CONTENT[language].UCAP}>
            <a
              href="https://ukrcatholic.org//"
              target="_blank"
              onMouseLeave={() => setHoverUCAP(false)}
              onMouseEnter={() => setHoverUCAP(true)}
              style={{
                background: white,
                padding: "15px",
                opacity: hoverUCAP ? 0.98 : 1,
                border: "1px solid whitesmoke",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <StaticImage
                  src="../../../images/ucap.png"
                  width="80px"
                  height="50px"
                />
                <Typography
                  fontWeight={600}
                  fontFamily={"cursive"}
                  fontSize={20}
                >
                  {GENERAL_CONTENT[language].UCAP_LABEL}
                </Typography>
              </Stack>
            </a>
          </Tooltip>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={Styled.flexColSpaceAround}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          padding={2}
          sx={{
            background: hoverDyvensvit ? darkBlue : "transparent",
          }}
        >
          <Tooltip title={GENERAL_CONTENT[language].DYVENSVIT}>
            <a
              href="https://dyvensvit.org/"
              target="_blank"
              onMouseLeave={() => setHoverDyvensvit(false)}
              onMouseEnter={() => setHoverDyvensvit(true)}
              style={{
                background: white,
                padding: "15px",
                opacity: hoverDyvensvit ? 0.98 : 1,
                border: "1px solid whitesmoke",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <StaticImage
                  src="../../../images/dyvensvit"
                  width="120px"
                  height="50px"
                  objectFit="contain"
                />
                <Typography
                  fontWeight={600}
                  fontFamily={"cursive"}
                  fontSize={20}
                >
                  {GENERAL_CONTENT[language].DYVENSVIT_LABEL}
                </Typography>
              </Stack>
            </a>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
};
