import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  width: 500,
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 24,
  p: 4,
};

export default function AddToCartModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={"images/button-add-to-cart.jpg"}
          alt="addToCart"
          className="addToCart"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Added to cart!
          </Typography>
          <Button type="submit">Checkout Now</Button>
        </Box>
      </Modal>
    </div>
  );
}
