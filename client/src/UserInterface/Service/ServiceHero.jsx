import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import  serviceBgImg from "../../assets/hero_bg_3.jpg"


const HeroSection = styled(Box)({
  height: "60vh", 
  background: `url(${serviceBgImg})`, 
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white", 
  fontWeight:"bold",
  textAlign: "center",
});

const ServiceHero = () => {
  return (
    <HeroSection>
      <Typography variant="h2">Services</Typography>
    </HeroSection>
  );
};

export default ServiceHero;
