import * as React from 'react';
import type { Metadata } from 'next';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';

import { config } from '@/config';
import Attendance from '@/components/cleaning/Attendance/Attendance';
import { HostelName } from '@/components/overview/user-name';

export const metadata = { title: `Attendance | Cleaning | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box width={1}>
          <Typography variant="h4" sx={{ fontSize: '35px', color: 'var(--Page-HeadColor)' }} display="inline">
            Cleaning Attendance
          </Typography>
          <Typography variant="h4" sx={{ fontSize: '25px', ml: 4, color: 'var(--TextMain-Color)' }} display="inline">
            <HostelName />
          </Typography>
        </Box>

        <Typography variant="h4" sx={{ fontSize: '30px', color: 'var(--TextMain-Color)' }} width={1} textAlign="right">
          {dayjs().format('DD MMMM YYYY')}
        </Typography>
      </Stack>

      <Attendance />
    </Stack>
  );
}
