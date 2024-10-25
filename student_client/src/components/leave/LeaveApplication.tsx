'use client';

import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import Confirmation from './Confirmation';
import LeaveForm from './LeaveForm';
import LeaveTimeline from './LeaveTimeline';
import Pass from './Pass';

export default function LeaveApplication(): React.JSX.Element {
  const [phase, setPhase] = React.useState(1);

  const setPhaseOne = (): void => {
    setPhase(1);
  };

  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={6}>
          {phase === 0 ? <LeaveForm setPhaseOne={setPhaseOne} /> : phase === 1 ? <Confirmation /> : <Pass />}
        </Grid>
        <Grid item xs={12} md={4}>
          <LeaveTimeline phase={phase} />
        </Grid>
      </Grid>
    </Paper>
  );
}
