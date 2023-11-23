import React from "react";
import CustomModal from "./CustomModal";
import { Typography, Grid, Button } from "@mui/material";

function ConfirmationModal({ open, onClose, message, yesMessage, noMessage, execFunction }) {
  return (
    <CustomModal open={open} onClose={onClose} maxWidth={400}>
      <Typography variant="h5" mb={5} textAlign="center">
        {message}
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Button variant="contained" onClick={execFunction} fullWidth>
            {yesMessage}
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" onClick={onClose} fullWidth>
            {noMessage}
          </Button>
        </Grid>
      </Grid>
    </CustomModal>
  );
}

export default ConfirmationModal;
