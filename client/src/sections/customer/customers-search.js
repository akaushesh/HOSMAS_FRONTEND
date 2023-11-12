import { Autocomplete, Button, Card, CircularProgress, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";
import { useState } from "react";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export const CustomersSearch = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [option, setOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [infoText, setInfoText] = useState("Enter complete enrollment number");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enrollmentNumber);
  };

  const onSelectChangeHandler = (event, value) => {
    console.log(value);
    setEnrollmentNumber(value.enrollmentNumber);
  };

  const onTextFieldChangeHandler = (e) => {
    if (e.target.value.length !== 9) {
      if (option.size !== 0) {
        setOption([]);
        return;
      }
      return;
    }

    setLoading(true);
    (async () => {
      await sleep(1e3);
      setLoading(false);
      setOption([{ enrollmentNumber: 102103500, name: "Aditya Parmar" }]);
    })();
  };

  // const [open, setOpen] = useState(false);
  // const [options, setOptions] = useState([]);

  return (
    <Card sx={{ p: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Stack direction="row" alignItems="center">
          <Autocomplete
            id="enrollment-number-tags"
            loading={loading}
            options={option}
            onChange={onSelectChangeHandler}
            getOptionLabel={(option) => {
              if (!option) return "";
              return option.name;
            }}
            filterOptions={(x) => x}
            loadingText={<CircularProgress />}
            noOptionsText={infoText}
            defaultValue=""
            isOptionEqualToValue={() => true}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Add member"
                placeholder="Enrollment Number"
                onChange={onTextFieldChangeHandler}
                value={enrollmentNumber}
              />
            )}
            sx={{ width: "600px" }}
          />
          <Button type="submit">
            <SendIcon color="primary" />
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
