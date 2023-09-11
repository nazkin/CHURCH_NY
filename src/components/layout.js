/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Instagram, Facebook, Twitter, Email } from '@mui/icons-material';

import Header from "./header"
import "./layout.css";
import * as styles from "./index.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          background: "#159bf3",
          height: 75,
          textAlign: "center"
        }}
      >

        <span>
          <Instagram fontSize="large" className={styles.iconLG} />
          <Facebook fontSize="large" className={styles.iconLG} />
          <Twitter fontSize="large" className={styles.iconLG} />
          <Email fontSize="large" className={styles.iconLG} />
        </span>

      </footer>
    </>
  )
}

export default Layout
