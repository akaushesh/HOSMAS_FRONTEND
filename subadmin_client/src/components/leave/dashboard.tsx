'use client';

import * as React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Button, Paper, Stack, Tooltip, Typography } from '@mui/material';

import CustomSwitch from '../core/switch';
import ApprovalLeave from './approvals';
import RecentLeaves from './recents';
import { useRouter } from 'next/navigation';

const pendingApprovals = [
  {
    id: 'uigyehhgjuk',
    name: 'John Doe',
    roll_num: 102217023,
    reason: 'Sick Leave',
    location: 'Kapurthala',
    leaveDateFrom: '2024-11-01T00:00:00Z',
    leaveDateTo: '2024-12-22T00:00:00Z',
    status: 'a',
  },
  {
    id: 'uigyehhgbcjdb',
    name: 'John Doe 2',
    roll_num: 102217022,
    reason: 'Picnic',
    location: 'Delhi',
    leaveDateFrom: '2024-12-01T00:00:00Z',
    leaveDateTo: '2024-12-28T00:00:00Z',
    status: 'd',
  },
  {
    id: 'uigyemmjbhhgjuk',
    name: 'John Doe 3',
    roll_num: 102217021,
    reason: 'Hackathon',
    location: 'Chandigarh',
    leaveDateFrom: '2024-10-01T00:00:00Z',
    leaveDateTo: '2024-11-28T00:00:00Z',
    status: 'd',
  },
];

export default function Dashboard(): React.JSX.Element {
  const [autoApproval, setAutoApproval] = React.useState(false);

  const handleAutoApproval = (): void => {
    setAutoApproval(!autoApproval);
  };

  const router=useRouter();

  const activeLeaves = 78;

  return (
    <Stack direction="row" alignItems="stretch" gap={4} justifyContent="space-between">
      <Paper sx={{ minHeight: '65vh', width: '100%', mt: 4, p: 3 }} elevation={10}>
        <Stack
          direction="row"
          width={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
          gap={4}
        >
          <Box>
            <Typography variant="h5" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Automatic Leave Approval
              <Tooltip title="This feature is enabled by default" arrow>
                <InfoOutlinedIcon sx={{ color: 'var(--mui-palette-text-secondaryChannel)', ml: 2 }} />
              </Tooltip>
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '13px', color: 'var(--mui-palette-text-secondary)' }}>
              To be utilized when necessarys
            </Typography>
          </Box>

          <CustomSwitch color="primary" defaultChecked={autoApproval} onChange={handleAutoApproval} />
        </Stack>

        <Stack direction="row" width={1} justifyContent="space-between" alignItems="center" gap={2} mt={1.4}>
          <Stack
            direction="row"
            width="60%"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
          >
            <Typography variant="h5" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Active Leaves
            </Typography>
            <Typography variant="h4" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              {activeLeaves}
            </Typography>
          </Stack>

          <Button variant="contained" sx={{ width: '35%' }} color="primary" onClick={() => {router.push('/leave/records?state=1')}}>
            View Active Leaves
          </Button>
        </Stack>

        <Stack
          width={1}
          alignItems="center"
          gap={2}
          mt={1.4}
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
        >
          <Stack direction="row" width={1} justifyContent="space-between" alignItems="center">
            <Typography variant="h5" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Pending Approvals
            </Typography>
            <Button variant="text" sx={{ py: 0.7, borderRadius: 1 }} color="primary" onClick={() => {router.push('/leave/records?state=0')}}>
              View All
            </Button>
          </Stack>

          <Stack mt={1} width={1} p={1}>
            <ApprovalLeave arr={pendingApprovals} />
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ display:{xs:"none",lg:"block"}, minHeight: '65vh', width: '70%', mt: 4, p: 3 }} elevation={10}>

      <Stack
          width={1}
          alignItems="center"
          gap={2}
          mt={1.4}
          height={1}
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
        >
          <Stack direction="row" width={1} justifyContent="space-between" alignItems="center">
            <Typography variant="h5" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Recent Approvals
            </Typography>
            <Button variant="text" sx={{ py: 0.7, borderRadius: 1 }} color="primary" onClick={() => {router.push('/leave/records?state=2')}}>
              View All
            </Button>
          </Stack>

          <Stack mt={1} width={1} p={1}>
            <RecentLeaves arr={pendingApprovals} />
          </Stack>
        </Stack>


      </Paper>
    </Stack>
  );
}
