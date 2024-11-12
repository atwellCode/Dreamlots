import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledForm = styled("form")({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
  padding: "2rem",
  margin: "2rem auto",
  maxWidth: "80vw",
});

const ImageUploadField = styled(TextField)({
  "& input[type='file']": {
    cursor: "pointer",
    padding: "0.8rem",
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#007bff",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

function AddPropertyForm() {
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
    garageImage: null,
    virtualTourImage: null,
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle amenities changes
  const handleAmenitiesChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: {
        ...prevData.amenities,
        [name]: checked,
      },
    }));
  };

  // Handle image upload
  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert("Property submitted successfully!");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Typography variant="h4" align="center" gutterBottom>
        Add New Property
      </Typography>
      <Grid container spacing={3}>
        {/* Basic Information */}
        {[
          { label: "Property Name", name: "propertyName" },
          { label: "Property Location", name: "propertyLocation" },
          { label: "City", name: "city" },
          { label: "Street", name: "street" },
          { label: "Address", name: "address" },
          { label: "Price", name: "price" },
          { label: "Area (in feets)", name: "areaSize" },
        ].map(({ label, name }) => (
          <Grid item xs={12} sm={6} key={name}>
            <TextField
              label={label}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        ))}

        {/* Property Type */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Property Type</InputLabel>
            <Select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              {["House", "Apartment", "Commercial", "Plot"].map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Dropdowns for Bedrooms, Bathrooms, Floors */}
        {[
          { label: "No of Bedrooms", name: "bedrooms" },
          { label: "No of Bathrooms", name: "bathrooms" },
          { label: "No of Floors", name: "floors" },
        ].map(({ label, name }) => (
          <Grid item xs={12} sm={4} key={name}>
            <FormControl fullWidth>
              <InputLabel>{label}</InputLabel>
              <Select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
              >
                {[...Array(10).keys()].map((number) => (
                  <MenuItem key={number} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        {/* Description */}
        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>

        {/* Amenities */}
        <Grid item xs={12}>
          <Typography variant="h6">Facilities</Typography>
          {Object.keys(formData.amenities).map((amenity) => (
            <FormControlLabel
              key={amenity}
              control={
                <Switch
                  checked={formData.amenities[amenity]}
                  onChange={handleAmenitiesChange}
                  name={amenity}
                />
              }
              label={amenity.replace(/([A-Z])/g, " $1")}
            />
          ))}
        </Grid>

        {/* Image Uploads */}
        {[
          { label: "Garage Image", name: "garageImage" },
          { label: "Virtual Tour Image", name: "virtualTourImage" },
        ].map(({ label, name }) => (
          <Grid item xs={12} sm={6} key={name}>
            <ImageUploadField
              label={label}
              name={name}
              type="file"
              onChange={handleImageChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        ))}

        {/* Submit Button */}
        <Grid item xs={3}>
          <StyledButton type="submit" variant="contained" fullWidth>
            Submit Property
          </StyledButton>
        </Grid>
      </Grid>
    </StyledForm>
  );
}

export default AddPropertyForm;
