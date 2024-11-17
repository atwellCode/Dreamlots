import React from "react";
import { Container, Typography, Button, Card, Grid } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";

function ServiceCard() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        sx={{
          padding: "2rem",
        }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Card
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
               backgroundColor:"#fAf1fA",
              padding: "2rem",
              textAlign: "center",
              color: "#333",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <HouseIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
            <Typography
              variant="h5"
              component="h3"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Quality Properties
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              Read more
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{
               backgroundColor:"#fAf1fA",
              padding: "2rem",
              textAlign: "center",
              color: "#333",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <AccountBalanceIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
            <Typography
              variant="h5"
              component="h3"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Top Rated Agent
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              Read more
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{
               backgroundColor:"#fAf1fA",
              padding: "2rem",
              textAlign: "center",
              color: "#333",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <ApartmentIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
            <Typography
              variant="h5"
              component="h3"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Property for Sale
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              Read more
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceCard;
