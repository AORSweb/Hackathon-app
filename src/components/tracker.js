import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../sass/components/tracker.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Tracker = () => {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState();
  const [description, setDescription] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [review, setReview] = useState("");
  const [document, setDocument] = useState();

  return (
    <div>
      <FormControl variant="standard" className="tracker-form-container">
        <div className="tracker-form">
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="field"
          />

          <TextField
            id="standard-basic"
            label="Progress"
            variant="standard"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className="field"
          />
          <Input
            type="file"
            className="field"
            onChange={(e) => setDocument(e.target.files[0])}
          >
            Check
          </Input>
          <div className="rev-sugg-group">
            <label>Description</label>
            <TextareaAutosize
              id="standard-basic"
              label="Suggestions"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description"
              placeholder="Description"
            />
          </div>
        </div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>
          Mentor's comments
        </h2>
        <div className="rev-sugg">
          <div className="rev-sugg-group">
            <label>Suggestion</label>
            <TextareaAutosize
              id="standard-basic"
              label="Suggestions"
              variant="standard"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="suggestions"
              placeholder="Reviews"
            />
          </div>
          <div className="review">
            <label id="location">Review</label>
            <Select
              labelId="location"
              id="demo-simple-select-standard"
              label="Location"
              className="select"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            >
              <MenuItem value={"Extrordinary"}>Extrordinary</MenuItem>
              <MenuItem value={"Met Expectations"}>Met Expectations</MenuItem>
              <MenuItem value={"Didn't met expectations"}>
                Didn't met expectations
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="button">
          <Button variant="contained">Submit</Button>
        </div>
      </FormControl>
    </div>
  );
};

export default Tracker;
