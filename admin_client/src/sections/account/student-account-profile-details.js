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
  Container,
  Typography,
} from "@mui/material";
import { OverviewBudget } from "../overview/overview-budget";
import { OverviewTotalCustomers } from "../overview/overview-total-customers";

const StudentAccountProfileDetails = ({ values, setValues }) => {
  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="Contact caretaker for any discrepancy" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First name"
                  name="name"
                  disabled
                  onChange={handleChange}
                  value={values.name}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  disabled
                  onChange={handleChange}
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  disabled
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="hostel"
                  name="hostel"
                  disabled
                  onChange={handleChange}
                  value={values.hostel}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="CGPA"
                  name="CGPA"
                  disabled
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                  value={values.CGPA}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Room Number"
                  name="roomNumber"
                  disabled
                  onChange={handleChange}
                  SelectProps={{ native: true }}
                  value={values.roomNumber}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        {/* <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Save details</Button>
        </CardActions> */}
      </Card>
    </form>
  );
};

export const StudentAccountProfilePage = () => {
  const [values, setValues] = useState({
    name: "Gunjeev Singh",
    email: "gsingh1@thapar.edu",
    phone: "8146677777",
    CGPA: "10.00",
    hostel: "M",
    roomNumber: "M-450",
  });

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }} paddingLeft={2}>
          Hi, {values.name}!
        </Typography>

        <Grid container spacing={3}>
          <Grid xs={12} lg={8} alignSelf={"center"}>
            <StudentAccountProfileDetails values={values} setValues={setValues} />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Grid>
              <OverviewBudget sx={{ height: "100%" }} />
            </Grid>
            <Grid>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="1.6k"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
