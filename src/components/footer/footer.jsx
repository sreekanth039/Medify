import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import pinterest from "../../assets/pinterest.png";
import logo from "../../assets/logo-icon.png";
import FooterLinks from "./footerlinks";

const Footer = () => {
  return (
    <Box bgcolor="primary.secondary" paddingInline={7} paddingBlock={3}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Stack
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              height={1}
            >
              <Box src={logo} component="img" />
              <Stack direction={"row"} spacing={1.5}>
                <Box src={fb} component="img" />
                <Box src={twitter} component="img" />
                <Box src={youtube} component="img" />
                <Box src={pinterest} component="img" />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Stack spacing={2}>
              <FooterLinks>About Us</FooterLinks>
              <FooterLinks>Our Pricing</FooterLinks>
              <FooterLinks>Our Gallery</FooterLinks>
              <FooterLinks>Appointment</FooterLinks>
              <FooterLinks>Privacy Policy</FooterLinks>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLinks>Orthology</FooterLinks>
              <FooterLinks>Neurology</FooterLinks>
              <FooterLinks>Dental Care</FooterLinks>
              <FooterLinks>Opthalmology</FooterLinks>
              <FooterLinks>Cardiology</FooterLinks>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <FooterLinks>About Us</FooterLinks>
              <FooterLinks>Our Pricing</FooterLinks>
              <FooterLinks>Our Gallery</FooterLinks>
              <FooterLinks>Appointment</FooterLinks>
              <FooterLinks>Privacy Policy</FooterLinks>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          color="#fff"
          borderTop={"1px solid rgba(255,255,255,0.1)"}
          paddingTop={3}
          marginTop={4}
          fontSize={"14px"}
          fontWeight={300}
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
