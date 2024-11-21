import React from "react";
import Slider from "react-slick";
import { Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import cardImage from "../../assets/prop4.jpg"
import { Link, NavLink } from "react-router-dom";

const SectionContainer = styled("div")({
  paddingTop: "4rem",
  paddingBottom: "4rem",
  backgroundColor: "#f8f9fa",
  width: "100%",
});

const PropertySliderWrap = styled("div")({
  position: "relative",
  width: "100%",
});

const PropertyItem = styled("div")({
  padding: "0 10px",
  "& img": {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  "& .slick-slide": {
    padding: "0 10px",
  },
});

const PropertyContent = styled("div")({
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "8px",
});

const Price = styled(Typography)({
  marginBottom: "1rem",
  fontWeight: "bold",
});

const Address = styled(Typography)({
  marginBottom: "0.5rem",
  color: "#6c757d",
});

const City = styled(Typography)({
  marginBottom: "1rem",
  color: "#6c757d",
});

const Specs = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
  "& span": {
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
    "&:last-child": {
      marginRight: 0,
    },
  },
});

const HeadingContainer = styled(Grid)({
  marginBottom: "2rem",
  alignItems: "center",
  justifyContent: "space-between",
});

const HomeProperty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imagePaths = [
    "src/assets/images/img_1.jpg",
    "src/assets/images/img_2.jpg",
    "src/assets/images/img_3.jpg",
    "src/assets/images/img_4.jpg",
    "src/assets/images/img_5.jpg",
    "src/assets/images/img_6.jpg",
    "src/assets/images/img_7.jpg",
    "src/assets/images/img_8.jpg",
  ];

  return (
    <SectionContainer>
      <Container>
        <HeadingContainer container>
          <Grid item>
            <Typography
              variant="h4"
              component="h2"
              className="font-weight-bold text-primary heading"
              style={{ marginBottom: "1rem" }}
            >
              Popular Properties
            </Typography>
          </Grid>
          <Grid item>
            <Button
            component={Link}
              to="/buy-property"
              variant="contained"
              color="primary"
              sx={{
                bgcolor: "#2C387E",
                color: "#fff",
                "&:hover": { bgcolor: "#566098" },
              }}
              startIcon={<VisibilityOutlinedIcon />}
            >
              View All Properties
            </Button>
          </Grid>
        </HeadingContainer>
        <PropertySliderWrap>
          <Slider {...settings}>
            {imagePaths.map((imagePath, index) => (
              <PropertyItem key={index} component={Link} to="/propertyContent">
                <a href="/propertyContent" className="img">
                  <img src={cardImage} alt={`Image ${index + 1}`} />
                </a>
                <PropertyContent>
                  <Price variant="h6">$1,291,000</Price>
                  <Address variant="body2">
                    5232 California Fake, Ave. 21BC
                  </Address>
                  <City variant="body2">California, USA</City>
                  <Specs>
                    <span>
                      <ExploreIcon style={{ marginRight: "0.5rem" }} />2 beds
                    </span>
                    <span>
                      <BusinessIcon style={{ marginRight: "0.5rem" }} />2 baths
                    </span>
                  </Specs>
                  <Button
                    variant="contained"
                    color="primary"
                    href="property-single.html"
                    className="py-2 px-3"
                  >
                    See details
                  </Button>
                </PropertyContent>
              </PropertyItem>
            ))}
          </Slider>
        </PropertySliderWrap>
      </Container>
    </SectionContainer>
  );
};

export default HomeProperty;
