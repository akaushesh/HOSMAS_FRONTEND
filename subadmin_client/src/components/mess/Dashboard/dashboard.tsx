'use client';

import * as React from 'react';
import { Box, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import Reviews from './reviews';

export default function Dashboard(): React.JSX.Element {
  const [duration, setDuration] = React.useState<'Weekly' | 'Today' | 'Monthly' | 'Yearly'>('Today');

  const rating = 4.2;
  const students = 520;
  const totalStudents = 990;

  return (
    <Paper sx={{ minHeight: '65vh', width: '100%', mt: 4, p: 4, }} elevation={10}>
    
	  <Stack direction="row" alignItems="stretch" justifyContent="space-between" gap={2}>
        <Stack
          width="55%"
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={8}
          p={2}
          sx={{ background: 'var(--mui-palette-secondary-light)' }}
        >
          <Box>
            <Typography variant="h3">Average Mess Rating</Typography>
            <Typography variant="body1">Based Upon Student Feedback</Typography>
          </Box>

          <Stack alignItems="center" justifyContent="space-evenly">
            <Select
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value as 'Weekly' | 'Today' | 'Monthly' | 'Yearly');
              }}
              displayEmpty
              fullWidth
              sx={{
                fontSize: { xs: '12px', md: '15px', lg: '17px' },
                borderRadius: 0.7,
                mt: 1,
                mb: 3,
              }}
              inputProps={{ 'aria-label': 'Without label' }}
              size="small"
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>

            <Stack alignItems="center">
              <Typography variant="h1" sx={{ color: 'var(--mui-palette-primary-main)' }}>
                {rating}
              </Typography>
              <Typography variant="body1">on scale of 5</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack width="40%" p={2}           sx={{ background: 'var(--mui-palette-secondary-light)' }}
		>
          <Box>
            <Typography variant="h3">No of Students</Typography>
            <Typography variant="body1">Based Upon Leave System</Typography>
          </Box>
		
		  <Stack alignItems="flex-end">
		  <Stack alignItems="center">
              <Typography variant="h1" sx={{ color: 'var(--mui-palette-primary-main)' }}>
                {students}
              </Typography>
              <Typography variant="body1">out of total {totalStudents}</Typography>
            </Stack>
            </Stack>

        </Stack>
      </Stack>
	  <Reviews/>
    </Paper>
  );
}
