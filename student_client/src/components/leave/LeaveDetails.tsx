import * as React from 'react';
import { type Leave } from '@/services/leave';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { useDeleteLeaveSlip, useUpdateLeaveSlip } from '@/hooks/mutation/use-leave';

import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';

interface LeaveDetailsProps {
  details: Leave | undefined;
  phase: number;
  refetch: () => void;
}

export default function LeaveDetails({ refetch, details, phase }: LeaveDetailsProps): React.JSX.Element {
  const [actionState, setActionState] = React.useState<'default' | 'extend' | 'revise'>('default');
  const [isCancelDialogOpen, setCancelDialogOpen] = React.useState(false);

  const handleCancelDialogOpen = (): void => {
    setCancelDialogOpen(true);
  };
  const handleCancelDialogClose = (): void => {
    setCancelDialogOpen(false);
  };

  const handleActionToggle = (action: 'extend' | 'revise'): void => {
    setPatchData({
      extendArrivalDate: null,
      revise: {
        leaveDateFrom: null,
        leaveDateTo: null,
      },
    });
    setActionState((prev) => (prev === action ? 'default' : action));
  };

  const [patchData, setPatchData] = React.useState({
    extendArrivalDate: null as Date | null,
    revise: {
      leaveDateFrom: null as Date | null,
      leaveDateTo: null as Date | null,
    },
  });

  const handleExtendArrivalDateChange = (date: Date | null): void => {
    setPatchData((prev) => ({
      ...prev,
      extendArrivalDate: date,
    }));
  };

  const handleReviseDateChange = (date: Date | null, type: 'arrival' | 'departure'): void => {
    if (type === 'arrival') {
      setPatchData((prev) => ({
        ...prev,
        revise: { ...prev.revise, leaveDateTo: date },
      }));
    } else {
      setPatchData((prev) => ({
        ...prev,
        revise: { ...prev.revise, leaveDateFrom: date },
      }));
    }
  };

  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });

  const onSuccessUpdate = async (): Promise<void> => {
    refetch();
    setRes({ msg: 'Leave Updated Successfully', type: 'success' });
  };
  const onErrorUpdate = async (): Promise<void> => {
    refetch();
    setRes({ msg: 'Leave Update Failed', type: 'error' });
  };

  const { mutate: updateLeaveSlip } = useUpdateLeaveSlip({ onSuccess: onSuccessUpdate, onError: onErrorUpdate });

  const handleUpdate = (): void => {
    if (actionState === 'extend') {
      updateLeaveSlip({
        arrival_date: dayjs(patchData.extendArrivalDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
        transaction_id: details?.transactionID || '',
      });
      setActionState('default');
    } else {
      updateLeaveSlip({
        arrival_date: dayjs(patchData.revise.leaveDateTo).format('YYYY-MM-DDTHH:mm:ss[Z]'),
        transaction_id: details?.transactionID || '',
        departure_date: dayjs(patchData.revise.leaveDateFrom).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      });
      setActionState('default');
    }
  };

  const onSuccessDelete = async (): Promise<void> => {
    if (details?.leaveStatus === 'c') {
      setRes({ msg: 'Leave Deleted Successfully', type: 'success' });
    } else if (details?.leaveStatus === 'a') {
      setRes({ msg: 'Leave Cancellation Requested Successfully', type: 'success' });
    }
    refetch();
  };
  const onErrorDelete = async (): Promise<void> => {
    refetch();
    setRes({ msg: 'Leave Update Failed', type: 'error' });
  };
  const { mutate: deleteLeaveSlip } = useDeleteLeaveSlip({ onSuccess: onSuccessDelete, onError: onErrorDelete });

  const handleDeleteSlip = (): void => {
    deleteLeaveSlip({ transactionId: details?.transactionID || '' });
    setCancelDialogOpen(false);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        backgroundColor: 'var(--mui-palette-background-level3)',
        ...details?.leaveStatus==='rc'&&({
          opacity: 0.35,
          pointerEvents: 'none',
        }),
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-evenly"
        py={2}
        px={1}
        sx={{ gap: { xs: 2, sm: 2 } }}
      >
        <CalendarMonthIcon width="5%" sx={{ fontSize: { xs: '2.2rem', sm: '2.5rem' }, mb: 0.2 }} />

        <Stack width={1} direction="row" justifyContent="space-evenly" alignItems="center">
          <Box textAlign="center">
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
              fontWeight={500}
            >
              {dayjs(details?.leaveDateFrom).format('DD MMM YY')}
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
              {dayjs(details?.leaveDateTo).format('DD MMM YY')}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
              Arrival
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Paper
        elevation={2}
        sx={{
          backgroundColor: '#fff',
          mb: 4,
          mt: 2,
          p: 2,
          width: { xs: '100%', sm: '90%' },
          ml: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {actionState === 'default' ? (
          <>
            <Grid container mb={1.3} alignItems="center" justifyContent={{ xs: 'center', sm: 'space-between' }}>
              <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6" fontWeight={600}>
                  Reason :
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: '19px', sm: '16px' }, fontWeight: { xs: 600, sm: 500 }, lineHeight: 1 }}
                >
                  {details?.reason}
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent={{ xs: 'center', sm: 'space-between' }}>
              <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="h6" fontWeight={600}>
                  Place of Visit :
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" lineHeight={1}>
                  {details?.location}
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : actionState === 'extend' ? (
          <Stack
            sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 5 } }}
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            width={1}
          >
            <Box display={{ xs: 'none', sm: 'block' }}>
              <Typography variant="body1">
                Select <span style={{ color: 'var(--mui-palette-primary-main)' }}>*</span>
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                Arrival Date
              </Typography>
            </Box>

            <DatePicker
              label="Arrival Date"
              defaultValue={null}
              slotProps={{
                textField: {
                  sx: { width: { xs: 0.9, sm: '50%' } },
                  error: false,
                  helperText: '',
                },
              }}
              value={patchData.extendArrivalDate}
              onChange={handleExtendArrivalDateChange}
            />
          </Stack>
        ) : (
          <Stack
            sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 5 } }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack width={1}>
              <DatePicker
                label="Departure "
                defaultValue={null}
                slotProps={{
                  textField: {
                    error: false,
                    helperText: '',
                  },
                }}
                value={patchData.revise.leaveDateFrom}
                onChange={(date) => {
                  handleReviseDateChange(date, 'departure');
                }}
              />
              <Typography
                variant="subtitle1"
                fontSize="14px"
                color="var(--mui-palette-text-secondaryChannel)"
                textAlign="center"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                New Dept
              </Typography>
            </Stack>
            <Stack width={1}>
              <DatePicker
                label="Arrival"
                defaultValue={null}
                slotProps={{
                  textField: {
                    error: false,
                    helperText: '',
                  },
                }}
                value={patchData.revise.leaveDateTo}
                onChange={(date) => {
                  handleReviseDateChange(date, 'arrival');
                }}
              />
              <Typography
                variant="subtitle1"
                fontSize="14px"
                color="var(--mui-palette-text-secondaryChannel)"
                textAlign="center"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                New Arrival
              </Typography>
            </Stack>
          </Stack>
        )}
      </Paper>

      {details?.leaveStatus === 'rc' ? (
        <Stack
          direction="row"
          gap={2}
          sx={{ background: 'var(--mui-palette-primary-main)', p: 1.5, borderRadius: 1 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Button
              variant="outlined"
              sx={{
                justifySelf: 'flex-start',
                py: { xs: 1, sm: 1.7 },
                px: { xs: 1, sm: 1.6 },
                minWidth: 0,
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: 1,
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.95)',
                },
              }}
            >
               <DoDisturbOnIcon sx={{ fontSize: { xs: '28px', sm: '42px' } }} />
            </Button>

            <Box justifySelf="flex-start">
              <Typography sx={{ fontSize: { xs: '16px', sm: '24px' }, color: 'white' }} lineHeight={1} fontWeight={600}>
                Cancellation 
              </Typography>
              <Typography
                alignSelf="flex-start"
                lineHeight={1}
                sx={{ color: 'white', fontSize: { xs: '12px', sm: '16px' } }}
                mt="3px"
                fontWeight={400}
              >
                Requested
              </Typography>
            </Box>
          </Stack>
        </Stack>
      ) : (
        <>
          {actionState === 'default' ? (
            <Stack direction="row" sx={{ gap: { xs: 1.4, sm: 3 } }} justifyContent="space-evenly">
              <Button
                variant="contained"
                fullWidth
                sx={{ py: { xs: 0, sm: 2 }, display: 'flex', alignItems: 'center', flexDirection: 'column' }}
                onClick={() => {
                  handleActionToggle('revise');
                }}
                disabled={phase === 2}
              >
                <ReplyAllIcon sx={{ fontSize: { xs: '26px', sm: '36px' }, mb: 0.7 }} />
                <Box>
                  <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1.2' } }} lineHeight={1} fontWeight={600}>
                    Revise
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                    alignSelf="flex-start"
                    ml={0.2}
                    mt="1px"
                    lineHeight={1}
                    textAlign="left"
                    fontWeight={400}
                  >
                    Period
                  </Typography>
                </Box>
              </Button>

              <Button
                variant="contained"
                fullWidth
                sx={{ py: 1.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}
                onClick={() => {
                  handleActionToggle('extend');
                }}
                disabled={phase === 1}
              >
                <FormatIndentIncreaseIcon sx={{ fontSize: { xs: '22px', sm: '32px' }, mb: 1 }} />
                <Box>
                  <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1.2' } }} lineHeight={1} fontWeight={600}>
                    Extend
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                    alignSelf="flex-start"
                    ml={0.2}
                    mt="1px"
                    lineHeight={1}
                    textAlign="left"
                    fontWeight={400}
                  >
                    Leave
                  </Typography>
                </Box>
              </Button>

              <Button
                variant="contained"
                fullWidth
                sx={{ py: 1.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}
                onClick={handleCancelDialogOpen}
              >
                <DoDisturbOnIcon sx={{ fontSize: { xs: '22px', sm: '32px' }, mb: 1 }} />
                <Box>
                  <Typography sx={{ fontSize: { xs: '0.8rem', sm: '1.2' } }} lineHeight={1} fontWeight={600}>
                    {details?.leaveStatus === 'a' ? 'Request' : 'Cancel'}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                    alignSelf="flex-start"
                    ml={0.2}
                    mt="1px"
                    lineHeight={1}
                    textAlign="left"
                    fontWeight={400}
                  >
                    {details?.leaveStatus === 'a' ? 'Cancellation' : 'Leave'}
                  </Typography>
                </Box>
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              gap={2}
              sx={{ background: 'var(--mui-palette-primary-main)', p: 1.5, borderRadius: 1 }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" gap={2} alignItems="center">
                <Button
                  variant="outlined"
                  sx={{
                    justifySelf: 'flex-start',
                    py: { xs: 1, sm: 1.7 },
                    px: { xs: 1, sm: 1.6 },
                    minWidth: 0,
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderRadius: 1,
                    backgroundColor: '#fff',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.95)',
                    },
                  }}
                  onClick={() => {
                    handleActionToggle(actionState);
                  }}
                >
                  {actionState === 'extend' ? (
                    <FormatIndentIncreaseIcon sx={{ fontSize: { xs: '26px', sm: '40px' } }} />
                  ) : (
                    <ReplyAllIcon sx={{ fontSize: { xs: '28px', sm: '42px' } }} />
                  )}
                </Button>

                <Box justifySelf="flex-start">
                  <Typography
                    sx={{ fontSize: { xs: '16px', sm: '24px' }, color: 'white' }}
                    lineHeight={1}
                    fontWeight={600}
                  >
                    {actionState === 'extend' ? 'Extend' : 'Revise'}
                  </Typography>
                  <Typography
                    alignSelf="flex-start"
                    lineHeight={1}
                    sx={{ color: 'white', fontSize: { xs: '12px', sm: '16px' } }}
                    mt="3px"
                    fontWeight={400}
                  >
                    {actionState === 'extend' ? 'Leave' : 'Period'}
                  </Typography>
                </Box>
              </Stack>
              <Button
                disabled={
                  actionState === 'extend'
                    ? patchData.extendArrivalDate === null
                    : patchData.revise.leaveDateFrom === null || patchData.revise.leaveDateTo === null
                }
                variant="outlined"
                sx={{
                  justifySelf: 'flex-end',
                  borderRadius: 0.7,
                  backgroundColor: '#fff',
                  px: { xs: 1, sm: 2.5 },
                  py: { xs: 0.4, sm: 1 },
                  fontSize: { xs: '12px', sm: '16px' },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.95)',
                  },
                  '&.Mui-disabled': {
                    color: 'rgb(190, 190, 190)',
                    backgroundColor: 'rgb(235, 235, 235)',
                  },
                }}
                onClick={() => {
                  handleUpdate();
                }}
              >
                Confirm
              </Button>
            </Stack>
          )}
        </>
      )}

      <Dialog open={isCancelDialogOpen} onClose={handleCancelDialogClose}>
        <DialogTitle>
          <Typography variant="h5" fontWeight={600}>
            {details?.leaveStatus === 'a' ? 'Request to cancel' : 'Cancel Leave'}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <DialogContentText>
            <Typography variant="body1" fontWeight={500}>
              Are you sure you want to {details?.leaveStatus === 'a' ? 'cancel ' : 'delete '} your leave?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2, gap: 1 }}>
          <Button sx={{ borderRadius: 1 }} variant="outlined" onClick={handleCancelDialogClose}>
            Close
          </Button>
          <Button sx={{ borderRadius: 1 }} variant="contained" onClick={handleDeleteSlip}>
            {details?.leaveStatus === 'a' ? 'Request' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      <SnackBarAlert setMsg={setRes} msg={res} />
    </Paper>
  );
}
