import { Autocomplete, Button, Card, CircularProgress, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/system";
import { useState } from "react";
import CustomModal from "src/components/customModal";
import { CustomerConfirmation } from "./customer-confirmation";
import axios from "axios";
import { URL } from "config";

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
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enrollmentNumber);
  };

  const onSelectChangeHandler = (event, value) => {
    if (!value) return;
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
      // await sleep(1e3);
      const jwt = sessionStorage.getItem("jwt");

      // const searchStudentConfig = {
      //   maxBodyLength: Infinity,
      //   headers: {
      //     Authorization: "Bearer " + jwt,
      //   },
      // };

      // const data = {
      //   rollno: "444444444",
      // };

      // const url = URL + "student/search/";

      // const searchStudentResponse = await axios.post(url, data, searchStudentConfig);
      // console.log(searchStudentResponse);

      var axios = require("axios");
      var data = '{\r\n    "rollno": "444444444"\r\n}';

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.hosmas.ccstiet.com/student/search/",
        headers: { Authorization: "Bearer " + jwt },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

      setLoading(false);
      setOption([{ enrollmentNumber: 102103500, name: "Aditya Parmar" }]);
    })();
  };

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
                label="Add member"
                placeholder="Enrollment Number"
                onChange={onTextFieldChangeHandler}
                value={enrollmentNumber}
              />
            )}
            sx={{ width: "600px" }}
          />
          <CustomModal open={openModal} onClose={onCloseModal}>
            <CustomerConfirmation
              name="Vibhav Shukla"
              enrollmentNumber="102103498"
              onClose={onCloseModal}
            />
          </CustomModal>
          <Button type="submit" onClick={onOpenModal}>
            <SendIcon color="primary" />
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
