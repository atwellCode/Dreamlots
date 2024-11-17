import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Pagination,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PoolIcon from "@mui/icons-material/Pool";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SecurityIcon from "@mui/icons-material/Security";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WaterIcon from "@mui/icons-material/Opacity";
import AdminSideNav from "../AdminSideNav.jsx/AdminSideNav";
import AdminHeader from "../AdminHeader/AdminHeader";
import axios from "axios";

function AdminPropertyPage() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Fetch properties from the backend
  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3005/property/getProperty");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Delete property by ID
  const handleDeleteProperty = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:3005/property/deleteProperty/${propertyId}`);
      fetchProperties(); // Refresh the property list after deletion
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Pagination logic
  const handleChangePage = (event, newPage) => setCurrentPage(newPage);

  const paginatedProperties = properties.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Amenities rendering helper function
  const renderAmenities = (amenities) => {
    const amenityIcons = [];
    if (amenities.swimmingPool) amenityIcons.push(<PoolIcon key="pool" />);
    if (amenities.gym) amenityIcons.push(<FitnessCenterIcon key="gym" />);
    if (amenities.security) amenityIcons.push(<SecurityIcon key="security" />);
    if (amenities.parking) amenityIcons.push(<LocalParkingIcon key="parking" />);
    if (amenities.electricity) amenityIcons.push(<FlashOnIcon key="electricity" />);
    if (amenities.waterSupply) amenityIcons.push(<WaterIcon key="water" />);
    return amenityIcons.length > 0 ? amenityIcons : "None";
  };

  return (
    <>
      <AdminHeader />
      <Box sx={{ display: "flex" }}>
        <AdminSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "5rem" }}>
          
          {/* Total Properties Card */}
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ display: "flex", alignItems: "center", padding: "1rem" }}>
                <Avatar sx={{ bgcolor: "primary.main", marginRight: "1rem" }}>
                  <AccountBalanceIcon />
                </Avatar>
                <CardContent>
                  <Typography variant="h6">Total Properties</Typography>
                  <Typography variant="h4">{properties.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Property Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Property Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Street</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Bedrooms</TableCell>
                  <TableCell>Bathrooms</TableCell>
                  <TableCell>Floors</TableCell>
                  <TableCell>Amenities</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedProperties.map((property) => (
                  <TableRow key={property._id}>
                    <TableCell>{property._id}</TableCell>
                    <TableCell>
                      <Tooltip title="Delete Property">
                        <IconButton
                          onClick={() => handleDeleteProperty(property._id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell>{property.propertyName}</TableCell>
                    <TableCell>{property.propertyType}</TableCell>
                    <TableCell>{property.propertyLocation}</TableCell>
                    <TableCell>{property.city}</TableCell>
                    <TableCell>{property.street}</TableCell>
                    <TableCell>{property.address}</TableCell>
                    <TableCell>${property.price}</TableCell>
                    <TableCell>{property.areaSize} sq ft</TableCell>
                    <TableCell>{property.bedrooms}</TableCell>
                    <TableCell>{property.bathrooms}</TableCell>
                    <TableCell>{property.floors}</TableCell>
                    <TableCell>{renderAmenities(property.amenities)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              count={Math.ceil(properties.length / rowsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              sx={{ marginTop: 2 }}
            />
          </TableContainer>

          {/* Complaints Section */}
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Property Complaints
            </Typography>
            {paginatedProperties.map((property) => (
              <Card key={property._id} sx={{ marginBottom: "1rem" }}>
                <CardContent>
                  <Typography variant="h6">Property: {property.propertyName}</Typography>
                  <Typography variant="body2">
                    Complaint: Issue with {property.propertyName} not as described.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Resolve
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AdminPropertyPage;
