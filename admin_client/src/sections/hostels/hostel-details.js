import React, { useState, useEffect } from "react";
import {
  Card,
  Unstable_Grid2 as Grid,
  Typography,
  Box,
  Container,
  CardContent,
  Stack,
  Switch,
  Button,
} from "@mui/material";
import { HostelRoomList } from "./hostel-room-list";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { useAuthContext } from "src/contexts/auth-context";
import { deleteHostel, getHostel } from "src/services/hostel";
import { useRouter } from "next/router";
import ConfirmationModal from "src/components/ConfirmationModal";

function HostelDetails({ hostelId }) {
  const { accessToken } = useAuthContext();
  const router = useRouter();

  const [hostelData, setHostelData] = useState({
    id: 0,
    hostelName: "",
    caretakerEmail: "",
    caretakerName: "",
    hostelRooms: [],
    capacity: 0,
  });
  const [confirmationModalOpen, setConfirmationModalOpen] = useState();

  useEffect(() => {
    try {
      const fetchHostelData = async () => {
        const res = await getHostel(hostelId, accessToken);
        console.log(res);
        setHostelData({
          id: res?.data?.id,
          hostelName: res?.data?.name,
          caretakerEmail: res?.data?.caretaker_email,
          caretakerName: res?.data?.caretaker_name,
          hostelRooms: res?.data?.room_types,
          capacity: res?.data?.capacity,
        });
      };

      fetchHostelData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDeleteHostel = async () => {
    try {
      const res = await deleteHostel(hostelId, accessToken);
      console.log(res);

      if (res.status == 200) {
        setConfirmationModalOpen(false);
        router.push("/manage-hostels");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" mb={3} justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Link href="/manage-hostels" style={{ transform: "translateY(15%)" }}>
              <KeyboardBackspaceIcon fontSize="large" />
            </Link>
            <Typography variant="h3" pl={3}>
              {hostelData.hostelName}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "error.main",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
            onClick={() => {
              setConfirmationModalOpen(true);
            }}
          >
            Delete Hostel
          </Button>
        </Stack>

        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Card>
              <HostelRoomList
                rooms={hostelData.hostelRooms}
                setHostelData={setHostelData}
                hostelId={hostelData.id}
              />
            </Card>
          </Grid>

          <Grid container xs={12} md={4}>
            <Grid xs={6} md={12}>
              <Card sx={{ height: "100%", overflowX: "auto" }}>
                <CardContent>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="h6" whiteSpace="nowrap">
                      Caretaker Email:
                    </Typography>
                    <Typography fontSize={18}>{hostelData.caretakerEmail}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Typography variant="h6">Caretaker Name:</Typography>
                    <Typography fontSize={18}>{hostelData.caretakerName}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6} md={12}>
              <Card sx={{ height: "100%", display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h5">Total Capacity: </Typography>
                    <Typography fontSize={24} sx={{ transform: "translateY(10%)" }}>
                      {hostelData.capacity}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <ConfirmationModal
          open={confirmationModalOpen}
          onClose={() => {
            setConfirmationModalOpen(false);
          }}
          message="Are you sure you want to delete this hostel?"
          noMessage="No, leave it"
          yesMessage="Yes, delete it"
          execFunction={handleDeleteHostel}
        />
      </Container>
    </Box>
  );
}

export default HostelDetails;
