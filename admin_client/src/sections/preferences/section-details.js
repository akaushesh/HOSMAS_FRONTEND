import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  Grid,
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

function SectionPreference({ sectionId }) {
  const [showAddPreferenceModal, setShowAddPreferenceModal] = useState();
  const [sectionData, setSectionData] = useState();
  const [preferences, setPreferences] = useState([]);
  const { accessToken } = useAuthContext();

  // const preferences = [
  //   { id: "123", hostel: "Hostel O", roomType: "1S", noOfRooms: 12 },
  //   { id: "123", hostel: "Hostel O", roomType: "1S", noOfRooms: 12 },
  //   { id: "123", hostel: "Hostel O", roomType: "1S", noOfRooms: 12 },
  //   { id: "123", hostel: "Hostel O", roomType: "1S", noOfRooms: 12 },
  // ];

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

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        px: 5,
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" mb={3}>
          <Link href="/manage-preferences" style={{ transform: "translateY(15%)" }}>
            <KeyboardBackspaceIcon fontSize="large" />
          </Link>
          <Typography variant="h3" pl={3}>
            {sectionData?.batchName} {sectionData?.gender === "M" ? "BOYS" : "GIRLS"}
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <PreferencesList
                sectionId={sectionId}
                preferences={preferences}
                setPreferences={setPreferences}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12} mb={2}>
              <Card sx={{ display: "flex", alignItems: "center" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5">Enable Allotment</Typography>
                    <Switch sx={{ transform: "translateY(5%)" }} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
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
      </Container>
    </Box>
  );
}

export default SectionPreference;
