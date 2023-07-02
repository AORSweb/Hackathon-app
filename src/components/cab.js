import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "../sass/components/cab.css";

const Cab = ({ onClick }) => {
  const [location, setLocation] = useState("");
  const [drop, setDrop] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
    return;
  };

  return (
    <div className="cabContainer">
      <h2 className="header">Book Cab</h2>
      <div className="form">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="location">Pickup Location</InputLabel>
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
          <TextField
            id="standard-basic"
            label="Drop location"
            variant="standard"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Travel date" />
            <TimeField label="Travel time" />
          </LocalizationProvider>
          <Button variant="contained">Submit</Button>
        </FormControl>
      </div>
      <button onClick={onClick} className="closeButton">
        X
      </button>
    </div>
  );
};

export default Cab;
