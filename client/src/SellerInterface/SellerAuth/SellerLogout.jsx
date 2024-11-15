import React from "react";
import { Box, Typography, Drawer } from "@mui/material";
import SideNavbar from "../SideNavbar/SideNavbar";

function SellerLogout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar component */}
      <SideNavbar />

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">This is the seller Logout page</Typography>
      </Box>
    </Box>
  );
}

export default SellerLogout;
