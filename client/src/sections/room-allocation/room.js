import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

export const Room = ({ id, onOpen, room_no, room_capacity = 1, current_capacity = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFull = current_capacity === 0;
  console.log(id, room_no);

  const onClick = () => {
    onOpen(id);
  };

  return (
    <Grid xs={3} justifySelf="center" item>
      <Button
        onClick={onClick}
        variant="outlined"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isFull}
        sx={{
          width: "5rem",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "primary.lightest",
          },
        }}
      >
        {isHovered ? `${current_capacity} / ${room_capacity}` : room_no}
      </Button>
    </Grid>
  );
};
