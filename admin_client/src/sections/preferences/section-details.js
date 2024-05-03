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
  TextField,
} from "@mui/material";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { PreferencesList } from "./preferences-list";
import { getSectionDetails } from "src/services/choice";
import { useAuthContext } from "src/contexts/auth-context";
import { useRouter } from "next/router";
import ConfirmationModal from "src/components/ConfirmationModal";
import { deleteSection, updateSection } from "src/services/section";
import { exportGroups } from "src/services/export";
import CustomModal from "src/components/CustomModal";

function SectionPreference({ sectionId }) {
  const { accessToken } = useAuthContext();
  const router = useRouter();

  const [showAddPreferenceModal, setShowAddPreferenceModal] = useState();
  const [sectionData, setSectionData] = useState();
  const [preferences, setPreferences] = useState([]);
  const [isAllotmentEnabled, setIsAllotmentEnabled] = useState(false);
  const [isRoomAllotmentEnabled, setIsRoomAllotmentEnabled] = useState(false);
  const [isRetainEnabled, setIsRetainEnabled] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState();
  const [enableAllotmentConfirmationModalOpen, setEnableAllotmentConfirmationModalOpen] =
    useState();
  const [enableRoomAllotmentConfirmationModalOpen, setEnableRoomAllotmentConfirmationModalOpen] =
    useState();
  const [groupSize, setGroupSize] = useState();
  const [openGroupSizeModal, setOpenGroupSizeModal] = useState(false);
  const [isAllotmentPublic, setIsAllotmentPublic] = useState(false);

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
        setIsRoomAllotmentEnabled(res?.data?.is_room_allotment_enabled);
        setIsRetainEnabled(res?.data?.is_retain_allowed);
        setIsAllotmentPublic(res?.data?.is_allotment_result_public);
        setGroupSize(res?.data?.group_size_limit);
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
        router.push("/manage-sections");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAllotmentEnable = async () => {
    try {
      setIsAllotmentEnabled(true);
      const updateData = { is_allotment_enabled: true };

      const res = await updateSection(sectionId, updateData, accessToken);
      if (res.status == 200) {
        setEnableAllotmentConfirmationModalOpen(false);
      }
      console.log(res);
    } catch (err) {}
  };

  const handleAllotmentDisable = async () => {
    try {
      setIsAllotmentEnabled(false);
      const updateData = { is_allotment_enabled: false };

      const res = await updateSection(sectionId, updateData, accessToken);
      console.log(res);
    } catch (err) {}
  };

  const handleRoomAllotmentEnable = async () => {
    try {
      setIsRoomAllotmentEnabled(true);
      const updateData = { is_room_allotment_enabled: true };

      const res = await updateSection(sectionId, updateData, accessToken);
      if (res.status == 200) {
        setEnableRoomAllotmentConfirmationModalOpen(false);
      }
      console.log(res);
    } catch (err) {}
  };

  const handleRoomAllotmentDisable = async () => {
    try {
      setIsRoomAllotmentEnabled(false);
      const updateData = { is_room_allotment_enabled: false };

      const res = await updateSection(sectionId, updateData, accessToken);
      console.log(res);
    } catch (err) {}
  };

  const handleRetainEnableChange = async (e) => {
    try {
      setIsRetainEnabled(e.target.checked);
      const updateData = { is_retain_allowed: e.target.checked };

      const res = await updateSection(sectionId, updateData, accessToken);
      console.log(res);
    } catch (err) {}
  };

  const handleAllotmentResultsReleased = async (e) => {
    try {
      setIsAllotmentPublic(e.target.checked);
      const updateData = { is_allotment_result_public: e.target.checked };

      const res = await updateSection(sectionId, updateData, accessToken);
      console.log(res);
    } catch (err) {}
  };

  const handleDownloadAllotmentData = async (e) => {
    try {
      const fetchDownloadLink = async () => {
        const res = await exportGroups(sectionId, accessToken);
        if (res.status == 200) {
          window.open(res?.data?.link, "_blank");
        }
      };

      fetchDownloadLink();
    } catch (err) {
      console.log(err);
    }
  };

  const handleGroupSizeUpdate = async () => {
    try {
      const updateData = { group_size_limit: groupSize };

      const res = await updateSection(sectionId, updateData, accessToken);

      if (res.status == 200) {
        setOpenGroupSizeModal(false);
      }

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
            <Link href="/manage-sections" style={{ transform: "translateY(15%)" }}>
              <KeyboardBackspaceIcon fontSize="large" />
            </Link>

            <Typography variant="h3" pl={3}>
              {sectionData?.batchName} {sectionData?.gender === "M" ? "BOYS" : "GIRLS"}
            </Typography>
          </Stack>

          <Stack direction="row" gap={1}>
            <Button variant="contained" onClick={handleDownloadAllotmentData}>
              Download Allotment Data
            </Button>
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
            <Grid xs={12} sm={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Enable Allotment</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isAllotmentEnabled}
                      onChange={(e) => {
                        if (e.target.checked == true) {
                          setEnableAllotmentConfirmationModalOpen(true);
                        } else {
                          handleAllotmentDisable();
                        }
                      }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid xs={12} sm={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Allow Retaining</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isRetainEnabled}
                      onChange={handleRetainEnableChange}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid> */}

            <Grid xs={12} sm={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Allow Retaining</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isRetainEnabled}
                      onChange={handleRetainEnableChange}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Allotment Results Released</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isAllotmentPublic}
                      onChange={handleAllotmentResultsReleased}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={12}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Enable Room Allotment</Typography>
                    <Switch
                      sx={{ transform: "translateY(5%)" }}
                      checked={isRoomAllotmentEnabled}
                      onChange={(e) => {
                        if (e.target.checked == true) {
                          setEnableRoomAllotmentConfirmationModalOpen(true);
                        } else {
                          handleRoomAllotmentDisable();
                        }
                      }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={4} md={12}>
              <Card
                sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => setOpenGroupSizeModal(true)}
              >
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Group size: {groupSize}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <CustomModal
          open={openGroupSizeModal}
          onClose={() => setOpenGroupSizeModal(false)}
          maxWidth={400}
        >
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h5" textAlign="center">
              Set Group Size
            </Typography>
            <TextField
              label="Group Size"
              value={groupSize}
              onChange={(e) => setGroupSize(e.target.value)}
            />
            <Button variant="contained" onClick={handleGroupSizeUpdate}>
              Submit
            </Button>
          </Stack>
        </CustomModal>

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

        <ConfirmationModal
          open={enableAllotmentConfirmationModalOpen}
          onClose={() => {
            setEnableAllotmentConfirmationModalOpen(false);
          }}
          message="Are you sure you want to enable allotment? This action will email all the students of this section."
          noMessage="No, leave it"
          yesMessage="Yes, enable it"
          execFunction={handleAllotmentEnable}
        />

        <ConfirmationModal
          open={enableRoomAllotmentConfirmationModalOpen}
          onClose={() => {
            setEnableRoomAllotmentConfirmationModalOpen(false);
          }}
          message="Are you sure you want to enable room allotment? This action will allow all the students of this section to select their room of choice in alloted hostel and room type."
          noMessage="No, leave it"
          yesMessage="Yes, enable it"
          execFunction={handleRoomAllotmentEnable}
        />
      </Container>
    </Box>
  );
}

export default SectionPreference;
