import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchHospitals = () => {
  let [states, setState] = useState([]);
  let [cities, setCity] = useState([]);
  let [formData, setFormData] = useState({ state: "", city: "" });
  let navigate = useNavigate();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  useEffect(() => {
    const getStates = async () => {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/states`
        );
        const data = await response.json();
        console.log(data);
        setState(data);
      } catch (error) {
        console.error("Error while fetching states: ", error);
      }
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      setCity([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        const data = await response.json();
        console.log(data);
        setCity(data);
      } catch (error) {
        console.error("Error while fetching cities: ", error);
      }
    };

    if (formData.state != "") {
      getCities();
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        sx={{
          border: "1px solid #F0F0F0",
          borderRadius: "8px",
          minWidth: 200,
          width: "100%",
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>

        {states.map((state) => {
          return (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          );
        })}
      </Select>
      <Select
        displayEmpty
        id="city"
        value={formData.city}
        name="city"
        onChange={handleChange}
        sx={{
          border: "1px solid #F0F0F0",
          borderRadius: "8px",
          minWidth: 200,
          width: "100%",
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => {
          return (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          );
        })}
      </Select>
      <Button
        id="searchBtn"
        variant="contained"
        size="large"
        type="submit"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchHospitals;
