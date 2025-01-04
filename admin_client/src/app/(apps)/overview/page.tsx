import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';

import { config } from '@/config';
import { HostelAllotmentOverview } from '@/components/overview/hostel-allotment-overview';
import { RoomAllotmentOverview } from '@/components/overview/room-allotment-overview';
import { UserName } from '@/components/overview/user-name';
import { AccountDetailsForm } from '@/components/overview/account-details-form';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <UserName />
      <Grid container spacing={3}>
        <Grid lg={8} md={6} xs={12}>
          <AccountDetailsForm />
        </Grid>
        <Grid lg={4} md={6} xs={12}>
          <Stack spacing={3}>
            <HostelAllotmentOverview />
            <RoomAllotmentOverview />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
