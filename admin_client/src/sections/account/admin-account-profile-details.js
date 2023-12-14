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
import EmailIcon from "@mui/icons-material/Email";
import { getAcademicSession, sendReminderMail, updateAcademicSession } from "src/services/others";
import ConfirmationModal from "src/components/ConfirmationModal";
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

  const [email, setEmail] = useState();
  const [sections, setSections] = useState([]);
  const [openUpdatePreferenceModal, setOpenUpdatePreferenceModal] = useState(false);
  const [openAcademicSessionModal, setOpenAcademicSessionModal] = useState(false);
  const [openFeeStructureLinkModal, setOpenFeeStructureLinkModal] = useState(false);
  const [academicSession, setAcademicSession] = useState("");
  const [feeStructureLink, setFeeStructureLink] = useState("");
  const [enableAllotmentConfirmationModalOpen, setEnableAllotmentConfirmationModalOpen] =
    useState(false);
  const [openReminderMailModal, setOpenReminderMailModal] = useState(false);
  const [reminderMailConfirmationModalOpen, setReminderMailConfirmationModalOpen] = useState(false);
  const [reminderEmailSections, setReminderEmailSections] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProfile(accessToken);
        setEmail(res?.data?.email);
        // setAcademicSession(res?.data?.)
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const fetchAcademicSession = async () => {
      try {
        const res = await getAcademicSession(accessToken);
        setAcademicSession(res?.data?.name);
        setFeeStructureLink(res?.data?.fee_structure_url);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAcademicSession();
  }, [openAcademicSessionModal]);

  const handleAcademicSessionUpdate = async () => {
    const data = {
      name: academicSession,
      fee_structure_url: feeStructureLink,
    };

    try {
      const res = updateAcademicSession(data, accessToken);

      if (res.status == 200) {
        setOpenAcademicSessionModal(false);
        setOpenFeeStructureLinkModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdatePreferenceSelectionClick = async () => {
    try {
      const fetchSectionsData = async () => {
        const res = await getAllSections(accessToken);
        console.log(res);
        setSections(res?.data);
      };

      fetchSectionsData();
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
        setEnableAllotmentConfirmationModalOpen(false);
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

  const handleSendReminderEmailClick = async () => {
    try {
      const fetchSectionsData = async () => {
        const res = await getAllSections(accessToken);
        console.log(res);
        setReminderEmailSections(
          res?.data
            ?.filter((section) => section?.is_allotment_enabled)
            .map((section) => ({ ...section, send_reminder_mail: false }))
        );
      };

      fetchSectionsData();
      setOpenReminderMailModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateReminderEmailStatus = async (id, checked) => {
    setReminderEmailSections((prev) => {
      return prev.map((section) => {
        if (section.id == id) return { ...section, send_reminder_mail: checked };
        return section;
      });
    });
  };

  const handleSendReminderEmail = async () => {
    const ids = reminderEmailSections
      .filter((section) => section.send_reminder_mail == true)
      .map((section) => section?.id);

    try {
      const res = await sendReminderMail(ids, accessToken);

      if (res.status == 200) {
        setReminderMailConfirmationModalOpen(false);
        setOpenReminderMailModal(false);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
              <Link href="/manage-sections" style={{ color: "black", textDecoration: "none" }}>
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
                      Manage Sections
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
              <Link href="/manage-groups" style={{ color: "black", textDecoration: "none" }}>
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
                    <Typography>Manage Groups</Typography>
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
          {/* <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/manage-groups" style={{ color: "black", textDecoration: "none" }}>
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
          </Grid> */}
          <Grid xs={12} md={6} lg={4}>
            <Card>
              <Link href="/manage-groups" style={{ color: "black", textDecoration: "none" }}>
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
            <Card onClick={handleSendReminderEmailClick}>
              <CardContent sx={{ cursor: "pointer" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                  <Avatar
                    sx={{
                      backgroundColor: "#0f3923",
                      height: 56,
                      width: 56,
                    }}
                  >
                    <SvgIcon>
                      <EmailIcon />
                    </SvgIcon>
                  </Avatar>
                  <Typography textAlign="center">
                    Send Reminder <br /> Email
                  </Typography>
                  <EastIcon fontSize="large" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Card onClick={() => setOpenAcademicSessionModal(true)}>
              <CardContent sx={{ cursor: "pointer" }}>
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
                  <Typography textAlign="center">
                    Change Academic
                    <br /> Session
                  </Typography>
                  <EastIcon fontSize="large" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6} lg={4}>
            <Card onClick={() => setOpenFeeStructureLinkModal(true)}>
              <CardContent sx={{ cursor: "pointer" }}>
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
                  <Typography textAlign="center">
                    Set Fee Structure
                    <br /> Link
                  </Typography>
                  <EastIcon fontSize="large" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <CustomModal
          open={openAcademicSessionModal}
          onClose={() => setOpenAcademicSessionModal(false)}
          maxWidth={400}
        >
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h5" textAlign="center">
              Set academic session
            </Typography>
            <TextField
              label="Academic Session"
              value={academicSession}
              onChange={(e) => setAcademicSession(e.target.value)}
            />
            <Button variant="contained" onClick={handleAcademicSessionUpdate}>
              Submit
            </Button>
          </Stack>
        </CustomModal>

        <CustomModal
          open={openFeeStructureLinkModal}
          onClose={() => setOpenFeeStructureLinkModal(false)}
          maxWidth={400}
        >
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h5" textAlign="center">
              Set Fee Structure Link
            </Typography>
            <TextField
              label="Link"
              value={feeStructureLink}
              onChange={(e) => setFeeStructureLink(e.target.value)}
            />
            <Button variant="contained" onClick={handleAcademicSessionUpdate}>
              Submit
            </Button>
          </Stack>
        </CustomModal>

        <CustomModal
          open={openReminderMailModal}
          onClose={() => setOpenReminderMailModal(false)}
          maxWidth={700}
        >
          <Grid container spacing={2} mb={2}>
            {reminderEmailSections.map((section) => {
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
                          checked={section?.send_reminder_mail}
                          onChange={(e) => {
                            updateReminderEmailStatus(section.id, e.target.checked);
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
            onClick={() => setReminderMailConfirmationModalOpen(true)}
            sx={{ display: "block", margin: "0 auto" }}
          >
            Send Reminder Mail
          </Button>
        </CustomModal>

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
                          checked={section?.is_allotment_enabled}
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
            onClick={() => setEnableAllotmentConfirmationModalOpen(true)}
            sx={{ display: "block", margin: "0 auto" }}
          >
            Update Preference Selection
          </Button>
        </CustomModal>

        <ConfirmationModal
          open={enableAllotmentConfirmationModalOpen}
          onClose={() => {
            setEnableAllotmentConfirmationModalOpen(false);
          }}
          message="Are you sure you want to update allotments? This action will email all the students of the newly enabled allotments."
          noMessage="No, leave it"
          yesMessage="Yes, update"
          execFunction={handleUpdatePrefernceSelection}
        />

        <ConfirmationModal
          open={reminderMailConfirmationModalOpen}
          onClose={() => {
            setReminderMailConfirmationModalOpen(false);
          }}
          message="Are you sure you want to send reminder emails to the students of these selected sections?"
          noMessage="No, leave it"
          yesMessage="Yes, Send"
          execFunction={handleSendReminderEmail}
        />
      </Container>
    </Box>
  );
};
