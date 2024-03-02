import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

export const Room = ({ id, onOpen, room_capacity = 1, current_capacity = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid xs={3} justifySelf="center" item>
      <Button
        onClick={onOpen}
        variant="outlined"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: "5rem",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "primary.lightest",
          },
        }}
      >
        {isHovered ? `${current_capacity} / ${room_capacity}` : id}
      </Button>
    </Grid>
  );
};
