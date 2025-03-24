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
  white,
  lightYellow,
  darkYellow,
  lightBlue,
} from "../constants/colors";

const Header = ({ siteTitle, language, changeLanguage }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  return (
    <AppBar position="fixed" sx={{ background: darkBlue, color: white }}>
      <Container maxWidth="m">
        <Toolbar disableGutters>
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
              <StaticImage
                src="../images/church_icon_simple.png"
                width="50"
                height="50"
              />
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
                  borderBottom: "10px solid goldenrod",
                }}
              >
                <div
                  style={{
                    background: "#159bf3",
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
                  {samplePageLinks.map((obj, index) => (
                    <Link to={obj.url} style={{ textDecoration: "none" }}>
                      <ListItem key={obj.url} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronLeftIcon />
                          </ListItemIcon>
                          <ListItemText
                            style={{ color: "#159bf3" }}
                            primary={obj.text[language]}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 100,
                      fontSize: 12,
                      letterSpacing: "-0.1rem",
                      color: "darkblue",
                      background: "gold",
                      textDecoration: "none",
                      textWrap: "wrap",
                      textAlign: "center",
                      padding: 2,
                    }}
                  >
                    {GENERAL_CONTENT[language].name}
                  </Typography>
                </Box>
              </div>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {samplePageLinks.map((obj) => (
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
            <Facebook fontSize="large" className={styles.iconLG} />
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