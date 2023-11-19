import { Fragment, useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { PreferenceForm } from "src/sections/customer/preference-form";
import { applyPagination } from "src/utils/apply-pagination";
import CustomModal from "src/components/customModal";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

const Page = () => {
  const { data: availableChoices, isLoading } = useQuery({
    queryFn: async () => {
      const url = URL + "preferences/getChoices/";
      const jwt = sessionStorage.getItem("jwt");

      const getAvailableChoicesConfig = {
        maxBodyLength: Infinity,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      };

      const availableChoicesResponse = await axios.get(url, getAvailableChoicesConfig);
      return availableChoicesResponse?.data;
    },
    queryKey: ["getAvailablePreferences"],
  });

  const { data: currentPreferences } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/getPreference/";
        const jwt = sessionStorage.getItem("jwt");

        const getCurrentPreferencesConfig = {
          maxBodyLength: Infinity,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getCurrentPreferencesResponse = await axios.get(url, getCurrentPreferencesConfig);
        return getCurrentPreferencesResponse?.data?.data;
      } catch (err) {
        return [];
      }
    },
    queryKey: ["getCurrentPreferences"],
    staleTime: Infinity,
  });

  return (
    <Fragment>
      <Head>
        <title>Preference | Thapar Hostel Management System</title>
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
              <PreferenceForm
                sx={{ height: "100%", maxWidth: "25rem", padding: "2rem 3rem" }}
                availableChoices={availableChoices}
                currentPreferences={currentPreferences}
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
