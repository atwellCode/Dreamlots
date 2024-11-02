import React, { useState } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

const SectionContainer = styled(Container)({
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CustomCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#F8F9FA",
  padding: "20px 45px",
  boxShadow: "2px 4px 12px 0px rgba(0,0,0,0.39)",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#dddddd",
  },
}));

const IconContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
});

const CustomIcon = styled(({ component: Component, ...props }) => (
  <Component {...props} />
))(({ theme }) => ({
  fontSize: "3rem",
  color: "#2C387E",
  transition: "color 0.3s",
}));

const CardTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const CardSubtitle = styled(Typography)({
  color: "#666",
});
const cardScale = {
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
};
const HomeCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <SectionContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            sx={cardScale}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon
                  component={ExploreIcon}
                  style={{
                    color: hoveredCard === 1 ? "#000000" : "#2C387E",
                  }}
                />
              </IconContainer>
              <CardTitle variant="h4" component="h2">
                Virtual Tours
              </CardTitle>
              <CardSubtitle variant="body2">
                Experience properties from the comfort of your home.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            sx={cardScale}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon
                  component={BusinessIcon}
                  style={{
                    color: hoveredCard === 2 ? "#000000" : "#2C387E",
                  }}
                />
              </IconContainer>
              <CardTitle variant="h4" component="h2">
                Commercial
              </CardTitle>
              <CardSubtitle variant="body2">
                Explore commercial properties for your business.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            sx={cardScale}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon
                  component={HomeIcon}
                  style={{
                    color: hoveredCard === 3 ? "#000000" : "#2C387E",
                  }}
                />
              </IconContainer>
              <CardTitle variant="h4" component="h2">
                Residential
              </CardTitle>
              <CardSubtitle variant="body2">
                Find your dream home in our residential listings.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HomeCard;
