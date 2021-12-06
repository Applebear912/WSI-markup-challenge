import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0)"
      : "rgba(0, 0, 0, 0)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const questions = [
  "Is this product untreated fir or has it been treated with something?",
  "Is this ADA wheelchair accessible?",
  "You suggest treating the inside with food grade butcher block oil?",
  "How tall are the side boards?",
];
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, 0)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Product information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Material:</b> Solid fir wood and metal hardware <br />
            <b>Color:</b> natural wood Overall Size: 47.5x30.1x23.2 Inch Max.
            Load
            <br />
            <b>Bearing:</b> 380lb Side Board Thickness: 0.8" <br />
            <b>Assembly:</b> Screwdriver <br />
            <b>Required Assemble Introduction Include:</b> Yes
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Customer questions & answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Autocomplete
            id="questions"
            disableClearable
            options={questions.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search answered questions"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Customer reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Avatar alt="avatar" src="images/ping-avatar.jpg" />
          <Typography className="review">
            Very easy to assemble with the right tools! The picture shows the
            only tools I needed- my power screwdriver, a soft mallet and a bar
            of soap. For those who don't know, rubbing your screws with soap
            makes it easier to screw them in. For Step 3 where you put the
            bottom boards into their slots, rub soap on the edges of the boards
            and tap with the mallet- they go right in!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
