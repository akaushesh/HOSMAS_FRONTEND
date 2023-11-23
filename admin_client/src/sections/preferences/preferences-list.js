import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Typography,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import Link from "next/link";
import CustomModal from "src/components/CustomModal";
import { useAuthContext } from "src/contexts/auth-context";
import { getHostel, getAllHostels } from "src/services/hostel";
import { createChoice, deleteChoice, updateChoice } from "src/services/choice";
import ConfirmationModal from "src/components/ConfirmationModal";

const statusMap = {
  pending: "warning",
  delivered: "success",
  refunded: "error",
};

export const PreferencesList = ({ sectionId, preferences, setPreferences }) => {
  const { accessToken } = useAuthContext();

  const [updatePreferenceData, setUpdatePreferenceData] = useState({
    hostel: "",
    roomType: "",
    capacity: "",
  });
  const [openUpdatePreferenceModal, setOpenUpdatePreferenceModal] = useState(false);

  const [openCreatePreferenceModal, setOpenCreatePreferenceModal] = useState(false);
  const [createPreferenceHostelOptions, setCreatePreferenceHostelOptions] = useState([]);
  const [createPreferenceHostel, setCreatePreferenceHostel] = useState();
  const [createPreferenceRoomTypeOptions, setCreatePreferenceRoomTypeOptions] = useState([]);
  const [createPreferenceRoomType, setCreatePreferenceRoomType] = useState();
  const [createPreferenceCapacity, setCreatePreferenceCapacity] = useState();

  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  useEffect(() => {
    console.log("testing");
    if (openCreatePreferenceModal == true) {
      console.log("sending request");
      try {
        const fetchAllHostelsData = async () => {
          const res = await getAllHostels(accessToken);
          console.log(res);
          setCreatePreferenceHostelOptions(res?.data);
        };

        fetchAllHostelsData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [openCreatePreferenceModal]);

  useEffect(() => {
    if (createPreferenceHostel) {
      try {
        const fetchHostelData = async () => {
          const res = await getHostel(createPreferenceHostel.id, accessToken);
          console.log(res);
          setCreatePreferenceRoomTypeOptions(res?.data?.room_types);
        };

        fetchHostelData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [createPreferenceHostel]);

  const onTableRowClicked = (preference) => {
    setUpdatePreferenceData(preference);
    setOpenUpdatePreferenceModal(true);
  };

  const handleCreatePreference = async () => {
    const preferenceData = {
      room_type: createPreferenceRoomType,
      section: sectionId,
      capacity: createPreferenceCapacity,
    };

    try {
      const res = await createChoice(preferenceData, accessToken);
      if (res.status === 201) {
        setPreferences((prev) => {
          return [
            ...prev,
            {
              id: res?.data?.id,
              hostel: res?.data?.hostel,
              roomType: res?.data?.room_type_name,
              noOfRooms: res?.data?.capacity,
            },
          ];
        });
        setCreatePreferenceHostel("");
        setCreatePreferenceRoomType("");
        setCreatePreferenceCapacity("");
        setOpenCreatePreferenceModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdatePreference = async () => {
    const preferenceData = {
      capacity: updatePreferenceData?.capacity,
    };

    try {
      const res = await updateChoice(updatePreferenceData?.id, preferenceData, accessToken);
      if (res.status === 200) {
        console.log(preferences);
        console.log(res);
        setPreferences((prev) =>
          prev.map((item) =>
            item.id === res?.data?.id ? { ...item, noOfRooms: res?.data?.capacity } : item
          )
        );

        setUpdatePreferenceData({
          id: "",
          hostel: "",
          roomType: "",
          capacity: "",
        });
        setOpenUpdatePreferenceModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePreference = async () => {
    try {
      // console.log(updateRoomTypeForm);
      const choiceId = updatePreferenceData.id;
      const res = await deleteChoice(choiceId, accessToken);
      console.log(res);

      if (res.status == 200) {
        setDeleteConfirmationModalOpen(false);
        setOpenUpdatePreferenceModal(false);
        setPreferences((prev) => {
          return [
            prev.map((preference) => {
              if (preference?.id == choiceId) return prev;
            }),
          ];
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <Stack direction="row" m={2} alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Preferences</Typography>
        <Button variant="contained" onClick={() => setOpenCreatePreferenceModal(true)}>
          Add
        </Button>
      </Stack>

      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 400 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hostel</TableCell>
                <TableCell>Room Type</TableCell>
                <TableCell>Capacity</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {preferences.map((preference) => {
                // const createdAt = format(preference.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    // component={Link}
                    // href={`manage-hostels/${preference.link}`}
                    key={preference.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => onTableRowClicked(preference)}
                  >
                    <TableCell>{preference.hostel}</TableCell>
                    <TableCell>{preference.roomType}</TableCell>
                    <TableCell>{preference.noOfRooms}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>

      <CustomModal
        open={openUpdatePreferenceModal}
        onClose={() => setOpenUpdatePreferenceModal(false)}
        minWidth={400}
      >
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Typography variant="h5">
              {updatePreferenceData?.hostel} {updatePreferenceData?.roomType}
            </Typography>

            <Button variant="contained" onClick={handleUpdatePreference}>
              Save
            </Button>
          </Stack>

          <Stack alignItems="center">
            <TextField
              value={updatePreferenceData?.capacity}
              label="Capacity"
              name="capacity"
              onChange={(e) => {
                setUpdatePreferenceData((prev) => ({ ...prev, capacity: e.target.value }));
              }}
              sx={{ mb: 3 }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "error.main",
                "&:hover": {
                  backgroundColor: "error.dark",
                },
              }}
              onClick={() => {
                setDeleteConfirmationModalOpen(true);
              }}
            >
              Delete Preference
            </Button>
          </Stack>
        </Box>
      </CustomModal>

      <CustomModal
        open={openCreatePreferenceModal}
        onClose={() => setOpenCreatePreferenceModal(false)}
        maxWidth={300}
      >
        <Stack alignItems="center">
          <Typography mb={2}>Create preference</Typography>
          <Grid container spacing={1} justifyContent="center" mb={3}>
            <Grid item xs={12}>
              <TextField
                name="hostel"
                select
                label="Hostel"
                fullWidth
                value={createPreferenceHostel}
                onChange={(e) => setCreatePreferenceHostel(e.target.value)}
                sx={{ mb: 1 }}
              >
                {createPreferenceHostelOptions.map((hostel) => {
                  return (
                    <MenuItem key={hostel.id} value={hostel}>
                      {hostel.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="roomType"
                select
                label="Room Type"
                fullWidth
                value={createPreferenceRoomType}
                onChange={(e) => setCreatePreferenceRoomType(e.target.value)}
              >
                {createPreferenceRoomTypeOptions.map((roomType) => {
                  return (
                    <MenuItem key={roomType.id} value={roomType.id}>
                      {roomType.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Total Rooms"
                fullWidth
                name="roomCount"
                value={createPreferenceCapacity}
                onChange={(e) => setCreatePreferenceCapacity(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button variant="contained" onClick={handleCreatePreference}>
            Submit
          </Button>
        </Stack>
      </CustomModal>

      <ConfirmationModal
        open={deleteConfirmationModalOpen}
        onClose={() => {
          setDeleteConfirmationModalOpen(false);
        }}
        message="Are you sure you want to delete this Room Type?"
        noMessage="No, leave it"
        yesMessage="Yes, delete it"
        execFunction={handleDeletePreference}
      />
    </Card>
  );
};

PreferencesList.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
