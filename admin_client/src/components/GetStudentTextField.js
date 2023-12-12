import { TextField, Autocomplete } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAuth } from "src/hooks/use-auth";
import { searchStudent } from "src/services/others";

function GetStudentTextField(props) {
  const [student, setStudent] = useState([]);
  const [infoText, setInfoText] = useState("Enter a valid Roll no.");
  const { accessToken } = useAuth();

  useEffect(() => {
    console.log(student);
  }, [student]);

  const handleRollNoChange = async (e) => {
    const inputValue = e.target.value;
    if (inputValue.length === 9) {
      try {
        const res = await searchStudent(inputValue, accessToken);
        if (res.status === 200) {
          setStudent([res.data]);
        }
      } catch (err) {
        setInfoText(err?.response?.data?.detail || "Enter a valid Roll no.");
        console.error(err);
      }
    }
  };

  useEffect(() => {
    console.log(student);
  }, [student]);

  useEffect(() => {
    console.log(infoText);
  }, [infoText]);

  return (
    <Autocomplete
      id="roll-no"
      name="roll-no"
      options={student}
      onChange={props?.onChange}
      getOptionLabel={(student) => student?.name || ""}
      renderInput={(params) => (
        <TextField {...params} onChange={handleRollNoChange} label={props?.label} />
      )}
      defaultValue=""
      isOptionEqualToValue={(option, value) => option.rollno == value.rollno}
      filterOptions={(x) => x}
      fullWidth={props?.fullWidth}
      sx={props?.sx}
      noOptionsText={infoText}
    />
  );
}

export default GetStudentTextField;
