import { Autocomplete, Button, Card, TextField } from "@mui/material";
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
  const [enrollmentNumbers, setEnrollmentNumbers] = useState([]);
  const [option, setOption] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enrollmentNumbers);
  };

  const onSelectChangeHandler = (e) => {
    setEnrollmentNumbers((prevState) => [...prevState, e.target.value]);
    console.log(e.target.value);
    console.log(enrollmentNumbers);
  };

  const onTextFieldChangeHandler = (e) => {
    if (e.target.value.length !== 9) return;

    console.log(e.target.value.length);
    setLoading(true);
    (async () => {
      await sleep(1e3);
      setLoading(false);
      setOption([{ enrollmentNumber: e.target.value, name: "Aditya Parmar" }]);
    })();
  };

  // const [open, setOpen] = useState(false);
  // const [options, setOptions] = useState([]);

  return (
    <Card sx={{ p: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Stack direction="row" alignItems="center" spacing={-7}>
          <Autocomplete
            multiple
            limitTags={100}
            id="enrollment-number-tags"
            loading={loading}
            options={option}
            onChange={onSelectChangeHandler}
            getOptionLabel={(option) => {
              return option.name;
            }}
            filterOptions={(x) => x}
            defaultValue={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Add member"
                placeholder="Enrollment Number"
                onChange={onTextFieldChangeHandler}
              />
            )}
            sx={{ width: "500px" }}
          />
          <Button type="submit">
            <SendIcon color="primary" />
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
