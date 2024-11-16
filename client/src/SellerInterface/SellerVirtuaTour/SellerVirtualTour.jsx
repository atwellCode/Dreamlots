import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  IconButton,
  TextField,
} from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SideNavbar from "../SideNavbar/SideNavbar";
import SellerHeader from "../SellerHeader/SellerHeader";

function SellerVirtualTour() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [tourReady, setTourReady] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    setTourReady(true);
  };

  return (
    <>
      {/* Header Component */}
      <SellerHeader />
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } ,paddingTop:"5rem"}}>
        {/* Side Navigation */}
        <SideNavbar />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 5,
            paddingTop: { xs: "2rem", md: "5rem" },
            overflowX: "hidden",
          }}
        >
          <Container maxWidth="lg">
            {/* Main Heading */}
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Virtual Tour
            </Typography>

            {/* Instructions Section */}
            <Box sx={{ marginTop: "3rem" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "1rem", fontSize: { xs: "1.5rem", md: "2rem" } }}
              >
                Instructions to make a virtual tour:
              </Typography>

              {/* Instructions List */}
              {[
                "Select high-quality images for your virtual tour.",
                "Ensure your images have a 360-degree view for the best experience.",
                "Upload images in the correct format to avoid quality loss.",
                "Use descriptive labels for each scene to guide viewers.",
                "Review your virtual tour before publishing to fix any errors.",
                "Publish the tour and share the link with your audience!",
              ].map((instruction, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  paragraph
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  {index + 1}. {instruction}
                </Typography>
              ))}
            </Box>

            {/* File Upload Box */}
            <Paper
              sx={{
                border: "1px dotted gray",
                padding: "2rem",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3rem",
                backgroundColor: "#f5f5f5",
              }}
              elevation={3}
            >
              <IconButton sx={{ mb: 2 }}>
                <ViewInArIcon sx={{ fontSize: "3rem", color: "#1976d2" }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", textAlign: "center" }}
              >
                Drag & drop your images here or click to upload
              </Typography>
              <TextField
                type="file"
                inputProps={{ multiple: true }}
                onChange={handleFileUpload}
                sx={{
                  display: "block",
                  width: "100%",
                  marginBottom: "1rem",
                }}
              />
              {/* Make Tour Button */}
              <Button
                variant="contained"
                color="primary"
                disabled={!uploadedFiles.length}
                sx={{
                  marginTop: "1rem",
                  padding: "0.5rem 2rem",
                  borderRadius: "25px",
                  backgroundColor: "#1976d2",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                Make Tour
              </Button>
            </Paper>

            {/* Virtual Tour Preview Section */}
            {tourReady && (
              <Paper
                sx={{
                  marginTop: "4rem",
                  padding: "2rem",
                  borderRadius: "10px",
                  backgroundColor: "#e3f2fd",
                }}
                elevation={3}
              >
                <Typography variant="h5" align="center" gutterBottom>
                  Your Virtual Tour is Ready!
                </Typography>
                {/* Placeholder for Virtual Tour Content */}
                <Box
                  sx={{
                    minHeight: "200px",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Typography variant="body1">[Virtual Tour Preview]</Typography>
                </Box>
                {/* Download Button */}
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    marginTop: "2rem",
                    padding: "0.5rem 2rem",
                    borderRadius: "25px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Download
                </Button>
              </Paper>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default SellerVirtualTour;
