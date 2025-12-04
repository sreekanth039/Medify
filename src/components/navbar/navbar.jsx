import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const isMyBookingPage = location.pathname === "/my-bookings";

  return (
    <header>
      <Box>
        <Typography
          variant="h3"
          fontSize={"14px"}
          fontWeight={400}
          color="#FFFFFF"
          bgcolor={"#2AA7FF"}
          textAlign={"center"}
          padding={"16px 8px"}
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
      <Box
        sx={{
          background:
            isSearchPage || isMyBookingPage
              ? "#fff"
              : "linear-gradient(#E7F0FF 100%, #E8F1FF 50%)",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            py={2}
          >
            <Link to="/">
              <img src={logo} alt="Logo" height={27} />
            </Link>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "center" }}
              className={[styles.navlinks, menuOpen && styles.active]}
              pt={{ xs: 12, md: 1 }}
              pb={{ xs: 4, md: 1 }}
              px={{ xs: 4, md: 0 }}
            >
              <Link>Find Doctors</Link>
              <Link to="/search">Hospitals</Link>
              <Link>Medicines</Link>
              <Link>Surgeries</Link>
              <Link>Software for Provider</Link>
              <Link>Facilities</Link>
              <Link to="/my-bookings">
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>

              {isMobile && (
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 32,
                    color: "#fff",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>

            {isMobile && (
              <IconButton onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </Box>
    </header>
  );
};

export default NavBar;
