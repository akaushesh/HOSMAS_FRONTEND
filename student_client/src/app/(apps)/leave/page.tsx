import * as React from 'react';
import type { Metadata } from 'next';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { config } from '@/config';
import LeaveApplication from '@/components/leave/LeaveApplication';
import Profile from '@/components/core/profile';

export const metadata = { title: `Leave | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack sx={{ '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)' }} spacing={3}>
      <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)' }}>
        Leave Application
      </Typography>
      <Profile/>
      <LeaveApplication />
    </Stack>
  );
}
