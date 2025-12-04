import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import tickBlue from "../../assets/tick-blue.png";
import patientcaring from "../../assets/patientcaring.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ParentCaring = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)" }}
      paddingBlock={3}
    >
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent={"space-between"}
          spacing={{ xs: 2, md: 2 }}
          alignItems="center"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Grid item xs={12} md={4}>
            <Box
              src={patientcaring}
              component="img"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: 500,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%", maxWidth: 620 }}>
              <Typography
                variant="h3"
                color="primary.main"
                fontSize={"17px"}
                fontWeight={600}
                lineHeight={"17px"}
              >
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography
                variant="h1"
                color="primary.secondary"
                fontSize={"48px"}
                fontWeight={600}
                lineHeight={"67px"}
              >
                Patient <span style={{ color: "#2AA7FF" }}>Caring</span>
              </Typography>
              <Typography
                variant="h3"
                color="#77829D"
                fontSize={"17px"}
                fontWeight={500}
                lineHeight={1.8}
                marginBlock={3}
              >
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <List
                sx={{
                  width: "100%",
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Box
                        src={tickBlue}
                        component={"img"}
                        width={"20px"}
                        height={"20px"}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Stay Updated About Your Health"
                      primaryTypographyProps={{
                        style: { color: "#1B3C74", fontWeight: 500 },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Box
                        src={tickBlue}
                        component={"img"}
                        width={"20px"}
                        height={"20px"}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Check Your Results Online"
                      primaryTypographyProps={{
                        style: { color: "#1B3C74", fontWeight: 500 },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Box
                        src={tickBlue}
                        component={"img"}
                        width={"20px"}
                        height={"20px"}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Manage Your Appointments"
                      primaryTypographyProps={{
                        style: { color: "#1B3C74", fontWeight: 500 },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ParentCaring;
