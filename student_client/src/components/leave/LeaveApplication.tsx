'use client';

import * as React from 'react';
import { Box, Button, CircularProgress, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme, type Theme } from '@mui/material/styles';
import dayjs from 'dayjs';
import RestoreIcon from '@mui/icons-material/Restore';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { useLeaves } from '@/hooks/query/use-leave';

import LeaveForm from './LeaveForm';
import LeaveHistory from './LeaveHistory';
import LeaveInfo from './LeaveInfo';

const leaveRecords = [
  {
    reason: 'Visiting Parents',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
  { reason: 'Picnic', location: 'Kasol', leaveDateFrom: '2024-11-01T00:00:00Z', leaveDateTo: '2024-11-22T00:00:00Z' },
  {
    reason: 'Hackathon',
    location: 'Chandigarh',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
  {
    reason: 'Visiting Parents',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
  {
    reason: 'Visiting Parents',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
  {
    reason: 'Visiting Parents',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
  {
    reason: 'Visiting Parents',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-11-22T00:00:00Z',
  },
];

const currentApp = {
  reason: 'Visiting Parents',
  location: 'Kapurthala',
  leaveDateFrom: '2024-11-01T00:00:00Z',
  leaveDateTo: '2024-11-22T00:00:00Z',
  id: '123',
};

export default function LeaveApplication(): React.JSX.Element {
  const theme: Theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { data: leaves, isLoading } = useLeaves({ page: 1, limit: 6 });
  const leavesData = leaves!;
  const latestLeave = leavesData?.data[0];

  let phase = 2;
  if (!latestLeave || latestLeave.leaveStatus === 'd' || dayjs(latestLeave.leaveDateTo).isBefore(dayjs())) {
    phase = 0;
  } else if (latestLeave.leaveStatus === 'c') {
    phase = 1;
  }

  phase = 2;
  // State to track the current view on smaller screens
  const [showRecords, setShowRecords] = React.useState(false);

  return (
    <Grid sx={{ px: { xs: 2, md: 0 } }} container alignItems="stretch" spacing={4}>
      <Grid item xs={12} md={7}>
        <Paper elevation={10} sx={{ p: { xs: 1.6, sm: 3 } }}>
          <Stack
            mb={3}
            direction="row"
            alignItems="center"
            gap={2}
            justifyContent="space-between"
          >
            <Typography variant="h5">
              {showRecords ? 'Leave Records' : phase === 0 ? 'Submit New Leave' : 'Current Application'}
            </Typography>

            {(isSmallScreen&&showRecords) ? (
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ borderRadius: 0.7 }}
                onClick={() => {
                  setShowRecords(false);
                }}
                startIcon={<ArrowBackIosIcon />}
              >
                 Back
              </Button>
            ) : null}
          </Stack>

          {isLoading ? (
            <Paper elevation={0} sx={{ p: 3, height: '32vh', backgroundColor: 'var(--mui-palette-background-level3)' }}>
              <Grid container height={1} alignItems="center" justifyContent="center">
                <CircularProgress />
              </Grid>
            </Paper>
          ) : isSmallScreen ? (
            showRecords ? (
              <LeaveHistory leaveRecords={leaveRecords} />
            ) : (
              <>
                {phase === 0 ? (
                  <Paper elevation={0} sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)' }}>
                    <LeaveForm />
                  </Paper>
                ) : (
                  <LeaveInfo phase={phase} currentApp={currentApp} />
                )}
              </>
            )
          ) : phase === 0 ? (
            <Paper elevation={0} sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)' }}>
              <LeaveForm />
            </Paper>
          ) : (
            <LeaveInfo phase={phase} currentApp={currentApp} />
          )}
        </Paper>
          <Box mt={3} px={2}>

        {(isSmallScreen&&!showRecords) ? (
          <Button
          color="primary"
          fullWidth
          sx={{ borderRadius: 1 }}
          onClick={() => {
            setShowRecords(true);
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
          endIcon={<RestoreIcon />}
          variant="outlined"
          >
           <Typography variant="body1" fontWeight={600}>
           View Leave Records
           </Typography>
         </Button>
        ) : null}
        </Box>
      </Grid>

      {!isSmallScreen && (
        <Grid item xs={12} md={5}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 0.2, lineHeight: 1 }}>
              Leave Records
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '12px', mb: 2 }} color="text.secondary">
              You can view your current and past 10 leaves only.
            </Typography>
            <Paper
              elevation={0}
              sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)', minHeight: '53vh' }}
            >
              {isLoading ? (
                <Grid container height={1} alignItems="center" justifyContent="center">
                  <CircularProgress />
                </Grid>
              ) : (
                <LeaveHistory leaveRecords={leaveRecords} />
              )}
            </Paper>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}
