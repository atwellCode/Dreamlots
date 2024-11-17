import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Pagination,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminSideNav from "../AdminSideNav.jsx/AdminSideNav";
import AdminHeader from "../AdminHeader/AdminHeader";
import axios from "axios";

function AdminCustomer() {
  const [users, setUsers] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  const [currentPageComplaints, setCurrentPageComplaints] = useState(1);
  const rowsPerPage = 5;

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3005/user/getUser");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user by ID
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3005/user/deleteUser/${userId}`);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Dummy complaints data
  const dummyComplaints = [
    { id: 1, userId: "U123", name: "John Doe", email: "john@example.com", message: "Issue with property listing" },
    { id: 2, userId: "U124", name: "Jane Smith", email: "jane@example.com", message: "User was unresponsive" },
    { id: 3, userId: "U125", name: "Mike Ross", email: "mike@example.com", message: "Incorrect information" },
    { id: 4, userId: "U126", name: "Rachel Green", email: "rachel@example.com", message: "Delayed response" },
    { id: 5, userId: "U127", name: "Monica Geller", email: "monica@example.com", message: "Incomplete documentation" },
    { id: 6, userId: "U128", name: "Chandler Bing", email: "chandler@example.com", message: "Property not as described" },
  ];

  useEffect(() => {
    fetchUsers();
    setComplaints(dummyComplaints);
  }, []);

  // Pagination logic
  const handleChangePageUsers = (event, newPage) => setCurrentPageUsers(newPage);
  const handleChangePageComplaints = (event, newPage) => setCurrentPageComplaints(newPage);

  const paginatedUsers = users.slice(
    (currentPageUsers - 1) * rowsPerPage,
    currentPageUsers * rowsPerPage
  );
  const paginatedComplaints = complaints.slice(
    (currentPageComplaints - 1) * rowsPerPage,
    currentPageComplaints * rowsPerPage
  );

  return (
    <>
      <AdminHeader />
      <Box sx={{ display: "flex" }}>
        <AdminSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: "5rem" }}>
          {/* Analytics Cards */}
          <Grid container spacing={4} sx={{ marginBottom: "2rem" }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Number of Users</Typography>
                  <Typography variant="h4">{users.length}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Number of Properties</Typography>
                  <Typography variant="h4">10</Typography> {/* Example static count */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Users Table */}
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>Users Management</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Delete</TableCell>
                  <TableCell>Profile Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedUsers.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDeleteUser(user._id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {user.profileImage ? (
                        <Avatar src={user.profileImage} />
                      ) : (
                        <Avatar><AccountCircleIcon /></Avatar>
                      )}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>Buyer</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              count={Math.ceil(users.length / rowsPerPage)}
              page={currentPageUsers}
              onChange={handleChangePageUsers}
              sx={{ marginTop: 2 }}
            />
          </TableContainer>

          {/* Complaints Table */}
          <Typography variant="h5" sx={{ marginTop: "3rem", marginBottom: "1rem" }}>User Complaints</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Complaint</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedComplaints.map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.userId}</TableCell>
                    <TableCell>{complaint.name}</TableCell>
                    <TableCell>{complaint.email}</TableCell>
                    <TableCell>{complaint.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              count={Math.ceil(complaints.length / rowsPerPage)}
              page={currentPageComplaints}
              onChange={handleChangePageComplaints}
              sx={{ marginTop: 2 }}
            />
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default AdminCustomer;
