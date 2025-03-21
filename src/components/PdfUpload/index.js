import React, { useState } from "react";
import { Button, Input, Typography, Box } from "@mui/material";

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("File submitted:", file);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Upload a File
        </Typography>

        <Input
          type="file"
          onChange={handleFileChange}
          inputProps={{ accept: ".jpg,.png,.pdf" }} // You can modify the accepted file types
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "10px", maxWidth: "100px" }}
        >
          Upload
        </Button>

        {file && (
          <Typography variant="body2" style={{ marginTop: "10px" }}>
            Selected file: {file.name}
          </Typography>
        )}
      </Box>
    </form>
  );
};

export { FileUploadForm };
