import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import "../sass/components/GuestHouse.css";
import dayjs from "dayjs";

const GuestHouse = ({ onClick }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState([dayjs("2022-04-12"), dayjs("2022-04-17")]);

  const handleChange = (e) => {
    setLocation(e.target.value);
    return;
  };
  return (
    <div className="guest-house-container">
      <h2 className="header">Book Rooms</h2>
      <div className="form">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="location">Location</InputLabel>
          <Select
            labelId="location"
            id="demo-simple-select-standard"
            value={location}
            onChange={handleChange}
            label="Location"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
            <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          </Select>

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            className="dateRange"
          >
            <DateRangePicker
              value={date}
              localeText={{ start: "Check-in", end: "Check-out" }}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
          <Button variant="contained">Submit</Button>
        </FormControl>
      </div>
      <button onClick={onClick} className="closeButtonB">
        X
      </button>
    </div>
  );
};

export default GuestHouse;
