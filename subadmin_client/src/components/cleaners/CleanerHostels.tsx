'use client';

import * as React from 'react';
import { Stack } from '@mui/system';

import hostels from './assets/HostelData';
import CleanerCards from './cleaner-cards';
import { tempCleaners } from './assets/CleanersData';
import { Box, Typography } from '@mui/material';

export default function CleanerHostels(): React.JSX.Element {
  const [pageState, setPageState] = React.useState(0);
  const [hostel, setHostel] = React.useState('');

  const cleaners=tempCleaners;

  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--TextMain-Color': 'var(--mui-palette-text-primary)',
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
      {pageState === 0 && (
        <Box>
            <Typography variant="body1" sx={{ fontSize:{xs:'15px',md:'22px'},mt:0.1,color: 'var(--TextMain-Color)'}}>
              Choose Hostel
            </Typography>

          <CleanerCards data={hostels} setHostel={setHostel} pageState={pageState} setPageState={setPageState} />
        </Box>
      )}

      {pageState === 1 && (
        <Box>
            <Typography variant="body1" sx={{ fontSize:{xs:'15px',md:'22px'},mt:0.1,color: 'var(--TextMain-Color)'}}>
              Choose Cleaner
            </Typography>

          <CleanerCards data={cleaners} setHostel={setHostel} pageState={pageState} setPageState={setPageState} />
        </Box>
      )}
    </Stack>
  );
}
