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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const {
      name,
      lastName,
      username,
      email,
      phone,
      cnicNumber,
      password,
      confirmPassword,
    } = formData;

    // Check if all fields are filled
    if (!name || !lastName || !username || !email || !phone || !cnicNumber || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send data to backend
      const response = await axios.post("http://localhost:3005/user/addUser", formData);
      if (response.status === 200) {
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
      setError("Failed to create account. Please try again.");
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
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} md={6}>
              <TextField
                label="First Name"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Last Name"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Username"
                fullWidth
                name="username"
                value={formData.username}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>

            {/* Third Row */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="CNIC Number"
                fullWidth
                name="cnicNumber"
                value={formData.cnicNumber}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>

            {/* Fourth Row */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                margin="normal"
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
