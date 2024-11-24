import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import LeaveDetails from './LeaveDetails';
import LeaveStatus from './LeaveStatus';

export default function LeaveInfo({ phase }: { phase: number }): React.JSX.Element {
  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <LeaveStatus phase={phase} />
        </Grid>
        <Grid item xs={12} md={7}>
          <LeaveDetails />
        </Grid>
      </Grid>
    </Paper>
  );
}
