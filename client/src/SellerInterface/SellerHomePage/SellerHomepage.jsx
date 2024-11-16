import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Avatar, Grid, Card, CardContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";
import SideNavbar from "../SideNavbar/SideNavbar";
import SellerHeader from "../SellerHeader/SellerHeader";

function SellerHomePage() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    cnicNumber: "",
    profileImage: "",
    cnicFrontImage: "",
    cnicBackImage: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data by ID
  useEffect(() => {
    const userId = "6736513a1b19c460fcd799ff"; // Replace with the actual user ID
    axios
      .get(`http://localhost:3005/user/getUserById/${userId}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3005/user/updateUser/${userData._id}`, userData);
      alert("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <SellerHeader />
      <Box sx={{ display: "flex", p: 3 ,paddingTop:"5rem"}}>
        <SideNavbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f4f5fa",
          }}
        >
          <Card sx={{ maxWidth: 1000, width: "100%", p: 6, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              {/* Gradient Box for Profile Picture */}
              <Box
                sx={{
                  background: "linear-gradient(135deg, #2575fc, #6a11cb)",
                  borderRadius: 4,
                  width: "100%",
                  textAlign: "center",
                  p: 4,
                  mb: 4,
                  position: "relative",
                }}
              >
                <Avatar
                  src={userData.profileImage}
                  alt={`${userData.name} ${userData.lastName}`}
                  sx={{
                    width: 120,
                    height: 120,
                    position: "absolute",
                    top: -60,
                    left: "50%",
                    transform: "translateX(-50%)",
                    border: "5px solid white",
                  }}
                />
                <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, color: "white" }}>
                  {`${userData.name} ${userData.lastName}`}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, color: "white" }}>
                  @{userData.username}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                  {userData.email}
                </Typography>
              </Box>

              {/* User Info Card with Light Background */}
              <Card sx={{ backgroundColor: "#f9f9f9", p: 4, borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                  User Information
                </Typography>
                <Grid container spacing={3}>
                  {/* First Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Last Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Username */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Username"
                      name="username"
                      value={userData.username}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>

                  {/* CNIC */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CNIC"
                      name="cnicNumber"
                      value={userData.cnicNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>

                  {/* Phone Number */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                {/* CNIC Front and Back Image */}
                <Grid container spacing={3} sx={{ pt: 4 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary" sx={{ fontWeight: "bold" }}>
                      CNIC Front Image:
                    </Typography>
                    <input
                      type="file"
                      name="cnicFrontImage"
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      accept="image/*"
                      style={{ marginTop: "8px", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary" sx={{ fontWeight: "bold" }}>
                      CNIC Back Image:
                    </Typography>
                    <input
                      type="file"
                      name="cnicBackImage"
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      accept="image/*"
                      style={{ marginTop: "8px", width: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Card>

              {/* Save / Edit Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
                <Button
                  onClick={handleEditToggle}
                  startIcon={<EditIcon />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#2575fc",
                    color: "white",
                    mr: 2,
                    "&:hover": {
                      backgroundColor: "#6a11cb",
                    },
                  }}
                >
                  {isEditing ? "Cancel Edit" : "Edit Profile"}
                </Button>
                {isEditing && (
                  <Button
                    onClick={handleSubmit}
                    startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{
                      backgroundColor: "#4caf50",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#388e3c",
                      },
                    }}
                  >
                    Save Changes
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default SellerHomePage;
