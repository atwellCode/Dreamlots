// src/HomeVirtualTour.js

import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import virtualDemo from "../../assets/panaroma3.jpg"
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const HomeVirtualTour = ({ virtualDemo, title, description }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && window.pannellum) {
      window.pannellum.viewer(viewerRef.current, {
        type: "equirectangular",
        panorama: virtualDemo,
        autoLoad: true,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
        showControls: true,
        pitch: 10,
        yaw: 180,
        hfov: 110,
        compass: true,
        orientationOnByDefault: true,
      });
    }
  }, [virtualDemo]);

  return (
    <Box
      sx={{
        padding: "4rem 0",
        color: "black",
      }}
    >
      <Container>
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          marginBottom={5}
        >
          <Grid
            item
            xs={12}
            md={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h4"
                component="h2"
                className="font-weight-bold text-primary heading"
                style={{ marginBottom: "1rem" }}
                textAlign={"left"}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                href="#"
                target="_blank"
                className="py-3 px-4"
                startIcon={<CameraAltOutlinedIcon />}
              >
                View Virtual Tours
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" marginBottom={5}>
          <Grid
            item
            xs={12}
            md={7}
            order={{ xs: 2, md: 1 }}
            marginBottom={{ xs: 5, md: 0 }}
          >
            <Box
              ref={viewerRef}
              className="img-about dots"
              sx={{
                width: "100%",
                height: "500px",
                position: "relative",
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Box className="d-flex feature-h" marginBottom={4}>
              <Box className="wrap-icon" marginRight={3}>
                <HomeIcon />
              </Box>
              <Box className="feature-text">
                <Typography variant="h6" className="heading">
                  2M Properties
                </Typography>
                <Typography variant="body2" className="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </Typography>
              </Box>
            </Box>

            <Box className="d-flex feature-h" marginBottom={4}>
              <Box className="wrap-icon" marginRight={3}>
                <PersonIcon />
              </Box>
              <Box className="feature-text">
                <Typography variant="h6" className="heading">
                  Top Rated Agents
                </Typography>
                <Typography variant="body2" className="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </Typography>
              </Box>
            </Box>

            <Box className="d-flex feature-h" marginBottom={4}>
              <Box className="wrap-icon" marginRight={3}>
                <SecurityIcon />
              </Box>
              <Box className="feature-text">
                <Typography variant="h6" className="heading">
                  Legit Properties
                </Typography>
                <Typography variant="body2" className="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container className="section-counter" spacing={3} marginTop={5}>
          <Grid item xs={6} sm={6} md={3}>
            <Box className="counter-wrap" marginBottom={{ xs: 5, md: 0 }}>
              <Typography variant="h4" className="countup" color="primary">
                3298
              </Typography>
              <Typography
                variant="body2"
                className="caption"
                color="textSecondary"
              >
                # of Buy Properties
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Box className="counter-wrap" marginBottom={{ xs: 5, md: 0 }}>
              <Typography variant="h4" className="countup" color="primary">
                2181
              </Typography>
              <Typography
                variant="body2"
                className="caption"
                color="textSecondary"
              >
                # of Sell Properties
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Box className="counter-wrap" marginBottom={{ xs: 5, md: 0 }}>
              <Typography variant="h4" className="countup" color="primary">
                9316
              </Typography>
              <Typography
                variant="body2"
                className="caption"
                color="textSecondary"
              >
                # of All Properties
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Box className="counter-wrap" marginBottom={{ xs: 5, md: 0 }}>
              <Typography variant="h4" className="countup" color="primary">
                7191
              </Typography>
              <Typography
                variant="body2"
                className="caption"
                color="textSecondary"
              >
                # of Agents
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeVirtualTour;
