import * as React from "react";
import './styles.css';

export const PdfDisplay = ({ pdfUrl, aspectRatio }) => {
    const containerStyle = {
      paddingBottom: aspectRatio || '100%', // Default to 1:1
    };
  
    return (
      <div className="pdf-container" style={containerStyle}>
        <embed className="pdf-embed" src={pdfUrl} type="application/pdf" />
      </div>
    );
  };