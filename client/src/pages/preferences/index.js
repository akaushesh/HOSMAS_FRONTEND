import { Fragment } from "react";
import Head from "next/head";
import { Box, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { PreferenceForm } from "src/sections/preference/preference-form";
import { useIsPreferenceFillingLive } from "src/hooks/use-preference";
import { useCurrentPreference } from "src/hooks/use-preference";
import { useAvailableChoices } from "src/hooks/use-preference";
const Page = () => {
  const { isLive, isLoading: isLiveLoading } = useIsPreferenceFillingLive();
  const { currentPreferences } = useCurrentPreference();
  const { availableChoices } = useAvailableChoices();

  return (
    <Fragment>
      <Head>
        <title>Preference | Thapar Hostel Allocation System</title>
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
          {isLiveLoading ? (
            <Box
              sx={{
                position: "absolute",
                top: "47%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <CircularProgress />
            </Box>
          ) : isLive ? (
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
