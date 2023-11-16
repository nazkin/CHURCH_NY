import React from "react"
import { Instagram, Facebook, Twitter, Email } from "@mui/icons-material";

import * as styles from "../index.module.css"

const Footer = () => (
    <footer
        style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            background: "#159bf3",
            height: 75,
            textAlign: "center",
        }}
    >
        <span>
            <Instagram fontSize="large" className={styles.iconLG} />
            <Facebook fontSize="large" className={styles.iconLG} />
            <Twitter fontSize="large" className={styles.iconLG} />
            <Email fontSize="large" className={styles.iconLG} />
        </span>
    </footer>
)

export { Footer }