import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "../../assets/our-families-banner.png";

const FamilyDetails = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)" }}
      paddingTop={3}
    >
      <Container maxWidth="xl">
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
                color="primary.main"
                fontSize={"17px"}
                fontWeight={600}
                lineHeight={"17px"}
              >
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </Typography>
              <Typography
                variant="h1"
                color="primary.secondary"
                fontSize={"48px"}
                fontWeight={600}
                lineHeight={"67px"}
              >
                Our Families
              </Typography>
              <Typography
                variant="h3"
                color="#77829D"
                fontSize={"17px"}
                fontWeight={500}
                lineHeight={1.8}
              >
                We will work with you to develop individualised care plans,
                including management of chronic diseases. If we cannot assist,
                we can provide referrals or advice about the type of
                practitioner you require. We treat all enquiries sensitively and
                in the strictest confidence.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              src={data}
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

export default FamilyDetails;
