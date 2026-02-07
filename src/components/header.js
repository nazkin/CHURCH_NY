import * as React from "react";
import { Link } from "gatsby";
import { samplePageLinks } from "../constants";
import * as styles from "./index.module.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LanguageSelector } from "./LanguageSelector";
import { GENERAL_CONTENT } from "../constants/content/general";
import { StaticImage } from "gatsby-plugin-image"
import { SupportOurChurch } from "./SupportOurChurch";
import { Facebook } from "@mui/icons-material";
import {
  darkBlue,
  steelBlue,
  white,
  lightYellow,
  darkYellow,
  lightBlue,
} from "../constants/colors";
import { Tooltip } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


const Header = ({ siteTitle, language, changeLanguage }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  const facebook = {
    text: {
      en: "FACEBOOK",
      ua: "FACEBOOK",
    }, url: "https://www.facebook.com/SJUCCNJ/"
  }
  const uaccnj = {
    text: {
      en: "UACCNJ",
      ua: "UACCNJ",
    }, url: "https://uaccnj.org"
  }
  const archeparchy = {
    text: {
      en: "ARCHEPARCHY OF PHILADELPHIA",
      ua: "АРХИЄПАРХІЯ ФІЛАДЕЛЬФІЇ",
    }, url: "https://ukrcatholic.org/"
  }
  const aid = {
    text: {
      en: "AID FOR UKRAINE",
      ua: "ДОПОМОГА УКРАЇНІ",
    }, url: "/aid"
  }
  const pageLinks = phoneSize ? [...samplePageLinks, aid, facebook, uaccnj, archeparchy] : samplePageLinks

  return (
    <AppBar
      position="fixed"
      sx={{ background: steelBlue, color: white, width: "100%" }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "left",
              alignItems: "center",
            }}
            style={{
              alignItems: "center",
              height: "100%",
              padding: 5,
            }}
          >
            <Box
              width="100%"
              height="100%"
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
            >
              <Tooltip title={GENERAL_CONTENT[language].home}>
                <Link
                  to="/"
                  className={styles.link}
                  activeClassName={styles.linkActive}
                >
                  <StaticImage
                    src="../images/church_icon_simple.png"
                    width="50"
                    height="50"
                  />
                </Link>
              </Tooltip>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setAnchorElNav(!anchorElNav)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"top"}
              open={anchorElNav}
              onClose={() => setAnchorElNav(false)}
            >
              <div
                style={{
                  padding: 0,
                  minHeight: 700,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    background: "steelblue",
                    height: 40,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    size="small"
                    aria-label="close drawer"
                    aria-controls="app-drawer"
                    aria-haspopup="true"
                    style={{ color: "white", marginLeft: 15 }}
                    onClick={() => setAnchorElNav(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <Divider />

                <List style={{ minHeight: 600 }}>
                  {pageLinks.map((obj, index) => (
                    <Link to={obj.url} style={{ textDecoration: "none" }}>
                      <ListItem key={obj.url} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronLeftIcon />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ color: "black" }}
                            primary={obj.text[language]}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {samplePageLinks.filter(obj => obj.url !== "/").map((obj) => (
              <Link
                to={obj.url}
                className={styles.link}
                activeClassName={styles.linkActive}
              >
                <Button
                  key={obj.url}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {obj.text[language]}
                </Button>
              </Link>
            ))}
          </Box>
          <Stack
            gap={0}
            direction={"row"}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {!phoneSize ? (
              <Stack
                direction="row"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <Tooltip title={GENERAL_CONTENT[language].UCAP}>
                  <a href="https://ukrcatholic.org//" target="_blank">
                    <StaticImage
                      src="../images/ucap.png"
                      width="25"
                      height="50"
                    />
                  </a>
                </Tooltip>
                <Tooltip title={GENERAL_CONTENT[language].UACCNJ}>
                  <a href="https://uaccnj.org/" target="_blank">
                    <StaticImage
                      src="../images/uaccnj-logo-no-name.png"
                      width="30"
                      height="30"
                    />
                  </a>
                </Tooltip>
              </Stack>
            ) : null}
            {!phoneSize ? (
              <a href="https://www.facebook.com/SJUCCNJ/" target="_blank">
                <Facebook fontSize="large" className={styles.iconLG} />
              </a>
            ) : null}
            <SupportOurChurch language={language} />
            <Box
              sx={{
                background: lightBlue,
                marginLeft: "10px",
                borderRadius: "20%",
              }}
            >
              <LanguageSelector
                language={language}
                changeLanguage={changeLanguage}
              />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;