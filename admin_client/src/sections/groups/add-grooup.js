import { LoadingButton } from "@mui/lab";
import { Button, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const TextFieldComponent = ({ label, value, onChange }) => (
  <Grid container justifyContent="center" alignItems="center">
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      name={label}
      sx={{ m: 1, width: "100%" }}
    />
  </Grid>
);

export const AddGroup = ({ onClose }) => {
  const [leader, setLeader] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onChangeHandler = (setter) => (e) => {
    setter(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      (leader.length !== 9 && leader.length !== 0) ||
      (member1.length !== 9 && member1.length !== 0) ||
      (member2.length !== 9 && member2.length !== 0) ||
      (member3.length !== 9 && member3.length !== 0)
    ) {
      return setFormError("Enrollment number should be nine digits");
    }

    console.log(leader, member1, member2, member3);
    setFormError("");
    setLeader("");
    setMember1("");
    setMember2("");
    setMember3("");
    setLoading(false);
    // onClose();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid padding={1} container justifyContent="center" alignItems="center">
        <Typography variant="h4" paddingBottom="1rem">
          Create Group
        </Typography>

        <TextFieldComponent
          label="Group leader name"
          value={leader}
          onChange={onChangeHandler(setLeader)}
        />
        <TextFieldComponent
          label="Group member 1"
          value={member1}
          onChange={onChangeHandler(setMember1)}
        />
        <TextFieldComponent
          label="Group member 2"
          value={member2}
          onChange={onChangeHandler(setMember2)}
        />
        <TextFieldComponent
          label="Group member 3"
          value={member3}
          onChange={onChangeHandler(setMember3)}
        />
        {formError && (
          <Typography textAlign="left" marginTop={2} color="error.main">
            {formError}
          </Typography>
        )}
        <LoadingButton
          loading={loading}
          variant="contained"
          sx={{ m: 1, width: "100%" }}
          type="submit"
        >
          Create
        </LoadingButton>
      </Grid>
    </form>
  );
};
