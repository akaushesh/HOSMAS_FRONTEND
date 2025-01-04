'use client';

import * as React from 'react';
import { type Leave } from '@/services/leave';
import { Box, Button, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { useDeleteLeaveSlip } from '@/hooks/mutation/use-leave';

import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';

interface CancelCardProps {
  arr: Leave[];
  refetch: () => void;
}

export default function CancelLeaves({ arr, refetch }: CancelCardProps): React.JSX.Element {
  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });


  const onSuccess = async (): Promise<void> => {
    setRes({ msg: 'Leave Cancellation Successfull!', type: 'success' });
    refetch();
  };

  const onError = async (): Promise<void> => {
    setRes({ msg: 'Something went wrong', type: 'error' });
  };

  const { mutate: deleteLeave } = useDeleteLeaveSlip({
    onSuccess,
    onError,
  });

  const handleDeleteRecord = (transactionId: string): void => {
    deleteLeave(transactionId );
  };

  return (
    <Stack width={1} gap={2}>
      {arr.map((record) => (
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

            <Stack alignSelf="flex-start" width="28%" direction="row" justifyContent="space-evenly" alignItems="center">
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
              <Button variant="contained" size="small" sx={{ py: 0.8, borderRadius: 1 }} color="primary" onClick={() =>{ handleDeleteRecord(record.transactionID)}}>
                Approve Cancellation
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
          <SnackBarAlert setMsg={setRes} msg={res} />
    </Stack>
  );
}
