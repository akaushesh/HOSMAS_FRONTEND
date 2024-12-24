'use client';

import * as React from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import ApprovalLeave from './approvals';
import pendingApprovals from './temp';
import ActiveLeaves from './active';
import AllLeaves from './all-records';
import { useSearchParams } from 'next/navigation';

export default function Records(): React.JSX.Element {
  const searchParams = useSearchParams();
  const queryState = Number(searchParams.get('state')) || 0;
  const [state, setstate] = React.useState(queryState);

  React.useEffect(() => {
	setstate(queryState);
  }, [queryState]);

  return (
    <Paper sx={{ width: 1, p: 3, minHeight: '68vh', mt: 3 }} elevation={10}>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5">
          {state === 0 ? 'Pending Leaves' : state === 1 ? 'Active Leaves' : 'All Records'}
        </Typography>

        <Stack direction="row" gap={1} sx={{ width: { xs: '85%', md: '30%' }, justifyContent: 'center' }}>
          <Button
            sx={{
              borderRadius: 1,
              borderWidth: '2px',
              fontWeight: '600',
              py: 0.5,
              '&:hover': { borderWidth: '2px' },
              minWidth: '32%',
              fontSize: { xs: '12px', sm: '14px' },
            }}
            variant={state === 0 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => {
              if (state !== 0) setstate(0);
            }}
          >
            Pending
          </Button>
          <Button
            sx={{
              borderRadius: 1,
              borderWidth: '2px',
              fontWeight: '600',
              py: 0.5,
              '&:hover': { borderWidth: '2px' },
              minWidth: '32%',
              fontSize: { xs: '12px', sm: '14px' },
            }}
            variant={state === 1 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => {
              if (state !== 1) setstate(1);
            }}
          >
            Active
          </Button>
          <Button
            sx={{
              borderRadius: 1,
              borderWidth: '2px',
              fontWeight: '600',
              py: 0.5,
              '&:hover': { borderWidth: '2px' },
              minWidth: '32%',
              fontSize: { xs: '12px', sm: '14px' },
            }}
            variant={state === 2 ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => {
              if (state !== 2) setstate(2);
            }}
          >
            All
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ width: 1,mt:2, backgroundColor: 'var(--mui-palette-background-level3)', p: 2 }}>
        <Box width={1} sx={{ height: '50vh',pr:1, overflowY: 'auto' }}>
          
		  {state===0&&<ApprovalLeave arr={pendingApprovals} />}
		  {state===1&&<ActiveLeaves arr={pendingApprovals} />}
		  {state===2&&<AllLeaves arr={pendingApprovals} />}
        </Box>
      </Box>
    </Paper>
  );
}
