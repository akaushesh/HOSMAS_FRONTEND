import React from "react";
import CustomModal from "./CustomModal";
import { Typography } from "@mui/material";

function ConfirmationModal(props) {
  return (
    <CustomModal>
      <Typography>{props.message}</Typography>
      <Stack direction="row" spacing={2}>
        <Button>No, leave it</Button>
        <Button>Yes, Delete it</Button>
      </Stack>
    </CustomModal>
  );
}

export default ConfirmationModal;
