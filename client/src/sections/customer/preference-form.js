import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { useRouter } from "next/router";

export const PreferenceForm = ({ sx, availableChoices = [], currentPreferences = [] }) => {
  const { user } = useAuth();
  const isLeader = !user?.group || user?.email === user?.group?.leader_email;

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/preferences/edit");
  };

  const preferences =
    currentPreferences?.length > 0
      ? currentPreferences
      : Array.from({ length: availableChoices.length }, () => "");

  return (
    <Card sx={sx}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h4" paddingBottom="1rem">
            Your Preferences
          </Typography>
          {availableChoices.map((_, index) => (
            <Grid container justifyContent="center" alignItems="center" key={index}>
              <TextField
                fullWidth
                label={`Preference ${index + 1}`}
                name="CGPA"
                disabled
                SelectProps={{ native: true }}
                value={preferences[index]?.room_type_choice || ""}
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          ))}
          <Grid container justifyContent="left">
            <FormControlLabel control={<Checkbox disabled />} label="Retain current room instead" />
          </Grid>

          <Button
            disabled={!isLeader}
            variant="contained"
            sx={{ m: 1, width: "100%" }}
            type="submit"
          >
            Edit
          </Button>
          {!isLeader && (
            <FormHelperText>
              Only your group leader {user.group.leader_name} can fill this form
            </FormHelperText>
          )}
        </Grid>
      </form>
    </Card>
  );
};
