import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export const FormConfirmation = ({ name = "", enrollmentNumber = "", onClose }) => {
  const onAccept = () => {
    // Sent Request to user
    console.log("SENT");
  };
  const onReject = () => {
    onClose();
  };

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Confirmation
      </Typography>

      <Typography variant="body1" textAlign="justify">
        If you submit you can still change your preferences till the form is open. Your preferences
        will be autolocked once the time ends.
      </Typography>
      <br />
      <Typography variant="body1" textAlign="justify">
        Are you sure you want to submit?
      </Typography>

      <Grid container marginTop="1rem" justifyContent="space-between" alignItems="center">
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
