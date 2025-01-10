import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { config } from '@/config';
import Home from '@/components/mess/home';
import Profile from '../../../components/core/profile';

export const metadata = { title: `Mess | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--PButton-Color': 'var(--mui-palette-primary-main)',
        '--PButton-HoverColor': 'var(--mui-palette-primary-dark)',
        '--SButton-Color': 'var(--mui-palette-secondary-dark)',
        '--SButton-HoverColor': 'var(--mui-palette-secondary-main)',
        '--Button-FontColor': 'var(--mui-palette-common-white)',
        '--Room-Available': 'transparent',
        '--Room-Allotted': '#32a83c',
        '--Room-Color': 'var(--mui-palette-secondary-main)',
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)' }}>
          Mess Facilities
        </Typography>
        <Profile/>

        <Box
          sx={{minHeight: '63vh', mt: 5 }}
          width={1}
        >
          <Home />
        </Box>
      </Box>

    </Stack>
  );
}
