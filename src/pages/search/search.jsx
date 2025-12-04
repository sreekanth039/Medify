import React from "react";
import NavBar from "../../components/navbar/navbar";
import FAQs from "../../components/faqs/faqs";
import MedicalCenters from "../../components/medicalcenters/medicalcenters.jsx";
import { Box, Container, Stack } from "@mui/material";
import SearchHospitals from "../../components/searchhospitals/searchhospitals";

const Search = () => {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          background: "linear-gradient(#2AA7FF 100%, #0C8CE5 50%)",
          borderRadius: "0 0 24px 24px",
          position: "relative",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            maxWidth: 1100,
            mb: "50px",
            p: { xs: 2, md: 3 },
            borderRadius: "15px",
            transform: "translatey(50px)",
            boxShadow: "0 0 12px rgba(0,0,0,0.1)",
            bgcolor: "#fff",
          }}
        >
          <SearchHospitals />
        </Container>
      </Box>
      <MedicalCenters />
      <FAQs />
    </Box>
  );
};

export default Search;
