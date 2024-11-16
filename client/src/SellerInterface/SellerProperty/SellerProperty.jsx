import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import SideNavbar from "../SideNavbar/SideNavbar";
import SellerHeader from "../SellerHeader/SellerHeader";

const SellerProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  // Function to fetch properties from the backend
  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3005/property/getProperty");
      setProperties(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Function to delete a property
  const deleteProperty = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:3005/property/deleteProperty/${id}`);
        alert("Property deleted successfully");
        fetchProperties(); // Refresh the properties list
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete the property");
      }
    }
  };

  // Define columns for the data grid
  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          onClick={() => deleteProperty(params.row._id)}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "propertyName",
      headerName: "Property Name",
      width: 200,
    },
    { field: "propertyType", headerName: "Type", width: 150 },
    { field: "city", headerName: "City", width: 130 },
    { field: "price", headerName: "Price ($)", width: 120 },
    { field: "areaSize", headerName: "Area (sqft)", width: 120 },
    { field: "bedrooms", headerName: "Bedrooms", width: 110 },
    { field: "bathrooms", headerName: "Bathrooms", width: 110 },
  ];

  return (
    <>
      <SellerHeader />
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "5rem" }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Manage Properties
          </Typography>
          <Paper sx={{ height: 500, width: "100%", overflow: "hidden" }}>
            <DataGrid
              rows={properties}
              columns={columns}
              getRowId={(row) => row._id}
              loading={loading}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 20]}
              sx={{ border: 0 }}
              checkboxSelection
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default SellerProperty;
