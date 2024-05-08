'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from '@mui/material/Unstable_Grid2';
import type { AxiosResponse } from 'axios';

import { useProfile } from '@/hooks/query/use-profile';

export function AccountDetailsForm(): React.JSX.Element {
  const { data } = useProfile();
  const profile = data as AxiosResponse<ProfileResponse>;
  const student = profile?.data;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="Contact queries_studentaffairs@thapar.edu for any discrepancy" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{student?.name}</InputLabel>
                <OutlinedInput defaultValue="" label="Name" name="firstName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{student?.rollno}</InputLabel>
                <OutlinedInput defaultValue="" label="Roll Number" name="lastName" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{student?.user?.email}</InputLabel>
                <OutlinedInput defaultValue="" label="Email address" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{student?.phoneno}</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{student?.cg}</InputLabel>
                <OutlinedInput label="CGPA" name="phone" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>0</InputLabel>
                <OutlinedInput label="feeDue" />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Confirm</Button>
        </CardActions>
      </Card>
    </form>
  );
}
