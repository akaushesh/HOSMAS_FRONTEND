import * as React from 'react';
import type { Metadata } from 'next';
import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { config } from '@/config';
import GroupDetails from '@/components/dashboard/group/group-details';
import InvitationDetails from '@/components/dashboard/group/invitation-details';

// import { ReceivedInvitations } from '@/components/dashboard/invitations/received-invitations';
// import { SentInvitations } from '@/components/dashboard/invitations/sent-invitations';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Your Group</Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          {' '}
          <GroupDetails />
        </Grid>
        <Grid item xs={12} md={5}>
          <InvitationDetails />
        </Grid>
      </Grid>
      {/* <SentInvitations />
        <ReceivedInvitations /> */}
    </Stack>
  );
}
