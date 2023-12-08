import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { useRouter } from "next/router";
import { useAuthContext } from "src/contexts/auth-context";
import { useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const router = useRouter();
  const auth = useAuthContext();

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["getProfile"]);

  useEffect(() => {
    if (user?.group_size_limit == 1) {
      router.push("/404");
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Group | Thapar Hostel Allocation System</title>
      </Head>
      <Box
        component="main"
        marginBottom="6rem"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Your Group</Typography>
              </Stack>
            </Stack>

            <Grid container justifyContent="space-evenly">
              <Grid item xs={12} lg={6.5} marginBottom="1rem">
                <Stack spacing={3}>
                  <CustomersSearch />
                  <CustomersTable sx={{ height: "100%" }} />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4.5} marginBottom="1rem">
                <OverviewLatestProducts sx={{ height: "100%" }} />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
