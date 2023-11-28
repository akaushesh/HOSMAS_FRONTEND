import { useCallback, useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Container,
  Typography,
  Stack,
  Avatar,
  SvgIcon,
  Checkbox,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import DomainIcon from "@mui/icons-material/Domain";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import Link from "next/link";
import { getProfile } from "src/services/auth";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import { getAllSections, updateSectionsAllotmentStatus } from "src/services/section";
// import { OverviewBudget } from "../overview/overview-budget";
// import { OverviewTotalCustomers } from "../overview/overview-total-customers";

const AdminAccountProfileDetails = ({ email }) => {
  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Email Address"
                  name="email"
                  disabled
                  onChange={handleChange}
                  value={email || ""}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </form>
  );
};

export const AdminAccountProfilePage = () => {
  const { accessToken } = useAuthContext();

  const [openUpdatePreferenceModal, setOpenUpdatePreferenceModal] = useState();
  const [email, setEmail] = useState();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProfile(accessToken);
        setEmail(res?.data?.email);
      } catch (err) {
        alert("An error occurred");
      }
    };

    getData();
  }, []);

  const handleUpdatePreferenceSelectionClick = async () => {
    try {
      const fetchHostelData = async () => {
        const res = await getAllSections(accessToken);
        console.log(res);
        setSections(res?.data);
      };

      fetchHostelData();
      setOpenUpdatePreferenceModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdatePrefernceSelection = async () => {
    try {
      const allotmentStatusData = sections.map((section) => {
        return { id: section.id, is_allotment_enabled: section.is_allotment_enabled };
      });

      const res = await updateSectionsAllotmentStatus(allotmentStatusData, accessToken);
      if (res.status == 200) {
        setOpenUpdatePreferenceModal(false);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const updateAllotmentStatus = async (id, checked) => {
    setSections((prev) => {
      return prev.map((section) => {
        if (section.id == id) return { ...section, is_allotment_enabled: checked };
        return section;
      });
    });
  };

  const allotmentStarted = false;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }} paddingLeft={2}>
          Hi, Admin!
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} alignSelf={"center"}>
            <AdminAccountProfileDetails email={email} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/manage-hostels" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "orange",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <DomainIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography sx={{ color: "text.primary" }} textDecoration="none">
                      Manage Hostels
                    </Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
            {/* <OverviewBudget sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/manage-batches" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "blue",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <DomainIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography sx={{ color: "text.primary" }} textDecoration="none">
                      Manage Batches
                    </Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
            {/* <OverviewBudget sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/manage-preferences" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "error.main",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <DomainIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography sx={{ color: "text.primary" }} textDecoration="none">
                      Manage Preferences
                    </Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
            {/* <OverviewBudget sx={{ height: "100%" }} /> */}
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/view-groups" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "brown",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <UsersIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography>View Groups</Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card onClick={handleUpdatePreferenceSelectionClick}>
              <CardContent sx={{ cursor: "pointer" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                  <Avatar
                    sx={{
                      backgroundColor: "success.main",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <SvgIcon>
                      <PlayCircleFilledWhiteIcon />
                    </SvgIcon>
                  </Avatar>
                  <Typography textAlign="center">
                    Review Preference <br /> Selection
                  </Typography>
                  <EastIcon fontSize="large" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/view-groups" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "brown",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <UsersIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography>Export Allotment Data</Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/view-groups" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "brown",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <UsersIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography>Run Script</Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/view-groups" style={{ color: "black", textDecoration: "none" }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                    <Avatar
                      sx={{
                        backgroundColor: "brown",
                        height: 56,
                        width: 56,
                      }}
                    >
                      <SvgIcon>
                        <UsersIcon />
                      </SvgIcon>
                    </Avatar>
                    <Typography>Send Reminder Email</Typography>
                    <EastIcon fontSize="large" />
                  </Stack>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          {/* <Grid xs={12} md={6} lg={4}>
            <Card>
              {!allotmentStarted ? (
                <CardContent
                  sx={{
                    "&:hover": { backgroundColor: "green", color: "white", cursor: "pointer" },
                  }}
                >
                  <Stack alignItems="center" justifyContent="space-between">
                    <Typography>Start Allotment</Typography>
                    <PlayCircleFilledWhiteIcon fontSize="large" />
                  </Stack>
                </CardContent>
              ) : (
                <CardContent
                  sx={{
                    "&:hover": { backgroundColor: "red", color: "white", cursor: "pointer" },
                  }}
                >
                  <Stack alignItems="center" justifyContent="space-between">
                    <Typography>Stop Allotment</Typography>
                    <StopCircleIcon fontSize="large" />
                  </Stack>
                </CardContent>
              )}
            </Card>
          </Grid> */}
        </Grid>

        <CustomModal
          open={openUpdatePreferenceModal}
          onClose={() => setOpenUpdatePreferenceModal(false)}
          maxWidth={700}
        >
          <Grid container spacing={2} mb={2}>
            {sections.map((section) => {
              console.log(section);
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" alignItems="center" justifyContent="center">
                        <Typography>
                          {section.batch_name} {section.gender === "M" ? "BOYS" : "GIRLS"}
                        </Typography>
                        <Checkbox
                          checked={section.is_allotment_enabled}
                          onChange={(e) => {
                            updateAllotmentStatus(section.id, e.target.checked);
                          }}
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="contained"
            onClick={handleUpdatePrefernceSelection}
            sx={{ display: "block", margin: "0 auto" }}
          >
            Update Preference Selection
          </Button>
        </CustomModal>
      </Container>
    </Box>
  );
};
