import Head from "next/head";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Fragment, useState } from "react";
import { RoomContainer } from "src/sections/room-allocation/room-container";
import { useLevels } from "src/hooks/use-rooms";

const floorStringToNumber = (floor) => {
  switch (floor) {
    case "ground":
      return 0;
    case "first":
      return 1;
    case "second":
      return 2;
    case "third":
      return 3;
    case "fourth":
      return 4;
    case "fifth":
      return 5;
    case "sixth":
      return 6;
    case "seventh":
      return 7;
    case "eighth":
      return 8;
    case "ninth":
      return 9;
    case "tenth":
      return 10;
    default:
      return 0;
  }
};

const Page = () => {
  const [floor, setFloor] = useState("ground");

  const handleChange = (event) => {
    setFloor(event.target.value);
  };

  const levels = useLevels();
  console.log(levels);

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
                Hostel E
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
          <RoomContainer
            levels={levels?.levels?.levels}
            room_capacity={levels?.levels?.room_capacity}
            floor={floorStringToNumber(floor)}
          />
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
