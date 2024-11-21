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
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:3005"; // Centralized API base URL

function SellerLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear any existing error
    setSuccess(""); // Clear success message
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error
    setSuccess(""); // Clear previous success message
    setLoading(true); // Show loading state

    try {
      const response = await axios.post(`${API_BASE_URL}/user/loginUser`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        setSuccess("User signed in successfully!");
        setTimeout(() => navigate("/seller"), 2000); // Redirect to seller dashboard
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError("User not found.");
      } else if (err.response?.status === 401) {
        setError("Incorrect email or password.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
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
        <Avatar sx={{ mb: 2, bgcolor: "#1976d2" }}>L</Avatar>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Seller Login
        </Typography>

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Success Alert */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                required
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
        </form>

        {/* Forget Password Link */}
        <Typography sx={{ mt: 2 }}>
          {" "}
          <Link href="/seller-forget-signup" underline="hover">
            Forget Password
          </Link>
        </Typography>
        {/* Sign Up Link */}
        <Typography sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/seller-signup" underline="hover">
            Sign up here
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SellerLogin;
