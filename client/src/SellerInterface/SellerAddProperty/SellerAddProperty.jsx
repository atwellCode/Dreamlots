import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, FormControlLabel, Checkbox, FormGroup, Paper, InputAdornment, Snackbar, Card } from "@mui/material";
import { Alert } from '@mui/lab';
import axios from "axios";
import SellerHeader from "../SellerHeader/SellerHeader";
import SideNavbar from "../SideNavbar/SideNavbar";
import AttachFileIcon from '@mui/icons-material/AttachFile';

function SellerAddProperty() {
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

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: value ? "" : "Input must be filled",
    });
  };

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

  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = Array.from(e.target.files);
    setFormData({ ...formData, [name]: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const response = await axios.post("http://localhost:3005/property/addProperty", formData);
      setOpenSnackbar(true);

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

          <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: "#f9f9f9" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

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
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    error={Boolean(errors.description)}
                    helperText={errors.description}
                    required
                    variant="outlined"
                    sx={{ borderRadius: 2, borderBottom: "2px solid #2C387E" }}
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    Amenities
                  </Typography>
                  <FormGroup row sx={{ justifyContent: "space-between" }}>
                    {Object.keys(formData.amenities).map((amenity, index) => (
                      <Grid item xs={4} key={amenity}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.amenities[amenity]}
                              onChange={handleCheckboxChange}
                              name={amenity}
                            />
                          }
                          label={amenity.replace(/([A-Z])/g, ' $1').toUpperCase()}
                        />
                      </Grid>
                    ))}
                  </FormGroup>
                  <hr style={{ borderTop: "2px solid #2C387E" }} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#2C387E",
                    }}
                  >
                    Upload Garage Image
                    <input
                      type="file"
                      name="garageImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      hidden
                    />
                    <AttachFileIcon />
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#2C387E",
                    }}
                  >
                    Upload Virtual Tour Image
                    <input
                      type="file"
                      name="virtualTourImage"
                      accept="image/*"
                      onChange={handleFileChange}
                      hidden
                    />
                    <AttachFileIcon />
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#2C387E",
                      fontSize: "1.1rem",
                    }}
                  >
                    Submit Property
                  </Button>
                </Grid>

              </Grid>
            </form>
          </Paper>

          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
            <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
              Property added successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}

export default SellerAddProperty;
