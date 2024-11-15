import React from "react";
import { Box, Typography, Drawer } from "@mui/material";
import SideNavbar from "../SideNavbar/SideNavbar";

function SellerChat() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">This is the seller chat Page</Typography>
      </Box>
    </Box>
  );
}

export default SellerChat;
