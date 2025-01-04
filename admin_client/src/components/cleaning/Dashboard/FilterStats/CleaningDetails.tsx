import * as React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import StatsBox from './StatsBox';


export default function CleaningDetails(): React.JSX.Element {
  return (
    <Paper sx={{ p: 4, backgroundColor: '#eee' }} elevation={10}>
      <Typography variant="h5">Cleaning Requests</Typography>
      <Stack mt={4} direction="row" justifyContent="space-between">
        <StatsBox title="Total Requests" value={702} />
        <StatsBox title="Completed Requests" value={680} />
        <StatsBox title="Pending Requests" value={22} />
      </Stack>
    </Paper>
  );
}