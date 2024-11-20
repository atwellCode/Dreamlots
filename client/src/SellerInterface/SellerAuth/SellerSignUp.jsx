import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Container,
  Avatar,
  Link,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SellerSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    cnicNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for this field
  };

  // Validate fields
  const validateFields = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setServerError("");

    // Validate fields before submitting
    if (!validateFields()) return;

    try {
      const response = await axios.post(
        "http://localhost:3005/user/addUser",
        formData
      );
      if (response.status === 201) {
        setSuccess("Account created successfully!");
        setFormData({
          name: "",
          lastName: "",
          username: "",
          email: "",
          phone: "",
          cnicNumber: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      setServerError(
        err.response?.data?.error || "Failed to create account. Please try again."
      );
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Avatar sx={{ mb: 2, bgcolor: "#1976d2" }}>S</Avatar>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Seller Sign Up
        </Typography>

        {/* Error & Success Alerts */}
        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Username"
                fullWidth
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            {/* Third Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CNIC Number"
                fullWidth
                name="cnicNumber"
                value={formData.cnicNumber}
                onChange={handleChange}
                margin="normal"
                error={!!errors.cnicNumber}
                helperText={errors.cnicNumber}
              />
            </Grid>

            {/* Fourth Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                margin="normal"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </form>

        {/* Login Redirect */}
        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link href="/seller-login" underline="hover">
            Login here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SellerSignUp;
