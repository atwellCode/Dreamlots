import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  // Grid,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const ContactForm = () => {
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
    console.log(formData); // Replace with your form submission logic
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eaebf2",
        paddingY: "20px",
      }}
    >
      <Container sx={{ mt: "30px", mb: "30px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{ background: "red" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
                voluptatum doloribus accusamus quam corrupti quod. Placeat
                voluptatibus error nemo minima nesciunt, autem quae tempora rem
                dolor provident, doloribus, quas perferendis. Voluptatibus, quia
                cumque facere sunt ipsa sed labore eaque nostrum expedita
                delectus repudiandae in itaque fugiat placeat velit dignissimos
                dolorum blanditiis ducimus explicabo. Maxime perspiciatis
                laborum suscipit nihil, sapiente hic, sed praesentium vitae
                corrupti provident dignissimos sunt facere facilis odio nam
                libero laudantium accusamus in tempore. Dolores dolorem placeat
                magni, reprehenderit vitae at harum nam nemo corrupti vero, in
                necessitatibus tenetur architecto ab? Doloremque maiores
                necessitatibus dignissimos, magnam dolore aliquid totam officia
                ad nesciunt consequatur tempora accusantium fuga omnis commodi
                obcaecati! Repudiandae quasi obcaecati molestias ipsa rem,
                consectetur nihil cum. Ipsum fugiat eius voluptatem corrupti rem
                optio excepturi non debitis quidem, impedit voluptas? Excepturi,
                quia. Excepturi perferendis ullam dignissimos iste est beatae
                voluptatem tenetur iusto. Velit architecto ad dolore. Veniam
                minima maxime harum nihil dolorum praesentium illum incidunt
                quo! Quos magnam possimus sapiente. Temporibus placeat earum,
                atque hic, sed, distinctio aliquam vitae laboriosam voluptatem
                voluptatibus labore amet quidem. Nihil molestiae voluptatum,
                corporis dicta beatae illum consequatur, velit, modi quo est
                perferendis explicabo rem provident animi cupiditate porro
                eligendi assumenda doloremque!
              </p>
            </Grid>
            <Grid
            maxWidth="sm"
              item
              size={{ xs: 12, md: 6, lg: 6 }}
              sx={{ background: "blue", padding:"2rem" }}
            >
              <Grid item size={{ sx: 12 }}>
                <Grid item size={{ sx: 12 }}>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={{ sx: 12 }}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={{ sx: 12 }}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={{ sx: 12 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={{ sx: 12 }}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item size={{ sx: 12}}>
                  <Grid item size={{ sx: 4}}>
                  <Button
                  sx={{ marginTop: "2rem" ,display:"flex", justifyContent:"end", float:"end"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
