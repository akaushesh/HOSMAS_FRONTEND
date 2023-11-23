// import { format } from 'date-fns';
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Modal,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Stack,
  TextField,
  Grid,
  Switch,
  CardContent,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import Link from "next/link";
import CustomModal from "src/components/CustomModal";
import { createRoomType, deleteRoomType, updateRoomType } from "src/services/roomType";
import { useAuthContext } from "src/contexts/auth-context";
import ConfirmationModal from "src/components/ConfirmationModal";

export const HostelRoomList = ({ rooms, setHostelData, hostelId }) => {
  const { accessToken } = useAuthContext();
  const [showHostelRoomModal, setShowHostelRoomModal] = useState(false);
  const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
  const [createRoomTypeForm, setCreateRoomTypeForm] = useState({
    roomTypeName: "",
    roomSize: "",
    roomCount: "",
  });
  const [updateRoomTypeForm, setUpdateRoomTypeForm] = useState({
    id: "",
    roomTypeName: "",
    roomSize: "",
    roomCount: "",
  });

  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState(false);

  // const [room, setRoom] = useState(null);

  const handleUpdateRoomFormChange = (event) => {
    const { name, value } = event.target;
    setUpdateRoomTypeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCreateRoomFormChange = (event) => {
    const { name, value } = event.target;
    setCreateRoomTypeForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateRoomType = async () => {
    const roomTypeData = {
      hostel: hostelId,
      name: updateRoomTypeForm.roomTypeName,
      room_size: updateRoomTypeForm.roomSize,
      rooms_count: updateRoomTypeForm.roomCount,
    };

    try {
      const res = await updateRoomType(updateRoomTypeForm.id, roomTypeData, accessToken);
      if (res.status === 200) {
        setHostelData((prev) => {
          return {
            ...prev,
            hostelRooms: prev.hostelRooms.map((roomType) => {
              if (roomType.id === updateRoomTypeForm.id) {
                return { ...roomType, ...roomTypeData };
              }
              return roomType;
            }),
          };
        });

        setUpdateRoomTypeForm({
          id: "",
          roomTypeName: "",
          roomSize: "",
          roomCount: "",
        });
        setShowHostelRoomModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateRoomType = async () => {
    const roomTypeData = {
      name: createRoomTypeForm.roomTypeName,
      hostel: hostelId,
      room_size: createRoomTypeForm.roomSize,
      rooms_count: createRoomTypeForm.roomCount,
    };

    try {
      const res = await createRoomType(roomTypeData, accessToken);
      if (res.status === 201) {
        setHostelData((prev) => {
          return {
            ...prev,
            hostelRooms: [...prev.hostelRooms, { ...roomTypeData, id: res?.data?.id }],
          };
        });
        setCreateRoomTypeForm({
          roomTypeName: "",
          roomSize: "",
          roomCount: "",
        });
        setShowCreateRoomModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteRoomType = async () => {
    try {
      // console.log(updateRoomTypeForm);
      const roomTypeId = updateRoomTypeForm.id;
      const res = await deleteRoomType(roomTypeId, accessToken);
      console.log(res);

      if (res.status == 200) {
        setDeleteConfirmationModalOpen(false);
        setShowHostelRoomModal(false);
        setHostelData((prev) => {
          return {
            ...prev,
            hostelRooms: [
              prev.hostelRooms.map((roomType) => {
                if (roomType?.id != roomTypeId) return roomType;
              }),
            ],
            // if (prev?.id != roomTypeId) return prev;
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onTableRowClicked = (room) => {
    console.log(room);
    setUpdateRoomTypeForm({
      id: room.id,
      roomTypeName: room.name,
      roomSize: room.room_size,
      roomCount: room.rooms_count,
    });
    setShowHostelRoomModal(true);
    console.log(room);
  };

  useEffect(() => {
    console.log(updateRoomTypeForm);
  }, [updateRoomTypeForm]);

  const onHostelRoomModalClose = () => {
    setShowHostelRoomModal(false);
  };

  return (
    <>
      <Card>
        <Stack direction="row" m={2} alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Room Types</Typography>

          <Button variant="contained" onClick={() => setShowCreateRoomModal(true)}>
            Add
          </Button>
        </Stack>

        <Scrollbar sx={{ flexGrow: 1 }}>
          <Box sx={{ minWidth: 500 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Room Type</TableCell>
                  <TableCell>Room Size</TableCell>
                  <TableCell>Available Rooms</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rooms.map((room) => {
                  console.log(room);
                  return (
                    <TableRow
                      hover
                      key={room.id}
                      sx={{ cursor: "pointer" }}
                      onClick={() => onTableRowClicked(room)}
                    >
                      <TableCell>{room.name}</TableCell>
                      <TableCell>{room.room_size}</TableCell>
                      <TableCell>{room.rooms_count}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>

      <CustomModal open={showHostelRoomModal} onClose={onHostelRoomModalClose} minWidth={400}>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Typography variant="h5">{updateRoomTypeForm.roomTypeName}</Typography>

            <Button variant="contained" onClick={handleUpdateRoomType}>
              Save
            </Button>
          </Stack>

          <Stack spacing={2}>
            <TextField
              value={updateRoomTypeForm.roomTypeName}
              label="Room Name"
              name="roomTypeName"
              onChange={handleUpdateRoomFormChange}
            />
            <TextField
              value={updateRoomTypeForm.roomCount}
              label="Total Rooms"
              name="roomCount"
              onChange={handleUpdateRoomFormChange}
            />
            <TextField
              value={updateRoomTypeForm.roomSize}
              label="Room Size"
              name="roomSize"
              onChange={handleUpdateRoomFormChange}
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
              Delete Hostel
            </Button>
          </Stack>
        </Box>
      </CustomModal>

      <CustomModal
        open={showCreateRoomModal}
        onClose={() => setShowCreateRoomModal(false)}
        maxWidth={300}
      >
        <Stack alignItems="center">
          <Typography variant="h5" mb={2}>
            Create a room
          </Typography>

          <Grid container spacing={3} justifyContent="center" mb={3}>
            <Grid item xs={12}>
              <TextField
                name="roomTypeName"
                label="Name"
                fullWidth
                value={createRoomTypeForm.roomTypeName}
                onChange={handleCreateRoomFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Room Size"
                name="roomSize"
                fullWidth
                value={createRoomTypeForm.roomSize}
                onChange={handleCreateRoomFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Total Rooms"
                fullWidth
                name="roomCount"
                value={createRoomTypeForm.roomCount}
                onChange={handleCreateRoomFormChange}
              />
            </Grid>
          </Grid>

          <Button variant="contained" onClick={handleCreateRoomType}>
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
        execFunction={handleDeleteRoomType}
      />
    </>
  );
};

HostelRoomList.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
