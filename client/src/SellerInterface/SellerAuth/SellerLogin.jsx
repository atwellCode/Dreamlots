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

function SellerLogin() {
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear any existing error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error

    try {
      const response = await axios.post(
        "http://localhost:3005/user/getUser",
        {
          emailOrUsername: formData.emailOrUsername,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        alert("User signed in successfully!");
        navigate("/seller");
      }
    } catch (err) {
      // Handle errors
      if (err.response?.status === 404) {
        setError("User not found.");
      } else if (err.response?.status === 401) {
        setError("Incorrect email/username or password.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
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

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* Email/Username Field */}
            <Grid item xs={12}>
              <TextField
                label="Email or Username"
                fullWidth
                name="emailOrUsername"
                value={formData.emailOrUsername}
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
          >
            Login
          </Button>
        </form>

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
