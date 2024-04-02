import { Box, Typography } from "@mui/material";
import React from "react";

function Card({ even, imagePath, description }) {
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "100%",
        backgroundColor: even ? "#FFEFEF" : "#FCF7F8",
        // border: "1px solid #000",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ mb: "20px", height: "50px" }}>{description}</Typography>

      <img
        src={imagePath}
        alt="hellow"
        style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }}
      />
    </Box>
  );
}

export default Card;
