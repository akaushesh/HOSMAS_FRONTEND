import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { config } from '@/config';
import Laundry from '@/components/laundry/Laundry';

export const metadata = { title: `Laundry | ${config.site.name}` } satisfies Metadata;

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
          
          <Typography variant="h4" sx={{ fontSize:'30px',color: 'var(--Page-HeadColor)' }}>
            Laundry Management 
          </Typography>
          
          <Laundry/>
          
      </Box>



    </Stack>
  );
}
