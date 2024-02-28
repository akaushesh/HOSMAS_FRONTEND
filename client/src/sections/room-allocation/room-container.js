import { Button, Grid } from "@mui/material";
import CustomModal from "src/components/customModal";
import { MemberAssingn } from "./member-assign";
import { hostelRooms } from "public/assets/data/hostel_m_data.js";
import Hostel_M_Map from "public/assets/hostels/Hostel_M_Map.jpg";
import { useState } from "react";
import Image from "next/image";

export const RoomContainer = () => {
  const [open, setOpen] = useState(false);

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
            <Grid key={room.id} xs={3} justifySelf="center" item>
              <Button onClick={onOpen} variant="outlined" sx={{ width: "4rem" }}>
                {room.id}
              </Button>
            </Grid>
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
