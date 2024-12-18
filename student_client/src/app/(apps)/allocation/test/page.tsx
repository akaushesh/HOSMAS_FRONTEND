'use client';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Model from '@/components/allocation/models/Model';

export default function Page(): React.JSX.Element {

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Model Test</Typography>
        <Model />
      </div>
    </Stack>
  );
}
