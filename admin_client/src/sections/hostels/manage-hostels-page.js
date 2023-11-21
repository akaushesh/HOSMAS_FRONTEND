import React, { useEffect, useState } from "react";
import { HostelList } from "./hostel-list";
import { Box, Stack, Button, Typography, TextField, Grid, MenuItem } from "@mui/material";
import Link from "next/link";
import HostelDetails from "./hostel-details";
import CustomModal from "src/components/CustomModal";
import { createHostel, getAllHostels } from "src/services/hostel";
import { useAuthContext } from "src/contexts/auth-context";

function ManageHostelsPage() {
  const [hostels, setHostels] = useState([]);
  const [createHostelForm, setCreateHostelForm] = useState({
    hostelName: "",
    gender: "",
    caretakerEmail: "",
    caretakerName: "",
  });
  const genders = ["Boys", "Girls"];
  const [openCreateHostelModal, setOpenCreateHostelModal] = useState();
  const { accessToken } = useAuthContext();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setCreateHostelForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCreateHostelFormSubmit = async () => {
    const hostelData = {
      name: createHostelForm.hostelName,
      gender: createHostelForm.gender === "Boys" ? "M" : "F",
      caretaker_email: createHostelForm.caretakerEmail,
      caretaker_name: createHostelForm.caretakerName,
    };

    try {
      const res = await createHostel(hostelData, accessToken);
      if (res.status === 201) {
        setHostels((prev) => {
          return [
            ...prev,
            { id: res?.id, name: createHostelForm.hostelName, gender: createHostelForm.gender },
          ];
        });
        setCreateHostelForm({
          hostelName: "",
          gender: "",
          caretakerEmail: "",
          caretakerName: "",
        });
        setOpenCreateHostelModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await getAllHostels(accessToken);
        setHostels(res?.data);
        console.log(res);
      };

      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        px: 10,
      }}
    >
      <HostelList hostels={hostels} />
      <Stack alignItems="center" mt={7}>
        <Button onClick={() => setOpenCreateHostelModal(true)}>+ Add Hostel</Button>
      </Stack>
      <CustomModal
        open={openCreateHostelModal}
        onClose={() => setOpenCreateHostelModal(false)}
        minWidth="200px"
      >
        <Stack alignItems="center">
          <Typography mb={2}>Create a Hostel</Typography>
          <Grid container spacing={3} justifyContent="center" mb={3}>
            <Grid item xs={12} md={6}>
              <TextField
                name="hostelName"
                label="Name"
                fullWidth
                value={createHostelForm.name}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="gender"
                select
                label="Gender"
                fullWidth
                value={createHostelForm.gender}
                onChange={handleFormChange}
              >
                {genders.map((gender) => {
                  return (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Caretaker Email"
                name="caretakerEmail"
                fullWidth
                value={createHostelForm.caretakerEmail}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Caretaker Name"
                fullWidth
                name="caretakerName"
                value={createHostelForm.caretakerName}
                onChange={handleFormChange}
              />
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleCreateHostelFormSubmit}>
            Submit
          </Button>
        </Stack>
      </CustomModal>
    </Box>
  );
}

export default ManageHostelsPage;
