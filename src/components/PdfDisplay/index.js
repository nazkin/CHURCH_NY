import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { steelBlue } from "../../constants/colors";
import { GENERAL_CONTENT } from "../../constants/content/general";
import "./styles.css";

export const PdfDisplay = ({ pdfUrl, aspectRatio, language = "en" }) => {
  const containerStyle = {
    paddingBottom: aspectRatio || "100%", // Default to 1:1
    height: "400px",
  };

  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    };
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }} justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          href={pdfUrl}
          download
          sx={{ backgroundColor: steelBlue, '&:hover': { backgroundColor: steelBlue } }}
        >
          {GENERAL_CONTENT[language].download}
        </Button>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{ backgroundColor: steelBlue, '&:hover': { backgroundColor: steelBlue } }}
        >
          {GENERAL_CONTENT[language].print}
        </Button>
      </Stack>
      <div className="pdf-container" style={containerStyle}>
        <embed className="pdf-embed" src={pdfUrl} type="application/pdf" />
      </div>
    </Box>
  );
};