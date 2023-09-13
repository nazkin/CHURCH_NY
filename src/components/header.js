import * as React from "react"
import { Link } from "gatsby"
import { samplePageLinks } from '../constants'
import * as styles from "./index.module.css"

import { Instagram, Facebook, Twitter, Email } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header = ({ siteTitle }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CHURCH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              anchor={"left"}
              open={anchorElNav}
              onClose={() => setAnchorElNav(false)}

            >
              <div style={{ minWidth: 250, height: "100%" }}>
                <div style={{ background: '#159bf3', height: 40, paddingLeft: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <IconButton
                    size="small"
                    aria-label="close drawer"
                    aria-controls="app-drawer"
                    aria-haspopup="true"
                    style={{ color: "white" }}
                    onClick={() => setAnchorElNav(false)}
                  >
                    <CloseIcon />
                  </IconButton>

                </div>
                <Divider />
                <List>
                  {samplePageLinks.map((obj, index) => (
                    <Link to={obj.url} style={{ textDecoration: "none" }}>
                      <ListItem key={obj.url} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <ChevronLeftIcon />
                          </ListItemIcon>
                          <ListItemText style={{ color: "#159bf3" }} primary={obj.text} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CHURCH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {samplePageLinks.map((obj) => (
              <Link to={obj.url} className={styles.link} activeClassName={styles.linkActive}>
                <Button
                  key={obj.url}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {obj.text}
                </Button>
              </Link>
            ))}
          </Box>
          <span>
            <Instagram className={styles.iconSM} />
            <Facebook className={styles.iconSM} />
            <Twitter className={styles.iconSM} />
            <Email className={styles.iconSM} />
          </span>
          <Button style={{ color: "gold", border: "2px solid gold", marginLeft: 30 }} variant="filled" size="small">Donations</Button>

        </Toolbar>

      </Container>
    </AppBar>
  );
}
export default Header;

