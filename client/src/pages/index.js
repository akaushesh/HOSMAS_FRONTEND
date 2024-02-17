import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-allotment";
import { OverviewTotalCustomers } from "src/sections/overview/overview-group";
import { AccountProfileDetails } from "src/sections/account/account-profile-details";
import { Fragment } from "react";
import { useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);
  console.log(user);

  return (
    <Fragment>
      <Head>
        <title>Profile | Thapar Hostel Allocation System</title>
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
                email={user?.user?.email}
                rollNumber={user?.rollno}
                CGPA={user?.cg}
                feeDue={user?.allotedHostel ? user.allotedHostel?.fee : ""}
                phoneNumber={user?.phoneno}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid>
                <OverviewBudget
                  allotedHostel={user?.alloted_hostel?.hostel ? user?.alloted_room?.hostel : ""}
                  academicSession={user?.academic_session ? user?.academic_session : ""}
                  sx={{ height: "100%" }}
                />
              </Grid>

              {user?.group_size_limit != 1 && (
                <Grid>
                  <OverviewTotalCustomers
                    memberCount={user?.group?.size}
                    preferenceFilled={user?.is_preference_filled}
                    sx={{ height: "100%" }}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
