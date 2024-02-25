import Head from "next/head";
import {
  Box,
  Button,
  Card,
  Container,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Fragment, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import Image from "next/image";
import { hostelRooms } from "public/assets/data/hostel_m_data.js";
import CustomModal from "src/components/customModal";
import { MemberAssingn } from "src/sections/room-allocation/member-assign";

const Page = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);

  const [floor, setFloor] = useState("ground");
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFloor(event.target.value);
  };

  console.log(hostelRooms);

  return (
    <Fragment>
      <Head>
        <title>Room Booking | Thapar Hostel Allocation System</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3" sx={{ mb: 3 }} paddingLeft={2}>
                Hostel M
              </Typography>
            </Grid>
            <Grid item paddingRight={2}>
              <Select
                labelId="select-floor-label"
                id="select-floor"
                name="floor"
                value={floor}
                onChange={handleChange}
                autoWidth
                sx={{ mb: 2 }}
              >
                <MenuItem value="ground">Ground Floor</MenuItem>
                <MenuItem value="first">First Floor</MenuItem>
                <MenuItem value="second">Second Floor</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid container rowGap={3} justifyContent="space-between">
            <Grid item xs={12} md={7.5}>
              <Image
                src={Hostel_M_Map}
                alt="Alloted Hostel Map"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container rowGap={1.5}>
                {hostelRooms.rooms.map((room) => (
                  <Grid key={room.id} xs={3} justifySelf="center" item>
                    <Button onClick={onOpen} variant="outlined" sx={{ width: "4rem" }}>
                      {room.id}
                    </Button>
                  </Grid>
                ))}
                {open && (
                  <CustomModal open={open} onClose={onClose}>
                    <MemberAssingn onClose={onClose} />
                  </CustomModal>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
