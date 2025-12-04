import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import cardiology from "../../assets/Cardiology.png";
import dentistry from "../../assets/Dentistry.png";
import bloodtest from "../../assets/Bloodtest.png";
import MRI from "../../assets/MRI.png";
import piscologist from "../../assets/Piscologist.png";
import primarycare from "../../assets/Primarycare.png";
import Xray from "../../assets/Xray.png";
import Lab from "../../assets/Lab.png";

const Specialisation = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)",
        textAlign: "center",
      }}
      paddingBlock={3}
    >
      <Typography
        variant="h1"
        color="#1B3C74"
        textAlign="center"
        fontWeight={600}
        fontSize={"48px"}
        mt={"3px"}
        marginBottom={"50px"}
      >
        Find by specialisation
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={4} marginBottom="20px">
          <Grid item xs={4} md={3}>
            <Box
              src={dentistry}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={primarycare}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={cardiology}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={MRI}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={bloodtest}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={piscologist}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={Lab}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Box
              src={Xray}
              component="img"
              width={1}
              height="auto"
              style={{ background: "#fff", padding: "22px 70px" }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default Specialisation;
