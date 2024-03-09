import { Grid, IconButton, Snackbar } from "@mui/material";
import CustomModal from "src/components/customModal";
import { MemberAssingn } from "./member-assign";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import { Fragment, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Room } from "./room";
import { useQueryClient } from "@tanstack/react-query";

export const RoomContainer = ({ levels = [], room_capacity, floor }) => {
  const [open, setOpen] = useState(false);
  const [selectedRoomID, setSelectedRoomID] = useState(null);
  const [webSocket, setWebSocket] = useState(null);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [rooms, setRooms] = useState([]);
  const queryClient = useQueryClient();

  const onOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const onCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const allotRoom = (rollNumber, room) => {
    const request = [
      {
        student: rollNumber,
        room: room,
      },
    ];
    const requestString = JSON.stringify(request);
    console.log(requestString);
    webSocket.send(requestString);
  };

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwt");

    // Establish WebSocket connection when component mounts
    const ws = new WebSocket(
      `wss://api.hosmas.ccstiet.com/ws/preference/level/${floor}/room/?t=${jwtToken}`
    );
    setWebSocket(ws);

    // Cleanup function to close WebSocket connection when component unmounts
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [floor]);

  useEffect(() => {
    // Send the JWT token as a message when WebSocket connection is open
    if (webSocket) {
      webSocket.onopen = () => {
        console.log("WebSocket connection is open");
      };

      webSocket.onmessage = (event) => {
        console.log("JSON received:", JSON.parse(event.data));
        const { type, data, updates } = JSON.parse(event.data);
        if (type === "initial") setRooms(data);
        else if (type === "result") onOpenSnackBar();
        else if (type === "update") {
          setRooms((prevRooms) => {
            const updatedRooms = prevRooms.map((room) => {
              const updateInfo = updates.find((update) => update.id === room.id);
              if (updateInfo) {
                return { ...room, ...updateInfo };
              }
              return room;
            });
            return updatedRooms;
          });
          queryClient.invalidateQueries(["getGroup"]);
        }
      };

      webSocket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  }, [webSocket]);

  const onOpen = (roomID) => {
    setSelectedRoomID(roomID);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={onCloseSnackBar}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Grid container rowGap={3} justifyContent="space-between">
      <Grid item xs={12} md={7.5}>
        <Image
          src={Hostel_M_Map}
          alt="Alloted Hostel Map"
          priority="false"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container rowGap={1.5}>
          {rooms.map((room) => (
            <Room
              key={room.id}
              onOpen={onOpen}
              current_capacity={room.current_capacity}
              room_capacity={room_capacity}
              room_no={room.room_no}
              id={room.id}
            />
          ))}
          {open && (
            <CustomModal open={open} onClose={onClose}>
              <MemberAssingn
                selected_room={selectedRoomID}
                allotRoom={allotRoom}
                onClose={onClose}
              />
            </CustomModal>
          )}
        </Grid>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={onCloseSnackBar}
          message="Room Allocated Successfully!"
          action={action}
        />
      </Grid>
    </Grid>
  );
};
