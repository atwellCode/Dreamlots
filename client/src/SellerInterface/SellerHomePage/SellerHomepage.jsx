import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Avatar, Card, CardContent, Grid, IconButton } from "@mui/material";
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
      <Box sx={{ display: "flex", p: 3 }}>
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
          <Card sx={{ maxWidth: 700, width: "100%", p: 4, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Avatar
                  src={userData.profileImage}
                  alt={`${userData.name} ${userData.lastName}`}
                  sx={{ width: 120, height: 120, margin: "auto", mb: 2 }}
                />
                <Typography variant="h4" gutterBottom>
                  {`${userData.name} ${userData.lastName}`}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {userData.email}
                </Typography>
              </Box>

              <Grid container spacing={3}>
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CNIC Number"
                    name="cnicNumber"
                    value={userData.cnicNumber}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
                <Button
                  variant="contained"
                  color={isEditing ? "secondary" : "primary"}
                  onClick={handleEditToggle}
                  startIcon={<EditIcon />}
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
                {isEditing && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSubmit}
                    startIcon={<SaveIcon />}
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
