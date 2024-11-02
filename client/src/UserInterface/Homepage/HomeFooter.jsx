import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";

function HomeFooter() {
  // Define styles as JavaScript objects
  const footerStyle = {
    backgroundColor: "#2C387E",
    color: "#FFFFFF",
    padding: "2rem 0",
    textAlign: "center",
    fontSize: "1rem",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "0.6rem",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#FFFFFF",
    cursor: "pointer",
    transition: "color 0.3s",
  };

  const footerTextStyle = {
    fontSize: "1rem",
  };

  const footerTextStyleHead = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0.5rem",
  };

  const handleIconHover = (event, isHover) => {
    event.target.style.color = isHover ? "#e0e0e0" : "#FFFFFF";
  };

  return (
    <>
      <section style={{ padding: "40px 0", background: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* First Column */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                style={{ color: "#2C387E", fontWeight: "bold" }}
              >
                EstateAgency
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "10px" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                vel, veniam magnam adipisci iusto aut, optio illo beatae, porro
                quisquam ex doloribus! Corporis quaerat sit voluptas? Alias
                repudiandae soluta non quia numquam ad animi nesciunt maiores!
                Ab, neque! Perspiciatis, dolor.
              </Typography>
              <List sx={{ marginTop: "10px" }}>
                <ListItem disableGutters>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    fontSize="0.9rem"
                  >
                    <span style={{ color: "#2C387E", fontWeight: "bold" }}>
                      Phone:{" "}
                    </span>{" "}
                    DreamLotsSupport@gmail.com
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    fontSize="0.9rem"
                  >
                    <span style={{ color: "#2C387E", fontWeight: "bold" }}>
                      Email:{" "}
                    </span>{" "}
                    +92-300-000-000
                  </Typography>
                </ListItem>
              </List>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                style={{ color: "#2C387E", fontWeight: "bold" }}
              >
                DreamLots
              </Typography>
              <List>
                {[
                  "Popular Property",
                  "Buy Property",
                  "Rent Property",
                  "Virtual Tours",
                  "Contact",
                  "Sign In",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <ChevronRight
                        fontSize="medium"
                        sx={{ color: "#2C387E" }}
                      />
                    </ListItemIcon>
                    <Link href="#" underline="hover" color="inherit">
                      <ListItemText primary={item} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Third Column */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                style={{ color: "#2C387E", fontWeight: "bold" }}
              >
                We Are In
              </Typography>
              <List>
                {[
                  "Lahore",
                  "Karachi",
                  "Islamabad",
                  "Multan",
                  "Peshawer",
                  "Quetta",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <ChevronRight
                        fontSize="medium"
                        sx={{ color: "#2C387E" }}
                      />
                    </ListItemIcon>
                    <Link href="#" underline="hover" color="inherit">
                      <ListItemText primary={item} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        {/* Social Media Icons */}
        <div style={iconContainerStyle}>
          <FacebookIcon
            style={iconStyle}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          />
          <XIcon
            style={iconStyle}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          />
          <InstagramIcon
            style={iconStyle}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          />
          <YouTubeIcon
            style={iconStyle}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          />
        </div>

        {/* Footer Text */}
        <div style={footerTextStyleHead}>Final Year Project</div>
        <div style={footerTextStyle}>
          Arslan Asif / Saleeha Akram / Muhammad Azan Afzal
        </div>
      </footer>
    </>
  );
}

export default HomeFooter;
