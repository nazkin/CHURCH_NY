import * as React from "react";
import { Link } from "gatsby";
import Button from "@mui/material/Button";
import { GENERAL_CONTENT } from "../../constants/content/general";


const SupportOurChurch = ({language}) => {

    return (
        <Link to='/support'>
          <Button
            style={{
              color: "gold",
              border: "2px solid gold",
              margin: "0 0px 0 0px",
            }}
            variant="filled"
            size="small"
          >
            {GENERAL_CONTENT[language].support}
          </Button>
          </Link>
    );
}

export { SupportOurChurch };