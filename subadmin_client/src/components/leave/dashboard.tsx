'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, Button, CircularProgress, Paper, Stack, Tooltip, Typography } from '@mui/material';

import { useAutoApprove } from '@/hooks/mutation/use-leave';
import { useGetRecords, useTotalLeaves } from '@/hooks/query/use-leave';

import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';
import CustomSwitch from '../core/switch';
import ApprovalLeave from './approvals';
import RecentLeaves from './recents';

export default function Dashboard(): React.JSX.Element {
  const { data: totalLeaves, isLoading: totalLeavesLoading, refetch } = useTotalLeaves();
  const activeLeaves = totalLeaves?.data.total_active_leaves;
  const autoApproval = totalLeaves?.data.auto_approve ?? false;
  const [settingAutoApprove, setSettingAutoApprove] = React.useState(false);
  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });

  const onSuccess = async (): Promise<void> => {
    if (autoApproval) {
      setRes({ msg: 'Auto Approval Disabled', type: 'success' });
    } else {
      setRes({ msg: 'Auto Approval Enabled', type: 'success' });
    }
    await refetch();
    setSettingAutoApprove(false);
  };
  const onError = async (): Promise<void> => {
    setRes({ msg: 'Something went wrong', type: 'error' });
    setSettingAutoApprove(false);
  };

  const { mutate: autoApprove } = useAutoApprove({ onSuccess, onError });

  const handleAutoApproval = (): Promise<void> => {
    return new Promise((resolve) => {
      setSettingAutoApprove(true);
      autoApprove(!autoApproval);
      resolve();
    });
  };

  const router = useRouter();

  const { data: pendingRecordsData, isLoading:isLoadingPendingRecords,refetch:refetchPendingRecords } = useGetRecords({ status: 'c', page: 1, limit: 3 });
  const pendingApprovals = pendingRecordsData?.data.leaves ?? [];

  const { data: RecentRecordsData, isLoading:isLoadingRecentRecords } = useGetRecords({ status: 'a', page: 1, limit: 6 });
  const recentRecords = RecentRecordsData?.data.leaves ?? [];

  return (
    <Stack direction="row" alignItems="stretch" gap={4} justifyContent="space-between">
      <Paper sx={{ minHeight: '65vh', width: '100%', mt: 4, p: 3 }} elevation={10}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          width={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
          gap={{ xs: 1.8, sm: 4 }}
        >
          <Box textAlign={{ xs: 'center', sm: 'left' }} width={1}>
            <Typography variant="h5" fontSize="23px" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Automatic Leave Approval
              <Tooltip title="This feature is enabled by default" arrow>
                <InfoOutlinedIcon sx={{ color: 'var(--mui-palette-text-secondaryChannel)', ml: 2 }} />
              </Tooltip>
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '13px', color: 'var(--mui-palette-text-secondary)', mt: { xs: 1, sm: 0 } }}
            >
              To be utilized when necessarys
            </Typography>
          </Box>

          <Box
            sx={{
              ...((totalLeavesLoading || settingAutoApprove) && {
                pointerEvents: 'none',
                opacity: 0.3,
                filter: 'grayscale(1)',
              }),
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <CustomSwitch
              color="primary"
              checked={Boolean(autoApproval)}
              disabled={totalLeavesLoading || settingAutoApprove}
              onChange={handleAutoApproval}
            />
          </Box>
        </Stack>

        <Stack direction="row" width={1} justifyContent="space-between" alignItems="center" gap={2} mt={1.4}>
          <Stack
            direction="row"
            width={{ xs: 1, sm: '60%' }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
            sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
          >
            <Typography variant="h5" fontSize="23px" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Active Leaves
            </Typography>

            {totalLeavesLoading ? (
              <Stack alignItems="center" justifyContent="center" height={1}>
                <CircularProgress size={27} />
              </Stack>
            ) : (
              <Typography variant="h4" sx={{ color: 'var(--mui-palette-text-primary)' }}>
                {activeLeaves}
              </Typography>
            )}
          </Stack>

          <Button
            variant="contained"
            sx={{ width: '35%', display: { xs: 'none', sm: 'block' } }}
            color="primary"
            onClick={() => {
              router.push('/leave/records?state=1');
            }}
          >
            View Active Leaves
          </Button>
        </Stack>

        <Stack
          width={1}
          alignItems="center"
          display={{ xs: 'none', sm: 'flex' }}
          gap={2}
          mt={1.4}
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
        >
          <Stack direction="row" width={1} justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontSize="23px" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Pending Approvals
            </Typography>
            <Button
              variant="text"
              sx={{ py: 0.7, borderRadius: 1 }}
              color="primary"
              onClick={() => {
                router.push('/leave/records?state=0');
              }}
            >
              View All
            </Button>
          </Stack>

          <Stack mt={1} width={1} p={1}>
            {isLoadingPendingRecords ? (
              <Stack alignItems="center" justifyContent="center" height="28vh">
                <CircularProgress size={27} />
              </Stack>
            ) : pendingApprovals.length === 0 ? (
              <Stack alignItems="center" justifyContent="center" height="28vh">
                <Typography variant="body1" sx={{ color: 'var(--mui-palette-text-secondary)', textAlign: 'center' }}>
                  No pending approvals
                </Typography>
              </Stack>
            ) : (
              <ApprovalLeave refetch={refetchPendingRecords} arr={pendingApprovals} />
            )}
          </Stack>
        </Stack>
      </Paper>

      <Paper sx={{ display: { xs: 'none', lg: 'block' }, minHeight: '65vh', width: '70%', mt: 4, p: 3 }} elevation={10}>
        <Stack
          width={1}
          alignItems="center"
          gap={2}
          mt={1.4}
          height={1}
          sx={{ py: 2, px: 3, backgroundColor: 'var(--mui-palette-background-level3)', borderRadius: 1 }}
        >
          <Stack direction="row" width={1} justifyContent="space-between" alignItems="center">
            <Typography variant="h5" fontSize="23px" sx={{ color: 'var(--mui-palette-text-primary)' }}>
              Recent Approvals
            </Typography>
            <Button
              variant="text"
              sx={{ py: 0.7, borderRadius: 1 }}
              color="primary"
              onClick={() => {
                router.push('/leave/records?state=2');
              }}
            >
              View All
            </Button>
          </Stack>

          <Stack mt={1} width={1} p={1}>
            {isLoadingRecentRecords ? (
              <Stack alignItems="center" justifyContent="center" height="44vh">
                <CircularProgress size={27} />
              </Stack>
            ) : recentRecords.length === 0 ? (
              <Stack alignItems="center" justifyContent="center" height="44vh">
                <Typography variant="body1" sx={{ color: 'var(--mui-palette-text-secondary)', textAlign: 'center' }}>
                  No recent approvals
                </Typography>
              </Stack>
            ) : (
              <RecentLeaves arr={recentRecords} />
            )}
          </Stack>
        </Stack>
      </Paper>
      <SnackBarAlert setMsg={setRes} msg={res} />
    </Stack>
  );
}
