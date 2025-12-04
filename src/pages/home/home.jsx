import { Box, Container, Stack } from "@mui/material";
import React from "react";
import NavBar from "../../components/navbar/navbar";
import HeroSection from "../../components/herosection/herosection";
import OfferSection from "../../components/offersection/offersection";
import Specialisation from "../../components/specialisation/specialisation";
import MedicalSpecialist from "../../components/medicalSpecialist/medicalSpecialist";
import ParentCaring from "../../components/parentcaring/parentcaring";
import Blog from "../../components/blog/blog";
import FamilyDetails from "../../components/familydetails/familydetails";
import FAQs from "../../components/faqs/faqs";
import SearchHospitals from "../../components/searchhospitals/searchhospitals";
import HeroOffers from "../../components/heroOffers/heroOffers";

const Home = () => {
  return (
    <Box>
      <Box>
        <NavBar />
        <HeroSection />
        <Container>
          <Stack
            p={{ xs: 2.5, md: 4 }}
            mt={{ xs: -2, md: 0, lg: -25 }}
            position={"relative"}
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospitals />
            <HeroOffers />
          </Stack>
        </Container>
      </Box>
      <OfferSection />
      <Specialisation />
      <MedicalSpecialist />
      <ParentCaring />
      <Blog />
      <FamilyDetails />
      <FAQs />
    </Box>
  );
};

export default Home;
