import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import bg from "../../assets/hero_bg_2.jpg"

const HeroSection = styled("div")({
  position: "relative",
  minHeight: "calc(100vh - 64px)", // Adjust for the app bar height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)", // Adjust opacity as needed
});

const Content = styled("div")({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
});

const SearchBox = styled("div")({
  marginTop: "2rem",
});

const HomeHeroSection
 = () => {
  return (
    <HeroSection>
      <Overlay />
      <Container>
        <Content>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Explore Virtually, Find Home Sweet Home!
          </Typography>
          <SearchBox>
            <TextField
              variant="outlined"
              placeholder="Search properties in your city..."
              fullWidth
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                    borderWidth: "2px",
                  },
                  "& input::placeholder": {
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                  },
                },

                endAdornment: (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      bgcolor: "#2C387E",
                      padding: "5px 30px",
                      color: "#fff",
                      "&:hover": { bgcolor: "#566098" },
                    }}
                    startIcon={<SearchOutlinedIcon />}
                  >
                    Search
                  </Button>
                ),
              }}
            />
          </SearchBox>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default HomeHeroSection
;
