import { Autocomplete, Button, Card, CircularProgress, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";
import { useState } from "react";
import CustomModal from "src/components/customModal";
import { CustomerConfirmation } from "./customer-confirmation";
import axios from "axios";
import { URL } from "config";
import { useQueryClient } from "@tanstack/react-query";

export const CustomersSearch = () => {
  const queryClient = useQueryClient();

  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [option, setOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [infoText, setInfoText] = useState("Enter complete enrollment number");
  const [openModal, setOpenModal] = useState(false);
  const [entryIsCorrect, setEntryIsCorrect] = useState(false);

  const user = queryClient.getQueryData(["getProfile"]);
  const isLeader = !user?.group || user?.user?.email === user?.group?.leader_email;

  const onOpenModal = () => {
    if (entryIsCorrect) setOpenModal(true);
    else setInfoText("Invalid entry cannot proceed");
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onOpenModal();
  };

  const onSelectChangeHandler = (event, value) => {
    if (!value) return;
    setEnrollmentNumber(value.enrollmentNumber);
    setEntryIsCorrect(true);
  };

  const onTextFieldChangeHandler = (e) => {
    if (e.target.value.length !== 9) {
      setInfoText("Enter complete enrollment number");
      setEntryIsCorrect(false);
      if (option.size !== 0) {
        setOption([]);
        return;
      }
      return;
    }

    setLoading(true);
    (async () => {
      try {
        const jwt = sessionStorage.getItem("jwt");

        const searchStudentConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const data = {
          rollno: e.target.value,
        };

        const url = URL + "student/search/";

        const searchStudentResponse = await axios.post(url, data, searchStudentConfig);

        setOption([
          {
            enrollmentNumber: searchStudentResponse?.data?.rollno,
            name: searchStudentResponse?.data?.name,
          },
        ]);
      } catch (err) {
        if (err?.response?.data?.detail) setInfoText(err?.response?.data?.detail);
        else setInfoText("No user found");
      }
      setLoading(false);
    })();
  };

  return (
    <Card sx={{ p: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Stack direction="row" alignItems="center">
          <Autocomplete
            disabled={!isLeader}
            id="enrollment-number-tags"
            loading={loading}
            options={option}
            onChange={onSelectChangeHandler}
            getOptionLabel={(option) => {
              if (!option) return "";
              return option.name;
            }}
            filterOptions={(x) => x}
            loadingText={
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ height: "auto" }}
              >
                <Grid item xs={3}>
                  <CircularProgress size={16} />
                </Grid>
              </Grid>
            }
            noOptionsText={infoText}
            defaultValue=""
            isOptionEqualToValue={() => true}
            renderInput={(params) => (
              <TextField
                {...params}
                label={isLeader ? "Add member" : "Only leader can add members"}
                placeholder="Enrollment Number"
                onChange={onTextFieldChangeHandler}
                value={enrollmentNumber}
              />
            )}
            sx={{ width: "600px" }}
          />
          <CustomModal open={openModal} onClose={onCloseModal}>
            <CustomerConfirmation
              name={option[0]?.name}
              enrollmentNumber={option[0]?.enrollmentNumber}
              onClose={onCloseModal}
            />
          </CustomModal>
          <Button disabled={!isLeader} type="submit">
            <SendIcon color="primary" />
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
