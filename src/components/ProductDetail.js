import * as React from "react";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Accordion from "./Accordion.js";
import AddToCartModal from "./AddToCartModal.js";

const useStyles = makeStyles(() => ({
  hover1: {
    color: "#161513",
    "&:hover": {
      color: "#f0CC71",
    },
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);

  return (
    <div className="productDetail">
      <h2>Raised Garden Bed 48x30x24 Inch - Elevated Wooden Planter</h2>
      <h5>ONLY AT WILLIAMS SONOMA</h5>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <p>
        Rustic and natural style planter bed has 8.7" depth, provides enough
        depth for plants and vegetables to breathe, grow healthily and also less
        frequent watering required. Ideal for planting vegetables, flowers,
        herbs in the backyard, patio, deck, and balcony, etc.
      </p>
      <ul>
        <li>Exquisite Raised Garden Bed</li>
        <li>Quality Material Selected</li>
        <li>Durable Construction</li>
        <li>Amazingly Easy Installation</li>
        <li>Ergonomic Height Structure</li>
      </ul>
      <h2>$19.95</h2>
      <TextField id="outlined-basic" label="quantities" variant="outlined" />
      <AddToCartModal />

      <Divider />
      <Accordion />
    </div>
  );
}
