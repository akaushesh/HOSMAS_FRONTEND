import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";
import { Fragment, useState } from "react";
import { useAuth } from "src/hooks/use-auth";

export const LeaveConfirmation = ({ onClose }) => {
  const auth = useAuth();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onAccept = async () => {
    setLoading(true);
    const jwt = sessionStorage.getItem("jwt");

    var leaveGroupConfig = {
      method: "patch",
      maxBodyLength: Infinity,
      url: URL + "student/group/leave/",
      headers: {
        Authorization: "Bearer " + jwt,
      },
    };

    await axios(leaveGroupConfig)
      .then(function (response) {
        queryClient.invalidateQueries(["getGroup"]);
        onClose();
      })
      .catch(function (error) {
        setError(error?.response?.data?.detail);
      });
    setLoading(false);
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
