import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { AccountProfileDetails } from "src/sections/account/account-profile-details";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "src/hooks/use-auth";

const Page = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Fragment>
      <Head>
        <title>Profile | Thapar Hostel Management System</title>
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
            Hi, {user?.name}!
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={8} alignSelf={"center"}>
              <AccountProfileDetails
                name={user?.name}
                email={user?.email}
                rollNumber={user?.rollno}
                CGPA={user?.cg}
                hostel={user?.current_hostel}
                roomNumber={user?.roomNumber}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid>
                <OverviewBudget sx={{ height: "100%" }} />
              </Grid>
              <Grid>
                <OverviewTotalCustomers sx={{ height: "100%" }} />
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
