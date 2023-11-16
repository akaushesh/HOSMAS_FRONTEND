import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const CustomerConfirmation = ({ name = "", enrollmentNumber = "", onClose }) => {
  const onAccept = () => {
    // Sent Request to user
    console.log("SENT");
  };
  const onReject = () => {
    onClose();
  };

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="2rem">
        Confirmation
      </Typography>
      <Stack marginBottom="2rem">
        <Typography variant="body1">Name: {name}</Typography>
        <Typography variant="body1">Enrollment Number: {enrollmentNumber}</Typography>
      </Stack>

      <Typography variant="body1" textAlign="justify">
        Once this request is sent, it cannot be unsent. Are you sure you want this person to join
        your group?
      </Typography>

      <Grid container marginTop="3rem" justifyContent="space-between" alignItems="center">
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
