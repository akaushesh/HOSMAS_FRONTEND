import { useState } from "react";

export const MemberAssingn = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onAccept = async () => {
    onClose();
  };
  const onReject = () => {
    onClose();
  };

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Assign room to
      </Typography>

      <Typography variant="body1" textAlign="justify">
        If you leave your group you will only be able to rejoin it if you receive another joining
        request.
      </Typography>
      <br />
      <Typography variant="body1" textAlign="justify">
        Are you sure you want to leave?
      </Typography>
      {error && (
        <Fragment>
          <br />
          <Typography variant="body1" textAlign="justify" color="error.main">
            {error}
          </Typography>
        </Fragment>
      )}

      <Grid container marginTop="1rem" justifyContent="space-between" alignItems="center">
        <Grid item xs={5.5}>
          <LoadingButton loading={loading} onClick={onAccept} variant="contained" fullWidth>
            Accept
          </LoadingButton>
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
