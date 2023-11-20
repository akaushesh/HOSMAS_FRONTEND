import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";

export const AccountProfileDetails = (props) => {
  const {
    name = "",
    email = "",
    rollNumber = "",
    CGPA = "",
    hostel = "",
    phoneNumber = "",
  } = props;

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
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                disabled
                type="number"
                value={phoneNumber}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField fullWidth label="Current Hostel" name="hostel" disabled value={hostel} />
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
            {/* <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Room Type"
                name="roomNumber"
                disabled
                SelectProps={{ native: true }}
                value={roomNumber}
              />
            </Grid> */}
          </Grid>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
