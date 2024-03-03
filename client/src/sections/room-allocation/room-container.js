import { Grid } from "@mui/material";
import CustomModal from "src/components/customModal";
import { MemberAssingn } from "./member-assign";
import { hostelRooms } from "public/assets/data/hostel_m_data.js";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Room } from "./room";

export const RoomContainer = ({ levels = [], room_capacity, floor }) => {
  const [open, setOpen] = useState(false);
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwt");
    console.log(jwtToken);

    // Establish WebSocket connection when component mounts
    const ws = new WebSocket(`wss://api.hosmas.ccstiet.com/ws/preference/level/${floor}/room/`);
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
        console.log("HERE");
        // const jwtToken = "YOUR_JWT_TOKEN";
        // webSocket.send(JSON.stringify({ authorization: `Bearer ${jwtToken}` }));
      };

      webSocket.onmessage = (event) => {
        console.log("Message received:", event.data);
        // Handle the response here
      };

      webSocket.onerror = (error) => {
        console.error("WebSocket error:", error);
        // Handle the error here
      };
    }
  }, [webSocket]);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
          {hostelRooms.rooms.map((room) => (
            <Room key={room.id} onOpen={onOpen} room_capacity={room_capacity} id={room.id} />
          ))}
          {open && (
            <CustomModal open={open} onClose={onClose}>
              <MemberAssingn onClose={onClose} />
            </CustomModal>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
