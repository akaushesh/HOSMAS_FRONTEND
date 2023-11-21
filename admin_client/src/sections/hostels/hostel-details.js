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
} from "@mui/material";
import { HostelRoomList } from "./hostel-room-list";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { useAuthContext } from "src/contexts/auth-context";
import { getHostel } from "src/services/hostel";
import { useRouter } from "next/router";

function HostelDetails({ hostelId }) {
  const { accessToken } = useAuthContext();
  const [hostelData, setHostelData] = useState({
    id: 0,
    hostelName: "",
    caretakerEmail: "",
    caretakerName: "",
    hostelRooms: [],
    capacity: 0,
  });

  useEffect(() => {
    try {
      const getData = async () => {
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
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" mb={3}>
          <Link href="/manage-hostels">
            <KeyboardBackspaceIcon fontSize="large" />
          </Link>
          <Typography variant="h3" pl={3}>
            {hostelData.hostelName}
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <HostelRoomList
                rooms={hostelData.hostelRooms}
                setHostelData={setHostelData}
                hostelId={hostelData.id}
              />
            </Card>
          </Grid>
          <Grid container direction="column" spacing={3}>
            <Grid xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="h6">Caretaker Email:</Typography>
                    <Typography fontSize={18}>{hostelData.caretakerEmail}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Typography variant="h6">Caretaker Name:</Typography>
                    <Typography fontSize={18}>{hostelData.caretakerName}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12}>
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
      </Container>
    </Box>
  );
}

export default HostelDetails;
