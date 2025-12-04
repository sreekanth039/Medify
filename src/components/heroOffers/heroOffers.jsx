import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctorsimg.png";
import pharmacyIcon from "../../assets/Labs.png";
import hospitalIcon from "../../assets/Hospitals.png";
import capsuleIcon from "../../assets/Medicalstore.png";
import ambulanceIcon from "../../assets/Ambulance.png";

import { useMemo } from "react";

const HeroOffers = () => {
  const Services = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box mt={5}>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <img src={service.img} alt={service.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroOffers;
