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

  const getFetchableUrl = (url) => {
    if (url && url.startsWith('//')) {
      return `https:${url}`;
    }
    return url;
  };

  const handleAction = async (actionType) => {
    const fullUrl = getFetchableUrl(pdfUrl);
    try {
      const response = await fetch(fullUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      if (actionType === 'download') {
        const link = document.createElement('a');
        link.href = blobUrl;
        const filename = fullUrl.split('/').pop() || 'document.pdf';
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
      } else if (actionType === 'print') {
        const iframe = document.createElement("iframe");
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        iframe.src = blobUrl;
        document.body.appendChild(iframe);
        iframe.onload = () => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
          // Revoke slightly after printing dialogue triggers
          setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
        };
      }
    } catch (error) {
      console.error("Failed to process PDF for", actionType, error);
      // Fallback: simply open in new tab
      window.open(fullUrl, '_blank');
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }} justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => handleAction('download')}
          sx={{ backgroundColor: steelBlue, '&:hover': { backgroundColor: steelBlue } }}
        >
          {GENERAL_CONTENT[language].download}
        </Button>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={() => handleAction('print')}
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