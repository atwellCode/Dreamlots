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
} from "@mui/material";

function AddPropertyForm() {
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyLocation: "",
    city: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    utilities: {
      electricity: "no",
      gas: "no",
      water: "no",
      hospital: "no",
      school: "no",
      mall: "no",
    },
    garageImage: null,
    virtualTourImage: null,
  });

  // Handle input change for text fields and select fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input change for utilities (yes/no fields)
  const handleUtilityChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      utilities: {
        ...prevData.utilities,
        [name]: value,
      },
    }));
  };

  // Handle image upload fields
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
    setFormData({
      propertyName: "",
      propertyLocation: "",
      city: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      floors: "",
      utilities: {
        electricity: "no",
        gas: "no",
        water: "no",
        hospital: "no",
        school: "no",
        mall: "no",
      },
      garageImage: null,
      virtualTourImage: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Property Form
      </Typography>
      <Grid container spacing={2}>
        {/* Text Fields */}
        {["propertyName", "propertyLocation", "city", "price"].map((field) => (
          <Grid item xs={12} sm={6} md={4} key={field}>
            <TextField
              label={field.replace(/([A-Z])/g, " $1").trim()}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        ))}

        {/* Dropdowns for Bedrooms, Bathrooms, Floors */}
        {["bedrooms", "bathrooms", "floors"].map((field) => (
          <Grid item xs={12} sm={6} md={4} key={field}>
            <FormControl fullWidth>
              <InputLabel>{field.replace(/([A-Z])/g, " $1").trim()}</InputLabel>
              <Select
                name={field}
                value={formData[field]}
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

        {/* Utilities Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Utilities
          </Typography>
          <Grid container spacing={2}>
            {["electricity", "gas", "water", "hospital", "school", "mall"].map(
              (utility) => (
                <Grid item xs={12} sm={6} md={4} key={utility}>
                  <FormControl>
                    <Typography>{utility.replace(/([A-Z])/g, " $1")}</Typography>
                    <RadioGroup
                      row
                      name={utility}
                      value={formData.utilities[utility]}
                      onChange={handleUtilityChange}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              )
            )}
          </Grid>
        </Grid>

        {/* Image Uploads */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Garage Image"
            name="garageImage"
            type="file"
            onChange={handleImageChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Virtual Tour Image"
            name="virtualTourImage"
            type="file"
            onChange={handleImageChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddPropertyForm;
