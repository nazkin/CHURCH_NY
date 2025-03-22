import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQ_CONTENT } from '../../constants/content/faq';

export function FAQ({language}) {
    return (
        <div>
            <Accordion width="100%">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{FAQ_CONTENT[language].q1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {FAQ_CONTENT[language].a1}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}