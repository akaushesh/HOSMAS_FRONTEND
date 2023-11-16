import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { URL } from "config";
import { useState } from "react";

export const CustomerConfirmation = ({ name = "", enrollmentNumber = "", onClose }) => {
  const [error, setError] = useState("");

  const onAccept = async () => {
    try {
      const jwt = sessionStorage.getItem("jwt");

      const sendInvitationConfig = {
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      console.log(enrollmentNumber);
      const data = {
        rollno: enrollmentNumber,
      };

      const url = URL + "student/invitation/send/";

      const sendInvitationResponse = await axios.post(url, data, sendInvitationConfig);
      console.log(sendInvitationResponse);
    } catch (err) {
      setError(err?.response?.data?.detail);
    }
  };

  const onReject = () => {
    onClose();
  };

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Confirmation
      </Typography>

      <Typography variant="body1">
        You are sending a group joining request to {name} with enrollment number {enrollmentNumber}.
      </Typography>

      <br />

      <Typography variant="body1">
        Once this request is sent, it cannot be unsent. Are you sure you want this person to join
        your group?
      </Typography>
      <Typography variant="body1" marginTop="1rem" color="error.main">
        {error}
      </Typography>

      <Grid container marginTop="2rem" justifyContent="space-between" alignItems="center">
        <Grid item xs={5.5}>
          <Button onClick={onAccept} variant="contained" fullWidth>
            Accept
          </Button>
        </Grid>
        <Grid item xs={5.5}>
          <Button onClick={onReject} variant="contained" fullWidth>
            Reject
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
