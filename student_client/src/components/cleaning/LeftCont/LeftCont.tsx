'use client';

import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

import CleaningTable from './CleaningTable';

export default function LeftCont(): React.JSX.Element {
  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Room Cleaning History</Typography>
      <Typography variant="body2" mt={1}>
        You can view your current and past room cleaning. Gets cleared after every 30 days.
      </Typography>

      <Box mt={2}>
        <CleaningTable />
      </Box>
    </Paper>
  );
}
