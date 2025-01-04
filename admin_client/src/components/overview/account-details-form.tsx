'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import Card from '@mui/material/Card';
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
  const supervisor = profile?.data?.supervisor;

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
                <InputLabel>{supervisor?.name}</InputLabel>
                <OutlinedInput defaultValue="" label="Name" name="name" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{supervisor?.hostel?.name}</InputLabel>
                <OutlinedInput defaultValue="" label="Hostel" name="hostel" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{supervisor?.email}</InputLabel>
                <OutlinedInput defaultValue="" label="Email address" name="email" />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl disabled fullWidth>
                <InputLabel>{supervisor?.phone_number}</InputLabel>
                <OutlinedInput label="Phone number" name="phone" type="tel" />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ mb: 8 }} />
      </Card>
    </form>
  );
}
