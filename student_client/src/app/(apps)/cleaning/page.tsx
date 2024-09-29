import * as React from 'react';
import type { Metadata } from 'next';
import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { config } from '@/config';
import LeftCont from '@/components/cleaning/LeftCont/LeftCont';
import RightCont from '@/components/cleaning/RightCont/RightCont';

export const metadata = { title: `Cleaning | ${config.site.name}` } satisfies Metadata;

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
      spacing={3}
    >
      <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)' }}>
        Room Cleaning
      </Typography>

      <Grid container gap={3}>
        <Grid item lg={7.5} md={6} xs={12}>
          <LeftCont />
        </Grid>
        <Grid item lg={4} md={5.5} xs={12}>
          <RightCont />
        </Grid>
      </Grid>
    </Stack>
  );
}
