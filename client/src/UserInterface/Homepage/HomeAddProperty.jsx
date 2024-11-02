import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled("div")({
  // Your custom CSS styles for the section
});

const HomeAddProperty = () => {
  return (
    <Section
      sx={{
        height: "55vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} lg={12}>
            <Typography variant="h3" align="center" gutterBottom>
              Be a part of our growing real estate agents
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ marginTop: "20px" }}
                  color="primary"
                  size="large"
                  href="#"
                  target="_blank"
                >
                  Add Your Property
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default HomeAddProperty;
