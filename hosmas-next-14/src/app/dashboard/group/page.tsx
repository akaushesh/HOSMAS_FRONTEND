import * as React from 'react';
import type { Metadata } from 'next';
import Stack from '@mui/material/Stack';

import { config } from '@/config';
import { GroupDetails } from '@/components/dashboard/group/group-details';
import { ReceivedInvitations } from '@/components/dashboard/invitations/received-invitations';
import { SentInvitations } from '@/components/dashboard/invitations/sent-invitations';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <GroupDetails />
        <SentInvitations />
        <ReceivedInvitations />
      </Stack>
    </Stack>
  );
}
