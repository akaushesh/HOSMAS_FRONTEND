import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
  {
    value: "los-angeles",
    label: "Los Angeles",
  },
];

export const AccountProfileDetails = (props) => {
  const { name = "", email = "", rollNumber = "", CGPA = "", hostel = "", roomNumber = "" } = props;

  const [values, setValues] = useState({
    name,
    email,
    rollNumber,
    CGPA,
    hostel,
    roomNumber,
  });

  return (
    <Card>
      <CardHeader subheader="Contact caretaker for any discrepancy" title="Profile" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ m: -1.5 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField fullWidth label="Name" name="name" disabled value={name} />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField fullWidth label="Email Address" name="email" disabled value={email} />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Roll Number"
                name="rollNumber"
                disabled
                type="number"
                value={rollNumber}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField fullWidth label="hostel" name="hostel" disabled value={hostel} />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="CGPA"
                name="CGPA"
                disabled
                SelectProps={{ native: true }}
                value={CGPA}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Room Number"
                name="roomNumber"
                disabled
                SelectProps={{ native: true }}
                value={roomNumber}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
