import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import CustomModal from "src/components/customModal";
import { FormConfirmation } from "./form-confirmation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";

export const EditPreferenceForm = (props) => {
  const { sx } = props;
  const [openModal, setOpenModal] = useState(false);
  const [retain, setRetain] = useState(false);
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["getProfile"]);
  const isLeader = !user?.group || user?.email === user?.group?.leader_email;

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!retain) {
      if (new Set(preferences).size !== preferences.length) {
        return setError("Preferences must be unique");
      }
    }

    setError("");
    setOpenModal(true);
  };

  const handleChange = (event) => {
    const index = parseInt(event.target.name.slice(-1), 10);
    setPreferences((prev) => {
      const newPreferences = [...prev];
      newPreferences[index] = event.target.value || "";
      return newPreferences;
    });
  };

  const handleRetentionChange = (event) => {
    setRetain(event.target.checked);
  };

  const { data: availableChoices, isLoading } = useQuery({
    queryFn: async () => {
      const url = URL + "preferences/getChoices/";
      const jwt = sessionStorage.getItem("jwt");

      const getAvailableChoicesConfig = {
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const availableChoicesResponse = await axios.get(url, getAvailableChoicesConfig);
      return availableChoicesResponse?.data;
    },
    queryKey: ["getAvailablePreferences"],
  });

  let finalAvailableChoices = [];
  if (availableChoices) finalAvailableChoices = availableChoices;

  const [preferences, setPreferences] = useState(
    Array.from({ length: finalAvailableChoices.length }, () => "")
  );

  const [error, setError] = useState("");

  return (
    <Card sx={sx}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h4" paddingBottom="1rem">
            Your Preferences
          </Typography>
          {finalAvailableChoices.map((_, index) => (
            <Grid container justifyContent="center" alignItems="center" key={index}>
              <FormControl required variant="filled" sx={{ m: 1, width: "100%" }}>
                <InputLabel id={`${index + 1}`}>Preference {index + 1}</InputLabel>
                <Select
                  name={`Preference ${index}`}
                  onChange={handleChange}
                  value={preferences[index] || ""}
                  disabled={!isLeader || retain}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {finalAvailableChoices.map((choice, index) => (
                    <MenuItem key={index} value={choice}>
                      {choice.room_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
          <Grid container justifyContent="left">
            <FormControlLabel
              control={<Checkbox onChange={handleRetentionChange} />}
              label="Retain current room instead"
            />
          </Grid>

          <Button
            disabled={!isLeader}
            variant="contained"
            sx={{ m: 1, width: "100%" }}
            type="submit"
          >
            Submit
          </Button>
          {!isLeader && (
            <FormHelperText>
              Only your group leader {user.group.leader_name} can fill this form
            </FormHelperText>
          )}
          <CustomModal open={openModal} onClose={onCloseModal}>
            <FormConfirmation preferences={preferences} retain={retain} onClose={onCloseModal} />
          </CustomModal>
          <FormHelperText error>{error}</FormHelperText>
        </Grid>
      </form>
    </Card>
  );
};
