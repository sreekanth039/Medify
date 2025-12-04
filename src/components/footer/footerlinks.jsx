import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Stack } from "@mui/material";
const FooterLinks = ({ children }) => {
  return (
    <Box>
      <Stack
        direction={"row"}
        color={"#fff"}
        gap={0.5}
        fontWeight={300}
        fontSize={14}
      >
        <KeyboardArrowRightIcon />
        {children}
      </Stack>
    </Box>
  );
};

export default FooterLinks;
