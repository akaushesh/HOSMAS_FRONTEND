import { Box, Typography } from "@mui/material";
import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";

function Announcements() {
  return (
    <Box sx={{ height: "300px", display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#640000",
          color: "white",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "20%",
        }}
      >
        <CampaignIcon sx={{ fontSize: "50px" }} />
        <Typography variant="h4">Announcements</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Typography variant="h5">No Announcements</Typography>
      </Box>
    </Box>
  );
}

export default Announcements;
