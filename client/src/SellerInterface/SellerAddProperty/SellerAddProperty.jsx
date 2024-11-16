import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, FormControlLabel, Checkbox, FormGroup, Paper, InputAdornment, Snackbar } from "@mui/material";
import { Alert } from '@mui/lab';
import axios from "axios";
import SellerHeader from "../SellerHeader/SellerHeader";
import SideNavbar from "../SideNavbar/SideNavbar";
import AttachFileIcon from '@mui/icons-material/AttachFile';

function SellerAddProperty() {
  // State to hold form data and error messages
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    propertyLocation: "",
    city: "",
    street: "",
    address: "",
    price: "",
    areaSize: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    description: "",
    amenities: {
      swimmingPool: false,
      gym: false,
      security: false,
      parking: false,
      electricity: false,
      gas: false,
      waterSupply: false,
    },
    garageImage: [],
    virtualTourImage: [],
  });

  // Error state for each field
  const [errors, setErrors] = useState({
    propertyName: "",
    propertyType: "",
    propertyLocation: "",
    city: "",
    street: "",
    address: "",
    price: "",
    areaSize: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    description: "",
  });

  // Snackbar state for success message
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error when the user starts typing
    setErrors({
      ...errors,
      [name]: value ? "" : "Input must be filled",
    });
  };

  // Handle amenities checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked,
      },
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  // Submit form and save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields and show error messages
    let validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "amenities" && key !== "garageImage" && key !== "virtualTourImage") {
        validationErrors[key] = "Input must be filled";
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Send form data to the backend
      const response = await axios.post("http://localhost:3005/property/addProperty", formData);
      
      // Show success message
      setOpenSnackbar(true);

      // Reset the form after successful submission
      setFormData({
        propertyName: "",
        propertyType: "",
        propertyLocation: "",
        city: "",
        street: "",
        address: "",
        price: "",
        areaSize: "",
        bedrooms: "",
        bathrooms: "",
        floors: "",
        description: "",
        amenities: {
          swimmingPool: false,
          gym: false,
          security: false,
          parking: false,
          electricity: false,
          gas: false,
          waterSupply: false,
        },
        garageImage: [],
        virtualTourImage: [],
      });
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <>
      <SellerHeader />
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "5rem" }}>
          <Typography variant="h4" gutterBottom>
            Add Property
          </Typography>

          <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Property Name */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Property Name"
                    fullWidth
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleInputChange}
                    error={Boolean(errors.propertyName)}
                    helperText={errors.propertyName}
                    required
                  />
                </Grid>

                {/* Property Type */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Property Type"
                    fullWidth
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    error={Boolean(errors.propertyType)}
                    helperText={errors.propertyType}
                    required
                  />
                </Grid>

                {/* Property Location */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Property Location"
                    fullWidth
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleInputChange}
                    error={Boolean(errors.propertyLocation)}
                    helperText={errors.propertyLocation}
                    required
                  />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="City"
                    fullWidth
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    error={Boolean(errors.city)}
                    helperText={errors.city}
                    required
                  />
                </Grid>

                {/* Street */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Street"
                    fullWidth
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    error={Boolean(errors.street)}
                    helperText={errors.street}
                    required
                  />
                </Grid>

                {/* Address */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Address"
                    fullWidth
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    error={Boolean(errors.address)}
                    helperText={errors.address}
                    required
                  />
                </Grid>

                {/* Price */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Price"
                    fullWidth
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    error={Boolean(errors.price)}
                    helperText={errors.price}
                    required
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>

                {/* Area Size */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Area Size (sq ft)"
                    fullWidth
                    name="areaSize"
                    value={formData.areaSize}
                    onChange={handleInputChange}
                    error={Boolean(errors.areaSize)}
                    helperText={errors.areaSize}
                    required
                  />
                </Grid>

                {/* Bedrooms */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Bedrooms"
                    fullWidth
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    error={Boolean(errors.bedrooms)}
                    helperText={errors.bedrooms}
                    required
                  />
                </Grid>

                {/* Bathrooms */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Bathrooms"
                    fullWidth
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    error={Boolean(errors.bathrooms)}
                    helperText={errors.bathrooms}
                    required
                  />
                </Grid>

                {/* Floors */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Floors"
                    fullWidth
                    name="floors"
                    type="number"
                    value={formData.floors}
                    onChange={handleInputChange}
                    error={Boolean(errors.floors)}
                    helperText={errors.floors}
                    required
                  />
                </Grid>

                {/* Description */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    label="Description"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    error={Boolean(errors.description)}
                    helperText={errors.description}
                    required
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* Amenities */}
                <Grid item xs={12}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.swimmingPool}
                          onChange={handleCheckboxChange}
                          name="swimmingPool"
                        />
                      }
                      label="Swimming Pool"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.gym}
                          onChange={handleCheckboxChange}
                          name="gym"
                        />
                      }
                      label="Gym"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.security}
                          onChange={handleCheckboxChange}
                          name="security"
                        />
                      }
                      label="Security"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.parking}
                          onChange={handleCheckboxChange}
                          name="parking"
                        />
                      }
                      label="Parking"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.electricity}
                          onChange={handleCheckboxChange}
                          name="electricity"
                        />
                      }
                      label="Electricity"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.gas}
                          onChange={handleCheckboxChange}
                          name="gas"
                        />
                      }
                      label="Gas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.amenities.waterSupply}
                          onChange={handleCheckboxChange}
                          name="waterSupply"
                        />
                      }
                      label="Water Supply"
                    />
                  </FormGroup>
                </Grid>

                {/* File Uploads */}
                <Grid item xs={12} sm={6} md={4}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<AttachFileIcon />}
                    fullWidth
                  >
                    Upload Garage Image
                    <input
                      type="file"
                      hidden
                      multiple
                      name="garageImage"
                      onChange={handleFileChange}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<AttachFileIcon />}
                    fullWidth
                  >
                    Upload Virtual Tour Image
                    <input
                      type="file"
                      hidden
                      multiple
                      name="virtualTourImage"
                      onChange={handleFileChange}
                    />
                  </Button>
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Add Property
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>

          {/* Success Snackbar */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="success">
              Property added successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}

export default SellerAddProperty;
