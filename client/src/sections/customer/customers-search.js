import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Button, Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";
import { useState } from "react";

export const CustomersSearch = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enrollmentNumber);
  };

  const onChangeHandler = (e) => {
    setEnrollmentNumber(e.target.value);
  };

  return (
    <Card sx={{ p: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Stack direction="row" alignItems="center" spacing={-8}>
          <OutlinedInput
            fullWidth
            value={enrollmentNumber}
            onChange={onChangeHandler}
            placeholder="Enrollment Number"
            startAdornment={
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </InputAdornment>
            }
            sx={{ maxWidth: 500 }}
          />
          <Button type="submit">
            <SendIcon color="primary" />
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
