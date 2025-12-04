import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import tick from "../../assets/tick.png";
import { useSearchParams } from "react-router-dom";
import sidebar from "../../assets/sidebar.png";
import BookingModal from "../bookingmodal/bookingmodal.jsx";
import AutohideSnackbar from "../autohidesnackbar/autohidesnackbar.jsx";
import HospitalCard from "../hospitalcard/hospitalcard.jsx";

const MedicalCenters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [state, setState] = useState(searchParams.get("state"));
  let [city, setCity] = useState(searchParams.get("city"));
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [bookingDetails, setBookingDetails] = useState({});
  let [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  useEffect(() => {
    const getStateCity = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city} `
        );
        const data = await response.json();
        console.log(data);
        setHospitals(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching states: ", error);
        setIsLoading(false);
      }
    };
    if (state && city) {
      getStateCity();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <Box sx={{ paddingTop: "100px" }}>
      <Container maxWidth="xl">
        {hospitals.length > 0 && (
          <Box mb={3}>
            <Typography
              component="h1"
              fontSize={24}
              lineHeight={1.1}
              mb={2}
              fontWeight={500}
            >
              {hospitals.length} medical centers available in{" "}
              <span style={{ textTransform: "capitalize" }}>
                {city?.toLocaleLowerCase()}
              </span>
            </Typography>

            <Stack direction="row" gap={3} alignItems="center">
              <img src={tick} alt="tick" width={24} height={22} />
              <Typography color="#787887" lineHeight={1.4}>
                Book appointments with minimum wait-time & verified doctor
                details
              </Typography>
            </Stack>
          </Box>
        )}

        <Stack alignItems="flex-start" direction={{ md: "row" }} spacing={3}>
          <Stack
            mb={{ xs: 4, md: 0 }}
            spacing={3}
            width={{ xs: 1, md: "calc(100% - 384px)" }}
            mr="24px"
          >
            {hospitals.length > 0 &&
              hospitals.map((hospital) => (
                <HospitalCard
                  key={hospital["Hospital Name"]}
                  details={hospital}
                  availableSlots={availableSlots}
                  handleBooking={handleBookingModal}
                />
              ))}

            {isLoading && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                Loading...
              </Typography>
            )}

            {!state && !city && !isLoading && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                Please select a state and city
              </Typography>
            )}

            {state && city && !isLoading && hospitals.length === 0 && (
              <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                No medical centers found for the selected location.
              </Typography>
            )}
          </Stack>

          <Box>
            <img src={sidebar} width={360} height="auto" alt="banner" />
          </Box>
        </Stack>
      </Container>

      <BookingModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        bookingDetails={bookingDetails}
        showSuccessMessage={setShowBookingSuccess}
      />

      <AutohideSnackbar
        open={showBookingSuccess}
        setOpen={setShowBookingSuccess}
        message="Booking Successful"
      />
    </Box>
  );
};

export default MedicalCenters;
