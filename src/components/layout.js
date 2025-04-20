import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

import Header from "./header";
import "./layout.css";
import * as styles from "./index.module.css";
import { Children, cloneElement, useState } from "react";
import { LANGUAGE_ID } from "../constants";
import {
  Box,
} from '@mui/material'

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
const Layout = ({ children, hasScroll = true }) => {
  const [language, setLanguage] = useState(LANGUAGE_ID.en);

  React.useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (!storedLanguage) {
      localStorage.setItem("language", LANGUAGE_ID.en);
      setLanguage(LANGUAGE_ID.en);
    }
    setLanguage(storedLanguage);
  }, []);

  const changeLanguage = () => {
    const updatedLang =
      language === LANGUAGE_ID.en ? LANGUAGE_ID.ua : LANGUAGE_ID.en;

    setLanguage(updatedLang);
    localStorage.setItem("language", updatedLang);
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box
      width="100%"
      height="100%"
      sx={{
        background: "whitesmoke",
        overflowY: !hasScroll && "hidden",
        overflowX: "hidden",
        padding: 0,
      }}
    >
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        language={language}
        changeLanguage={changeLanguage}
      />
      <Box>
        {Children.map(children, (child) => cloneElement(child, { language }))}
      </Box>
    </Box>
  );
};

export default Layout;