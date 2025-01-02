'use client';

import * as React from 'react';
import { type GetLeavesResponse } from '@/services/leave';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RestoreIcon from '@mui/icons-material/Restore';
import { Box, Button, CircularProgress, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme, type Theme } from '@mui/material/styles';

import { useLeaves } from '@/hooks/query/use-leave';

import LeaveForm from './LeaveForm';
import LeaveHistory from './LeaveHistory';
import LeaveInfo from './LeaveInfo';

export default function LeaveApplication(): React.JSX.Element {
  const theme: Theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { data, isLoading, refetch } = useLeaves();
  const leavesData: GetLeavesResponse | undefined = data?.data;
  const latestLeave = leavesData?.leaves[0];

  let phase = 0;
  if (latestLeave?.leaveStatus === 'c' || latestLeave?.leaveStatus === 'rc') {
    phase = 1;
  } else if (latestLeave?.leaveStatus === 'a') {
    phase = 2;
  }

  const [showRecords, setShowRecords] = React.useState(false);

  return (
    <Grid sx={{ px: { xs: 2, md: 0 } }} container alignItems="stretch" spacing={4}>
      <Grid item xs={12} md={7}>
        <Paper elevation={10} sx={{ p: { xs: 1.6, sm: 3 } }}>
          <Stack mb={3} direction="row" alignItems="center" gap={2} justifyContent="space-between">
            <Typography variant="h5">
              {showRecords ? 'Leave Records' : phase === 0 ? 'Submit New Leave' : 'Current Application'}
            </Typography>

            {isSmallScreen && showRecords ? (
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
              <LeaveHistory leaveRecords={leavesData?.leaves || []} />
            ) : (
              <>
                {phase === 0 ? (
                  <Paper elevation={0} sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)' }}>
                    <LeaveForm
                      refetch={refetch}
                      caretakerEmail={leavesData?.caretaker_email || ''}
                      parentsEmail={leavesData?.parents_email || ''}
                    />
                  </Paper>
                ) : (
                  <LeaveInfo phase={phase} refetch={refetch} currentApp={latestLeave} />
                )}
              </>
            )
          ) : phase === 0 ? (
            <Paper elevation={0} sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)' }}>
              <LeaveForm
                refetch={refetch}
                caretakerEmail={leavesData?.caretaker_email || ''}
                parentsEmail={leavesData?.parents_email || ''}
              />
            </Paper>
          ) : (
            <LeaveInfo phase={phase} refetch={refetch} currentApp={latestLeave} />
          )}
        </Paper>
        <Box mt={3} px={2}>
          {isSmallScreen && !showRecords ? (
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
            {isLoading ? (
              <Paper
                elevation={0}
                sx={{ p: 3, backgroundColor: 'var(--mui-palette-background-level3)', minHeight: '53vh' }}
              >
                <Grid container height={1} alignItems="center" justifyContent="center">
                  <CircularProgress />
                </Grid>
              </Paper>
            ) : (
              <LeaveHistory leaveRecords={leavesData?.leaves || []} />
            )}
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}
