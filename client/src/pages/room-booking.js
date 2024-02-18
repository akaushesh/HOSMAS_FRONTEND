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

const Page = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);
  console.log(user);

  console.log(hostelRooms);
  const [floor, setFloor] = useState("ground");

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
                label="Choose Floor"
                value={floor}
                onChange={handleChange}
                autoWidth
                sx={{ mb: 2 }}
                inputProps={{ IconComponent: () => null }}
              >
                <MenuItem value="ground">Ground Floor</MenuItem>
                <MenuItem value="first">First Floor</MenuItem>
                <MenuItem value="second">Second Floor</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} alignSelf={"center"}>
              <Image
                src={Hostel_M_Map}
                alt="Alloted Hostel Map"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                {hostelRooms.rooms.map((room) => (
                  <Grid key={room.id} item>
                    <Button variant="outlined">{room.id}</Button>
                  </Grid>
                ))}
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
