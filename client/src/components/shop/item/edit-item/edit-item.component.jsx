import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { api } from "../../../../services/api";
import { useCount } from "../../../../context/count";

export const EditItem = (props) => {
  const { cryptoId } = props;
  const { cryptoQuantity } = props;

  const { count, setCount } = useCount();
  const [open, setOpen] = React.useState(false);
  const [quantityValue, setQuantityValue] = React.useState(cryptoQuantity);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "225px",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const editCrypto = (id) => {
    api.put(`cryptos/${id}`, { quantity: quantityValue }).then((data) => {
      setCount(count + 1);
    });
  };
  const handleOnEditClick = () => {
    setOpen(false);
    editCrypto(cryptoId);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="warning"
        style={{ marginRight: 10 }}
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            value={quantityValue}
            id="outlined-basic"
            label="Quantity"
            type="number"
            onChange={(event) => {
              setQuantityValue(event.target.value);
            }}
            style={{ width: 150 }}
            variant="outlined"
            sx={{ marginRight: 1 }}
          />
          <Button
            variant="outlined"
            color="warning"
            style={{ height: 56 }}
            onClick={() => {
              handleOnEditClick();
            }}
          >
            EDIT
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
