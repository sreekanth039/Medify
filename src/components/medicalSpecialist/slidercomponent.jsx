import { Box, Typography } from "@mui/material";
import React from "react";

const SliderComponent = ({ Img, Title, Designation }) => {
  return (
    <Box textAlign="center">
      <Box
        src={Img}
        component={"img"}
        width={1}
        sx={{
          boxShadow: "0 15px 55px -10px rgba(0,0,0,0.09)",
          borderRadius: "250px 240px 4px 4px",
        }}
        mb={2}
      />
      <Typography color="#1B3C74">{Title}</Typography>
      <Typography color="#2AA7FF">{Designation}</Typography>
    </Box>
  );
};

export default SliderComponent;
