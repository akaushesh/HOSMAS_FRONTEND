import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export const TransferOwnershipConfirmation = ({ product, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const queryClient = useQueryClient();

  const onAccept = async () => {
    setLoading(true);
    const jwt = sessionStorage.getItem("jwt");
    const data = {
      id: product.id,
    };

    const acceptInvitationConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL + "student/invitation/accept/",
      headers: { Authorization: "Bearer " + jwt },
      data: data,
    };

    await axios(acceptInvitationConfig)
      .then(function (response) {
        queryClient.invalidateQueries(["getGroup"]);
        queryClient.invalidateQueries(["getInvitation"]);
        queryClient.invalidateQueries(["getProfile"]);
        onClose();
      })
      .catch(function (error) {
        if (error?.response?.data?.detail) setError(error?.response?.data?.detail);
        else setError("Something went wrong");
        console.log(error);
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
        If you accept your current preferences if set will be deleted and you will be added to{" "}
        {product?.group_leader_name}'s group.
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
