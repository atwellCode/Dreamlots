import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import AdminSideNav from "../AdminSideNav.jsx/AdminSideNav";
import AdminHeader from "../AdminHeader/AdminHeader";
import axios from "axios";

function AdminHomepage() {
  const [userCount, setUserCount] = useState(null);
  const [propertyCount, setPropertyCount] = useState(null);
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [complaints, setComplaints] = useState([]);

  // Pagination state
  const [userPage, setUserPage] = useState(0);
  const [propertyPage, setPropertyPage] = useState(0);
  const rowsPerPage = 5;

  // Dummy data for virtual tours and properties sold
  const virtualTours = 25;
  const propertiesSold = 15;

  // Fetch users and properties
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3005/user/getUser");
        setUsers(response.data);
        setUserCount(response.data.length);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3005/property/getProperty"
        );
        setProperties(response.data);
        setPropertyCount(response.data.length);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchUsers();
    fetchProperties();
  }, []);

  // Dummy analytics data
  const analyticsData = [
    { name: "Jan", users: 30, properties: 12 },
    { name: "Feb", users: 40, properties: 18 },
    { name: "Mar", users: 55, properties: 25 },
    { name: "Apr", users: 60, properties: 20 },
    { name: "May", users: 75, properties: 30 },
  ];

  // Handle pagination change
  const handleUserPageChange = (event, newPage) => setUserPage(newPage);
  const handlePropertyPageChange = (event, newPage) => setPropertyPage(newPage);

  return (
    <>
      <AdminHeader />
      <Box sx={{ display: "flex" }}>
        <AdminSideNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, paddingTop: "5rem", overflowY: "auto" }}
        >
          <Typography variant="h4" gutterBottom sx={{ marginBottom: "2rem" }}>
            Dashboard
          </Typography>

          {/* Analytics Cards */}
          <Grid container spacing={4}>
            {[
              { title: "Users", count: userCount },
              { title: "Properties", count: propertyCount },
              { title: "Virtual Tours", count: virtualTours },
              { title: "Properties Sold", count: propertiesSold },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ backgroundColor: "#2C387E", color: "white" }}>
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    {item.count !== null ? (
                      <Typography variant="h4">{item.count}</Typography>
                    ) : (
                      <CircularProgress color="inherit" />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Analytics Chart */}
          <Container maxWidth="lg" sx={{ marginTop: "4rem" }}>
            <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
              Analytics
            </Typography>

            {/* Responsive Grid for Charts */}
            <Grid container spacing={4}>
              {/* Chart 1 */}
              <Grid item xs={12} md={6}>
                <Card sx={{ padding: "1rem",backgroundColor:"#F8F9FA" }}>
                  <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                    User Growth
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="users" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Grid>

              {/* Chart 2 */}
              <Grid item xs={12} md={6}>
                <Card sx={{ padding: "1rem", backgroundColor:"#F8F9FA" }}>
                  <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                    Property Listings
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="properties" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Grid>
            </Grid>
          </Container>

          {/* Tables Section */}
          <Typography
            variant="h5"
            sx={{ marginTop: "4rem", marginBottom: "1rem" }}
          >
            User and Property Details
          </Typography>
          <Grid container spacing={4}>
            {/* Users Table */}
            <Grid item xs={12} md={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{backgroundColor:"#1976D2"}}>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users
                      .slice(
                        userPage * rowsPerPage,
                        userPage * rowsPerPage + rowsPerPage
                      )
                      .map((user) => (
                        <TableRow key={user._id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  component="div"
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={userPage}
                  onPageChange={handleUserPageChange}
                />
              </TableContainer>
            </Grid>

            {/* Properties Table */}
            <Grid item xs={12} md={6}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{backgroundColor:"#1976D2"}}>
                      <TableCell>Property Name</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {properties
                      .slice(
                        propertyPage * rowsPerPage,
                        propertyPage * rowsPerPage + rowsPerPage
                      )
                      .map((property) => (
                        <TableRow key={property._id}>
                          <TableCell>{property.propertyName}</TableCell>
                          <TableCell>{property.city}</TableCell>
                          <TableCell>{property.price}</TableCell>
                          <TableCell>{property.status}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  component="div"
                  count={properties.length}
                  rowsPerPage={rowsPerPage}
                  page={propertyPage}
                  onPageChange={handlePropertyPageChange}
                />
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminHomepage;
