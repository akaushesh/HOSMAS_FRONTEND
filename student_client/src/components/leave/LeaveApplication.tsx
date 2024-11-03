'use client';

import * as React from 'react';
import { CircularProgress, Grid, Paper } from '@mui/material';
import dayjs from 'dayjs';

import { useLeaves } from '@/hooks/query/use-leave';

import Confirmation from './Confirmation';
import LeaveForm from './LeaveForm';
import LeaveTimeline from './LeaveTimeline';
import Pass from './Pass';

export default function LeaveApplication(): React.JSX.Element {
  let phase = 2;

  const { data: leaves, isLoading } = useLeaves({ page: 1, limit: 1 });
  const leavesData = leaves!;
  const latestLeave = leavesData?.data[0];

  if (!latestLeave || latestLeave.leaveStatus === 'd' || dayjs(latestLeave.leaveDateTo).isBefore(dayjs())) {
    phase = 0;
  } else if (latestLeave.leaveStatus === 'c') {
    phase = 1;
  }

  return (
    <Paper elevation={10} sx={{ p: 3 }}>
      {isLoading ? (
        <Grid container justifyContent="center" alignItems="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            {phase === 0 ? <LeaveForm /> : phase === 1 ? <Confirmation /> : <Pass latestLeave={latestLeave} />}
          </Grid>
          <Grid item xs={12} md={4}>
            <LeaveTimeline phase={phase} />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}
