import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";
import { Fragment, useState } from "react";

export const TransferOwnershipConfirmation = ({ member, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const queryClient = useQueryClient();

  const onAccept = async () => {
    setLoading(true);
    const url = URL + "student/group/transfer/";
    const jwt = sessionStorage.getItem("jwt");
    const data = {
      rollno: member?.rollno,
    };

    const transferOwnershipConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Authorization: "Bearer " + jwt,
      },
      data: data,
    };

    await axios(transferOwnershipConfig)
      .then(function (response) {
        queryClient.invalidateQueries(["getGroup"]);
        queryClient.invalidateQueries(["getProfile"]);
        onClose();
      })
      .catch(function (error) {
        if (error?.response?.data?.detail) {
          setError(error?.response?.data?.detail);
        } else {
          setError("Something went wrong");
        }
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
        If you accept you will no longer be the leader of your group. Its ownership will be
        transferred to {member?.name} with enrollment number {member?.rollno}.
      </Typography>
      <br />
      <Typography variant="body1" textAlign="justify">
        Are you sure you want to accept?
      </Typography>
      {error && (
        <Fragment>
          <br />
          <Typography variant="body1" color="error.main" textAlign="justify">
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
