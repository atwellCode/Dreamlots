import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import SideNavbar from "../SideNavbar/SideNavbar";
import SellerHeader from "../SellerHeader/SellerHeader";
import { useNavigate } from "react-router-dom";

function SellerLogout() {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear any authentication tokens or session data if necessary
    // Perform any logout logic here if needed
    navigate('/'); // Redirect to the homepage
  };

  return (
    <>
      {/* Header Component */}
      <SellerHeader />

      <Box sx={{ display: "flex" }}>
        {/* Side Navigation */}
        <SideNavbar />

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            paddingTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={4}
              sx={{
                padding: "3rem",
                borderRadius: "15px",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Are you sure you want to logout?
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
                You will be redirected to the homepage.
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "#2C387E",
                  "&:hover": { backgroundColor: "#d32f2f" },
                  padding: "0.5rem 2rem",
                  borderRadius: "25px",
                }}
              >
                Logout
              </Button>
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default SellerLogout;
