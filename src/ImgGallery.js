import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Stack from "@mui/material/Stack";

export default function ImgGallery(props) {
  const [currentImg, setCurrentImg] = useState("images/product-large-a.jpg");

  return (
    <Grid item xs={12}>
      <img src={currentImg} alt="product large a" className="productPhoto" />

      <Stack
        direction="row"
        spacing={3}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 1,
          m: 1,
        }}
      >
        <img
          src={"images/product-small-a.jpg"}
          alt="product small a"
          className="smallerPhotos"
          onClick={() => setCurrentImg("images/product-large-a.jpg")}
        />
        <img
          src={"images/product-small-b.jpg"}
          alt="product small b"
          className="smallerPhotos"
          onClick={() => setCurrentImg("images/product-large-b.jpg")}
        />
        <img
          src={"images/product-small-c.jpg"}
          alt="product small c"
          className="smallerPhotos"
          onClick={() => setCurrentImg("images/product-large-c.jpg")}
        />
        <img
          src={"images/product-small-d.jpg"}
          alt="product small d"
          className="smallerPhotos"
          onClick={() => setCurrentImg("images/product-large-d.jpg")}
        />
      </Stack>
    </Grid>
  );
}
