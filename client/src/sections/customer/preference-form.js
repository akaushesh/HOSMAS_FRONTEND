import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import CustomModal from "src/components/customModal";
import { FormConfirmation } from "./form-confirmation";
import { useQuery } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";

export const PreferenceForm = (props) => {
  const { sx } = props;
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  // const submitPreferences = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    if (new Set(preferences).size !== preferences.length) {
      return setError("Preferences must be unique");
    }

    setError("");
    console.log(preferences);
    setOpenModal(true);
  };

  const handleChange = (event) => {
    const index = parseInt(event.target.name.slice(-1), 10);
    preferences[index] = event.target.value;
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

  const { data: currentPreferences } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/getPreference/";
        const jwt = sessionStorage.getItem("jwt");

        const getCurrentPreferencesConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getCurrentPreferencesResponse = await axios.get(url, getCurrentPreferencesConfig);
        console.log(getCurrentPreferencesResponse);
        return getCurrentPreferencesResponse?.data;
      } catch (err) {
        console.log(err);
        return [];
      }
    },
    queryKey: ["getCurrentPreferences"],
    staleTime: Infinity,
  });
  console.log(currentPreferences);

  let finalAvailableChoices = [];
  if (availableChoices) finalAvailableChoices = availableChoices;
  const preferences =
    currentPreferences?.size > 0
      ? currentPreferences
      : Array.from({ length: finalAvailableChoices.length }, () => "");

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
              <FormControl required variant="filled" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id={`${index + 1}`}>Preference {index + 1}</InputLabel>
                <Select
                  name={`Preference ${index}`}
                  onChange={handleChange}
                  defaultValue={preferences[index]}
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
          <Button variant="contained" sx={{ m: 1, minWidth: 300 }} type="submit">
            Submit
          </Button>
          <CustomModal open={openModal} onClose={onCloseModal}>
            <FormConfirmation onClose={onCloseModal} />
          </CustomModal>
          <FormHelperText error>{error}</FormHelperText>
        </Grid>
      </form>
    </Card>
  );
};
