import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  Switch,
  Button,
} from "@mui/material";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { PreferencesList } from "./preferences-list";
import { getSectionDetails } from "src/services/choice";
import { useAuthContext } from "src/contexts/auth-context";
import { useRouter } from "next/router";
import ConfirmationModal from "src/components/ConfirmationModal";
import { deleteSection, updateSection } from "src/services/section";

function SectionPreference({ sectionId }) {
  const { accessToken } = useAuthContext();
  const router = useRouter();

  const [showAddPreferenceModal, setShowAddPreferenceModal] = useState();
  const [sectionData, setSectionData] = useState();
  const [preferences, setPreferences] = useState([]);
  const [isAllotmentEnabled, setIsAllotmentEnabled] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState();

  console.log(sectionData);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await getSectionDetails(sectionId, accessToken);
        console.log(res);
        setSectionData({
          id: res?.data?.id,
          batchName: res?.data?.batch_name,
          gender: res?.data?.gender,
        });
        setIsAllotmentEnabled(res?.data?.is_allotment_enabled);
        setPreferences(
          res?.data?.room_choices.map((item) => ({
            id: item.id,
            roomType: item.room_type_name,
            hostel: item.hostel,
            noOfRooms: item.capacity,
          }))
        );
      };

      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDeleteSection = async () => {
    try {
      const res = await deleteSection(sectionId, accessToken);
      console.log(res);

      if (res.status == 200) {
        setConfirmationModalOpen(false);
        router.push("/manage-preferences");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAllotmentEnableChange = async (e) => {
    try {
      setIsAllotmentEnabled(e.target.checked);
      const updateData = { is_allotment_enabled: e.target.checked };

      const res = await updateSection(sectionId, updateData, accessToken);
      console.log(res);
    } catch (err) {}
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" mb={3} justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Link href="/manage-preferences" style={{ transform: "translateY(15%)" }}>
              <KeyboardBackspaceIcon fontSize="large" />
            </Link>

            <Typography variant="h3" pl={3}>
              {sectionData?.batchName} {sectionData?.gender === "M" ? "BOYS" : "GIRLS"}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "error.main",
              "&:hover": {
                backgroundColor: "error.dark",
              },
            }}
            onClick={() => {
              setConfirmationModalOpen(true);
            }}
          >
            Delete Section
          </Button>
        </Stack>

        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Card>
              <PreferencesList
                sectionId={sectionId}
                preferences={preferences}
                setPreferences={setPreferences}
              />
            </Card>
          </Grid>

          <Grid container xs={12} md={4}>
            <Grid xs={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Enable Allotment</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isAllotmentEnabled}
                      onChange={handleAllotmentEnableChange}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Allow Retaining</Typography>
                    <Switch sx={{ transform: "translateY(5%)" }} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <ConfirmationModal
          open={confirmationModalOpen}
          onClose={() => {
            setConfirmationModalOpen(false);
          }}
          message="Are you sure you want to delete this secton?"
          noMessage="No, leave it"
          yesMessage="Yes, delete it"
          execFunction={handleDeleteSection}
        />
      </Container>
    </Box>
  );
}

export default SectionPreference;
