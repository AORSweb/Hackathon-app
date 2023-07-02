import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../sass/pages/ProjectTracker.css";
import Tracker from "../components/tracker";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Project Tracker</h1>
      <div className="tracker-container" style={{ direction: "row" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Week 1</Typography>
            <Typography sx={{ color: "text.secondary" }}>HTML</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Tracker />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Week 2</Typography>
            <Typography sx={{ color: "text.secondary" }}>CSS</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Tracker />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Week 3</Typography>
            <Typography sx={{ color: "text.secondary" }}>Javascript</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Tracker />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Week 4</Typography>
            <Typography sx={{ color: "text.secondary" }}>React</Typography>
          </AccordionSummary>
          <AccordionDetails className="details">
            <Tracker />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
