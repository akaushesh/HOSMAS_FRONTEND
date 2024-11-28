'use client';

import * as React from 'react';
import { CircularProgress, Grid, Paper } from '@mui/material';
import dayjs from 'dayjs';

import { useLeaves } from '@/hooks/query/use-leave';

import LeaveForm from './LeaveForm';
import LeaveHistory from './LeaveHistory';
import LeaveInfo from './LeaveInfo';

const leaveRecords = [
  { title: 'Visiting Parents', location: 'Kapurthala', from: '27/07', to: '30/07' },
  { title: 'Picnic', location: 'Kasol', from: '27/07', to: '30/07' },
  { title: 'Hackathon', location: 'Chandigarh', from: '27/07', to: '30/07' },
  { title: 'Visiting Parents', location: 'Kapurthala', from: '27/07', to: '30/07' },
  { title: 'Visiting Parents', location: 'Kapurthala', from: '27/07', to: '30/07' },
  { title: 'Visiting Parents', location: 'Kapurthala', from: '27/07', to: '30/07' },
];

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

  phase = 2;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        {isLoading ? (
          <Paper elevation={10} sx={{ p: 3 }}>
            <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
              <Grid container justifyContent="center">
                <CircularProgress />
              </Grid>
            </Paper>
          </Paper>
        ) : phase === 0 ? (
          <Paper elevation={10} sx={{ p: 3 }}>
            <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
              <LeaveForm />
            </Paper>
          </Paper>
        ) : (
          <LeaveInfo phase={phase} />
        )}
      </Grid>
      <Grid item xs={12} md={5}>
        <Paper elevation={10} sx={{ p: 3 }}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: '#f9f9f9', maxHeight: '58vh', overflowY: 'scroll' }}>
            {isLoading ? (
              <Grid container justifyContent="center">
                <CircularProgress />
              </Grid>
            ) : (
              <LeaveHistory leaveRecords={leaveRecords} />
            )}
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
}
