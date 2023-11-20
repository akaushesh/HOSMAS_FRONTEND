import { Fragment } from "react";
import Head from "next/head";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { PreferenceForm } from "src/sections/customer/preference-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "config";

const Page = () => {
  const { data: isLive } = useQuery({
    queryFn: async () => {
      try {
        const url = URL + "preferences/status/";
        const jwt = sessionStorage.getItem("jwt");

        const getPreferenceStatusConfig = {
          maxBodyLength: Infinity,
          url: url,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getPreferenceStatusResponse = await axios.get(url, getPreferenceStatusConfig);
        return getPreferenceStatusResponse?.data?.is_live;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    queryKey: ["isPreferenceFillingLive"],
  });

  const { data: availableChoices, isLoading } = useQuery({
    queryFn: async () => {
      try {
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
      } catch (err) {
        return [];
      }
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
        position="relative"
      >
        <Container maxWidth="xl">
          {isLive ? (
            <Stack>
              <Grid container paddingTop="1rem" justifyContent="center" alignItems="center">
                <PreferenceForm
                  sx={{ height: "100%", maxWidth: "25rem", padding: "2rem 3rem" }}
                  availableChoices={availableChoices}
                  currentPreferences={currentPreferences}
                />
              </Grid>
            </Stack>
          ) : (
            <Box
              sx={{
                position: "absolute",
                top: "47%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <Typography marginTop="18%" textAlign="center" vatiant="body2" color="grey">
                Preference filling is not currently live for you
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
