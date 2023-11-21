import { Fragment } from "react";
import Head from "next/head";
import { Box, Container, Grid, Stack } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { EditPreferenceForm } from "src/sections/preference/edit-preference-form";

const Page = () => {
  return (
    <Fragment>
      <Head>
        <title>Edit Preference | Thapar Hostel Management System</title>
      </Head>
      <Box
        component="main"
        marginBottom="6rem"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Stack>
            <Grid container paddingTop="1rem" justifyContent="center" alignItems="center">
              <EditPreferenceForm
                sx={{ height: "100%", maxWidth: "25rem", padding: "2rem 3rem" }}
              />
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
