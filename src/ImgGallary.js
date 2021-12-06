import React from "react";
import Grid from "@material-ui/core/Grid";
import Stack from "@mui/material/Stack";

export default function ImgGallary(props) {
  return (
    <Grid item xs={12}>
      <img
        src={"images/product-large-a.jpg"}
        alt="product large a"
        className="productPhoto"
      />

      <Stack direction="row" spacing={3}>
        <img
          src={"images/product-small-a.jpg"}
          alt="product small a"
          className="smallerPhotos"
        />
        <img
          src={"images/product-small-b.jpg"}
          alt="product small b"
          className="smallerPhotos"
        />
        <img
          src={"images/product-small-c.jpg"}
          alt="product small c"
          className="smallerPhotos"
        />
        <img
          src={"images/product-small-d.jpg"}
          alt="product small d"
          className="smallerPhotos"
        />
      </Stack>
    </Grid>
  );
}
