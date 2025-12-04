import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import mobile from "../../assets/mobile.jpg";
import arrow from "../../assets/arrow.png";
import googleplay from "../../assets/google_play.png";
import apple from "../../assets/apple_store.png";

const DownloadApp = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)" }}
      paddingTop={3}
    >
      <Container>
        <Grid container spacing={5} alignItems={"center"}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component={"img"}
              src={mobile}
              sx={{
                width: { xs: "70%", md: "80%" },
                maxWidth: 420,
                height: "auto",
                display: "block",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              position={"relative"}
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Download the <br />
                <span style={{ color: "#2AA7FF" }}>Medify</span> App
              </Typography>
              <Box
                position={"absolute"}
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                left={0}
                top={50}
              />
              <Box>Get the link to download the app</Box>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <TextField
                  placeholder="Enter phone number"
                  sx={{
                    border: "1px solid #F0F0F0",
                    flex: 1,
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    },
                  }}
                  required
                />
                <Button variant="contained" size="large" disableElevation>
                  Send SMS
                </Button>
              </Box>
            </Box>
            <Box
              mt={5}
              mb={5}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                width: "100%",
              }}
            >
              <Box
                component={"img"}
                src={googleplay}
                sx={{ width: { xs: "100%", md: "auto" }, height: "auto" }}
              />
              <Box
                component={"img"}
                src={apple}
                sx={{ width: { xs: "100%", md: "auto" }, height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
