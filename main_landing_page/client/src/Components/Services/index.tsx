import React, { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";

interface ServiceCardProps {
  icon: ReactNode;
  name: string;
  url: string;
}

function ServiceCard({ icon, name, url }: ServiceCardProps) {
  return (
    <a href={url} style={{ color: "#000", textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          paddingY: "30px",
          cursor: "pointer",
        }}
      >
        <Box>{icon}</Box>
        <Typography variant="h5" textAlign="center">
          {name}
        </Typography>
      </Box>
    </a>
  );
}

function Services() {
  return (
    <Grid container spacing="20px">
      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Hostel Allocation"
          url="https://hosmas.ccstiet.com"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Room Allocation"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Mess Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Cleaning Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Laundry Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Inventory Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Leave Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Discipline Management"
        />
      </Grid>

      <Grid item xs={6} md={4}>
        <ServiceCard
          icon={<HouseIcon sx={{ fontSize: "40px" }} />}
          name="Complaint Management"
        />
      </Grid>
    </Grid>
  );
}

export default Services;
