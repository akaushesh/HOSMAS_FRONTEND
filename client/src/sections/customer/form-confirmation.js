import { LoadingButton } from "@mui/lab";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";
import { useRouter } from "next/router";
import { useState } from "react";

export const FormConfirmation = ({ onClose, preferences, retain }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const onReject = () => {
    onClose();
  };

  const onAccept = async () => {
    setLoading(true);
    const jwt = sessionStorage.getItem("jwt");

    if (retain) {
      const url = URL + "preferences/retain/";

      const retainConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      await axios(retainConfig)
        .then(function (response) {
          console.log(response.data);
          queryClient.invalidateQueries(["getAvailablePreferences"]);
          router.push("/preferences");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const url = URL + "preferences/createPreference/";

      const order = {};
      preferences.forEach((item, index) => {
        order[index + 1] = item.choice_id;
      });

      const data = {
        order: order,
      };

      const createPreferencesConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Authorization: "Bearer " + jwt,
        },
        data: data,
      };

      axios(createPreferencesConfig)
        .then(function (response) {
          console.log(response.data);
          queryClient.invalidateQueries(["getAvailablePreferences"]);
          router.push("/preferences");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setLoading(false);
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
