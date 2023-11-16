import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

import Header from "./header";
import "./layout.css";
import * as styles from "./index.module.css";
import { Children, cloneElement, useState } from "react";
import { LANGUAGE_ID } from "../constants";

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
const Layout = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGE_ID.en);

  const changeLanguage = () => {
    const updatedLang =
      language === LANGUAGE_ID.en ? LANGUAGE_ID.ua : LANGUAGE_ID.en;

    setLanguage(updatedLang);
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
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        language={language}
        changeLanguage={changeLanguage}
      />
      <main>
        {Children.map(children, (child) => cloneElement(child, { language }))}
      </main>
    </>
  );
};

export default Layout;