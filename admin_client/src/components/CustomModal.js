import React from "react";
import { Modal, Box } from "@mui/material";

function CustomModal({ open, onClose, maxWidth, minWidth, children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: maxWidth ? maxWidth : "auto",
    width: "100%",
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 2,
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ overflow: "auto" }}>
      <Box sx={{ ...style }}>{children}</Box>
    </Modal>
  );
}

export default CustomModal;
