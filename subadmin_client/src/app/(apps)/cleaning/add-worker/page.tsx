import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { config } from '@/config';
import AddWorker from '@/components/cleaning/AddWorker/AddWorker';

export const metadata = { title: `Add Worker | Cleaning | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--TextMain-Color': 'var(--mui-palette-text-primary)',
        '--PButton-Color': 'var(--mui-palette-primary-main)',
        '--PButton-HoverColor': 'var(--mui-palette-primary-dark)',
      }}
      spacing={3}
    >
      <Box width={1}>
        <Typography variant="h4" sx={{ fontSize: '35px', color: 'var(--Page-HeadColor)' }} display="inline">
          Cleaning Settings & Staff
        </Typography>
      </Box>

      <AddWorker />
    </Stack>
  );
}
