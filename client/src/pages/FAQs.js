import Head from "next/head";
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { AllFAQs } from "src/sections/FAQ/all-FAQs";
import { Fragment } from "react";

const Page = () => (
  <Fragment>
    <Head>
      <title>FAQs | Thapar Hostel Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">FAQs</Typography>
          <AllFAQs />
        </Stack>
      </Container>
    </Box>
  </Fragment>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
