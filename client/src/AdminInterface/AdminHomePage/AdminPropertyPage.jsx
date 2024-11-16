import React from "react";
import { Box, Typography, Drawer } from "@mui/material";
import AdminSideNav from "../AdminSideNav.jsx/AdminSideNav";
import AdminHeader from "../AdminHeader/AdminHeader";

function AdminPropertyPage() {
  return (
    <>
    <AdminHeader/>
    <Box sx={{ display: "flex" }}>
      <AdminSideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 , paddingTop:"5rem"}}>
        <Typography variant="h4">This is the admin property Page</Typography>
      </Box>
    </Box>
    </>
  );
}

export default AdminPropertyPage;
