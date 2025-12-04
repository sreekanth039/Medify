import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import doctors from "../../assets/doctors.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)",
        pb: { xs: 6, md: 20 },
      }}
      paddingTop={3}
    >
      <Container>
        <Grid
          container
          justifyContent={"space-between"}
          spacing={{ xs: 2, md: 2 }}
          alignItems="center"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h3"
                color="##102851"
                fontSize={"31px"}
                fontWeight={500}
                lineHeight={"68px"}
              >
                Skip the travel! Find Online
              </Typography>
              <Typography
                variant="h1"
                color="#102851"
                fontSize={"56px"}
                fontWeight={700}
                lineHeight={"68px"}
              >
                Medical
                <span
                  style={{
                    variant: "h1",
                    color: "#2AA7FF",
                    fontSize: "56px",
                    fontWeight: 700,
                    lineHeight: "68px",
                  }}
                >
                  Centers
                </span>
              </Typography>

              <Typography
                variant="h3"
                color="#77829D"
                fontSize={"20px"}
                fontWeight={400}
                lineHeight={"32px"}
                mb={4}
              >
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </Typography>
              <Link to="/search">
                <Button variant="contained" size="large" disableElevation>
                  Find Centers
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              src={doctors}
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 500,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
