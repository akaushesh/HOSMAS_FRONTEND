import React from "react";
import { Modal, Box } from "@mui/material";

function CustomModal({ open, onClose, children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "min(90%, 25rem)",
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 2,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...style }}>{children}</Box>
    </Modal>
  );
}

export default CustomModal;
