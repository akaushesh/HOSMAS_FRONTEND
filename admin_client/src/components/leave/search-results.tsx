/* eslint-disable array-callback-return -- to avoid it */
'use client';

import * as React from 'react';
import { type Leave } from '@/services/leave';
import { DoNotDisturbOn } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { useDeleteLeaveSlip, useUpdateLeaveSlip } from '@/hooks/mutation/use-leave';

import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';

interface RecordCardProps {
  arr: Leave[];
  refetch: () => void;
}

export default function SearchResult({ arr, refetch }: RecordCardProps): React.JSX.Element {
  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });

  const [lastStatus, setLastStatus] = React.useState<string | null>(null);

  const onSuccessUpdate = async (): Promise<void> => {
    if (lastStatus === 'a') {
      setRes({ msg: 'Leave Request Approved Successfully!', type: 'success' });
    } else if (lastStatus === 'd') {
      setRes({ msg: 'Leave Request Rejected Successfully!', type: 'success' });
    }
    setLastStatus(null);
    refetch();
  };

  const onErrorUpdate = async (): Promise<void> => {
    setRes({ msg: 'Something went wrong', type: 'error' });
    setLastStatus(null);
  };

  const { mutate: updateLeaveStatus } = useUpdateLeaveSlip({
    onSuccess: onSuccessUpdate,
    onError: onErrorUpdate,
  });

  const handleUpdateLeaveStatus = (status: string, transactionId: string): void => {
    setLastStatus(status);
    updateLeaveStatus({ status, transaction_id: transactionId });
  };

  const onSuccessDelete = async (): Promise<void> => {
    setRes({ msg: 'Leave Cancellation Successfull!', type: 'success' });
    refetch();
  };

  const onErrorDelete = async (): Promise<void> => {
    setRes({ msg: 'Something went wrong', type: 'error' });
  };

  const { mutate: deleteLeave } = useDeleteLeaveSlip({
    onSuccess: onSuccessDelete,
    onError: onErrorDelete,
  });

  const handleDeleteRecord = (transactionId: string): void => {
    deleteLeave(transactionId);
  };

  return (
    <Stack width={1} gap={2}>
      {arr.map((record) => {
        if (record.leaveStatus === 'c' || record.leaveStatus === 'rc') {
          return (
            <Stack width={1} key={record.transactionID} gap={1} sx={{ p: 2, background: 'white', borderRadius: 1 }}>
              <Stack width={1} direction="row" justifyContent="space-between" gap={1} alignItems="stretch">
                <Stack width="34%" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6" fontWeight={600} fontSize="20px" lineHeight={1} color="text.primary">
                      {record.studentName}
                    </Typography>
                    <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                      {record.rollNumber}
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  alignSelf="flex-start"
                  width="28%"
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Box textAlign="center">
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                      fontWeight={500}
                    >
                      {dayjs(record.leaveDateFrom).format('DD MMM YY')}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                      Dept
                    </Typography>
                  </Box>
                  <Box position="relative" width="20%" height="2px">
                    <Box
                      sx={{
                        width: { xs: '50%', sm: '80%' },
                        ml: { xs: '25%', sm: '10%' },
                        height: '2px',
                        backgroundColor: '#E5E5E5',
                        position: 'absolute',
                        top: '50%',
                      }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                      fontWeight={500}
                    >
                      {dayjs(record.leaveDateTo).format('DD MMM YY')}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                      Arrival
                    </Typography>
                  </Box>
                </Stack>

                <Stack width="34%" justifyContent="space-between" alignItems="flex-end">
                  <Typography variant="body1" color="text.primary">
                    <b>Place :</b> {record.location}
                  </Typography>
                </Stack>
              </Stack>
              <Stack width={1} direction="row" justifyContent="space-between" gap={1} alignItems="stretch" mt={0.5}>
                <Typography variant="body1" fontSize="16px" color="text.primary">
                  <b>Reason :</b> {record.reason}
                </Typography>
                <Stack direction="row" gap={1}>
                  {record.leaveStatus === 'c' ? (
                    <>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ py: 0.4, borderRadius: 1 }}
                        color="success"
                        onClick={() => {
                          handleUpdateLeaveStatus('a', record.transactionID);
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ py: 0.4, borderRadius: 1 }}
                        color="primary"
                        onClick={() => {
                          handleUpdateLeaveStatus('d', record.transactionID);
                        }}
                      >
                        Reject
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ py: 0.8, borderRadius: 1 }}
                      color="primary"
                      onClick={() => {
                        handleDeleteRecord(record.transactionID);
                      }}
                    >
                      Approve Cancellation
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Stack>
          );
        } else if (
          (record.leaveStatus === 'a' && dayjs().isAfter(dayjs(record?.leaveDateTo))) ||
          record.leaveStatus === 'd'
        ) {
          return (
            <Stack
              width={1}
              direction="row"
              justifyContent="space-between"
              gap={1}
              alignItems="center"
              key={record.transactionID}
              sx={{ p: 2, background: 'white', borderRadius: 1 }}
            >
              <Stack minWidth="18%" maxWidth="25%" gap={2} direction="row" justifyContent="space-between">
                {record.leaveStatus === 'd' ? <DoNotDisturbOn color="primary" sx={{ fontSize: '20px' }} /> : null}
                <Box>
                  <Typography variant="h6" fontWeight={600} fontSize="20px" lineHeight={1} color="text.primary">
                    {record.studentName}
                  </Typography>
                  <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                    {record.rollNumber}
                  </Typography>
                </Box>
              </Stack>

              <Stack
                alignSelf="flex-start"
                width="30%"
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                    fontWeight={500}
                  >
                    {dayjs(record.leaveDateFrom).format('DD MMM YY')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                    Dept
                  </Typography>
                </Box>
                <Box position="relative" width="20%" height="2px">
                  <Box
                    sx={{
                      width: { xs: '50%', sm: '80%' },
                      ml: { xs: '25%', sm: '10%' },
                      height: '2px',
                      backgroundColor:
                        record.leaveStatus === 'a'
                          ? 'var(--mui-palette-success-main)'
                          : 'var(--mui-palette-error-main)',
                      position: 'absolute',
                      top: '50%',
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                    fontWeight={500}
                  >
                    {dayjs(record.leaveDateTo).format('DD MMM YY')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                    Arrival
                  </Typography>
                </Box>
              </Stack>

              <Stack width="25%" justifyContent="space-between" alignItems="flex-start" ml={8}>
                <Typography variant="body1" fontWeight={600} fontSize="16px" color="text.primary">
                  Place :<b style={{ fontWeight: '400' }}> {record.location}</b>
                </Typography>
                <Typography variant="body1" fontWeight={600} fontSize="16px" color="text.primary">
                  Reason :<b style={{ fontWeight: '400' }}> {record.reason}</b>
                </Typography>
              </Stack>
            </Stack>
          );
        } else if (record.leaveStatus === 'a' && dayjs().isBefore(dayjs(record?.leaveDateTo))) {
          return (
            <Stack
              width={1}
              direction="row"
              justifyContent="space-between"
              gap={1}
              alignItems="center"
              key={record.transactionID}
              sx={{ p: 2, background: 'white', borderRadius: 1 }}
            >
              <Stack minWidth="20%" maxWidth="28%" justifyContent="space-between">
                <Box>
                  <Typography variant="h6" fontWeight={600} fontSize="20px" lineHeight={1} color="text.primary">
                    {record.studentName}
                  </Typography>
                  <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                    {record.rollNumber}
                  </Typography>
                </Box>
              </Stack>

              <Stack
                alignSelf="flex-start"
                width="24%"
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                    fontWeight={500}
                  >
                    {dayjs(record.leaveDateFrom).format('DD MMM YY')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                    Dept
                  </Typography>
                </Box>
                <Box position="relative" width="20%" height="2px">
                  <Box
                    sx={{
                      width: { xs: '50%', sm: '80%' },
                      ml: { xs: '25%', sm: '10%' },
                      height: '2px',
                      backgroundColor: 'var(--mui-palette-success-main)',
                      position: 'absolute',
                      top: '50%',
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                    fontWeight={500}
                  >
                    {dayjs(record.leaveDateTo).format('DD MMM YY')}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                    Arrival
                  </Typography>
                </Box>
              </Stack>

              <Stack width="25%" justifyContent="space-between" alignItems="flex-start" ml={6}>
                <Typography variant="body1" fontWeight={600} fontSize="16px" color="text.primary">
                  Place :<b style={{ fontWeight: '400' }}> {record.location}</b>
                </Typography>
                <Typography variant="body1" fontWeight={600} fontSize="16px" color="text.primary">
                  Reason :<b style={{ fontWeight: '400' }}> {record.reason}</b>
                </Typography>
              </Stack>

              <Box
                sx={{
                  borderRadius: 1,
                  py: 0.8,
                  px: 3,
                  fontSize: '16px',
                  backgroundColor: 'var(--mui-palette-success-main)',
                  color: 'white',
                  border: '2px solid var(--mui-palette-success-main)',
                }}
              >
                Active
              </Box>
            </Stack>
          );
        }
      })}
      <SnackBarAlert setMsg={setRes} msg={res} />
    </Stack>
  );
}
