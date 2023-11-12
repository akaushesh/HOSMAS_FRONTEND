import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button, Card, CardContent, FormHelperText, Grid } from "@mui/material";

export const PreferenceForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (new Set(preferences).size !== preferences.length) {
      return setError("Preferences must be unique");
    }

    console.log("Form submitted");
  };

  const handleChange = (event) => {
    const index = parseInt(event.target.name.slice(-1), 10);
    setPreferences((prevPreference) => {
      const newPreference = [...prevPreference];
      newPreference[index] = event.target.value;
      return newPreference;
    });
  };

  const options = ["A", "B", "C", "D", "O", "M", "P", "Q", "R"];
  const [preferences, setPreferences] = useState(() =>
    Array.from({ length: options.length }, () => "")
  );
  const [error, setError] = useState("");
  console.log(preferences);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container>
            {options.map((_, index) => (
              <Grid item xs={12} key={index}>
                <FormControl required variant="filled" sx={{ m: 1, minWidth: 300 }}>
                  <InputLabel id={`${index + 1}`}>Preference {index + 1}</InputLabel>
                  <Select
                    name={`Preference ${index}`}
                    value={preferences[index]}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            ))}
            <Button variant="contained" sx={{ m: 2, minWidth: 300 }} type="submit">
              Submit
            </Button>
            <FormHelperText error>{error}</FormHelperText>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};
