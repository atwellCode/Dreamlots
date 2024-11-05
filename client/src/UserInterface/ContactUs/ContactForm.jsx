import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Twitter";
import contactImage from "../../assets/hero_bg_1.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box sx={{ py: 5 }}>
      <Container >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, borderRadius: 2, boxShadow: 3 , background:"#F8F9FA"}}>
              <Typography variant="h5" gutterBottom align="center">
                Get In Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  required
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ my: 1, background:"#ffffff" }}
                />
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ my: 1, background:"#ffffff" }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{ my: 1, background:"#ffffff" }}
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  sx={{ my: 1, background:"#ffffff" }}
                />
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ my: 1, background:"#ffffff" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, borderRadius: 5 }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="h5" gutterBottom>
                Contact Details
              </Typography>
              <Grid container spacing={2} justifyContent="center" sx={{paddingY:"1rem"}}>
             
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#F8F9FA",
                      padding:"2rem",
                      textAlign: "center",
                      boxShadow: 2,
                    }}
                  >
                    <PhoneIcon sx={{ color: "#2C387E", fontSize:"1.4rem" }} />
                    <Typography variant="h6">
                      <strong>Twitter</strong>
                    </Typography>
                    <Typography>@DreamlotsOffical</Typography>
                  </Box>
                </Grid>

         
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#F8F9FA",
                      padding:"2rem",
                      textAlign: "center",
                      boxShadow: 2,
                    }}
                  >
                    <LocationOnIcon sx={{ color: "#2C387E", fontSize:"1.4rem" }} />
                    <Typography variant="h6">
                      <strong>Office Location:</strong>
                    </Typography>
                    <Typography>123 Main Street, City</Typography>
                  </Box>
                </Grid>

                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#F8F9FA",
                      padding:"2rem",
                      textAlign: "center",
                      boxShadow: 2,
                    }}
                  >
                    <EmailIcon sx={{ color: "#2C387E", fontSize:"1.4rem" }} />
                    <Typography variant="h6">
                      <strong>Email:</strong>
                    </Typography>
                    <Typography>example@example.com</Typography>
                  </Box>
                </Grid>

          
                <Grid item xs={6}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      backgroundColor: "#F8F9FA",
                      padding:"2rem",
                      textAlign: "center",
                      boxShadow: 2,
                    }}
                  >
                    <WhatsAppIcon sx={{ color: "#2C387E", fontSize:"1.4rem" }} />
                    <Typography variant="h6">
                      <strong>WhatsApp:</strong>
                    </Typography>
                    <Typography>+92-300-000-000</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509437!2d144.95373631550465!3d-37.81627937975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c2dcf26a3e6!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1614122750050!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></Box>
            </Box>
          </Grid>
        </Grid>

   
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
            py: 5,
            borderRadius: 2,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h4" gutterBottom>
            We Are Always Ready To Take A Perfect Shot
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 5, mt: 2 }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
