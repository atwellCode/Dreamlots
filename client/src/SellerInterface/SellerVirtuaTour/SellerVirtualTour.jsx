import React from "react";
import { Box, Typography, Drawer } from "@mui/material";
import SideNavbar from "../SideNavbar/SideNavbar";
import Header from "../Header/Header";
function SellerVirtualTour() {
  return (
    <>
    <Header/>
    <Box sx={{ display: "flex" }}>
      <SideNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:"5rem"}}>
        <Typography variant="h4">This is the Virtual tour Page</Typography>
      </Box>
    </Box>
    </>
  );
}

export default SellerVirtualTour;
