import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Fragment } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import Image from "next/image";

const Page = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);
  console.log(user);

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
          <Typography variant="h3" sx={{ mb: 3 }} paddingLeft={2}>
            Hostel O
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} alignSelf={"center"}>
              <Image
                src={Hostel_M_Map}
                alt="Alloted Hostel Map"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
