'use client';

import * as React from 'react';
import { Box, Button, Grid, Link, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

import { logger } from '@/lib/default-logger';
import { useCreateLeaveSlip } from '@/hooks/mutation/use-leave';
import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';

interface LeaveFormInputs {
  reason: string;
  startDate: string | null;
  endDate: string | null;
  place: string;
}

interface LeaveFormProps {
  refetch: () => void;
  caretakerEmail: string;
  parentsEmail: string;
}

export default function LeaveForm({ refetch,caretakerEmail, parentsEmail }: LeaveFormProps): React.JSX.Element {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaveFormInputs>();

  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });

  const onSuccess = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getLeaves'] });
    setRes({ msg: 'Leave Request Submitted', type: 'success' });
  };
  const onError = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getLeaves'] });
    setRes({ msg: 'Leave Request Failed', type: 'error' });
  };

  const { mutate: createLeaveSlip } = useCreateLeaveSlip({ onSuccess,onError });

  const onSubmit = (data: LeaveFormInputs): void => {
    const formattedData = {
      reason: data.reason,
      leaveDateFrom: dayjs(data.startDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      leaveDateTo: dayjs(data.endDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      location: data.place,
    };

    createLeaveSlip(formattedData);
    refetch();
    logger.debug('LeaveForm', formattedData);
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="reason"
            control={control}
            defaultValue=""
            rules={{ required: 'Reason is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Reason"
                fullWidth
                error={Boolean(errors.reason)}
                helperText={errors.reason?.message}
              >
                <MenuItem value="Sick">Sick</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Vacation">Vacation</MenuItem>
              </TextField>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="place"
            control={control}
            defaultValue=""
            rules={{ required: 'Place is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Place"
                fullWidth
                error={Boolean(errors.place)}
                helperText={errors.place?.message}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="startDate"
            control={control}
            defaultValue={null}
            rules={{ required: 'Start date is required' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="From"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: Boolean(errors.startDate),
                    helperText: errors.startDate?.message,
                  },
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="endDate"
            control={control}
            defaultValue=""
            rules={{ required: 'End date is required' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="To"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: Boolean(errors.endDate),
                    helperText: errors.endDate?.message,
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>

      <TextField label="Parent's Mail" type="email" fullWidth value={parentsEmail} disabled sx={{ mb: 3 }} />
      <Stack direction={{xs:"column",sm:"row"}} justifyContent="space-between" alignItems="center" width={1}>
        <Stack>
          <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
            <strong>To : </strong>
            <Link href={`mailto:${caretakerEmail}`} target="_blank" rel="noopener noreferrer">
              {caretakerEmail}
            </Link>
          </Typography>
        </Stack>

        <Stack justifyContent="center">
          <Button variant="contained" type="submit" sx={{ pl: 6, pr: 6, mt: 2, fontSize: '1rem', fontWeight: 'bold' }}>
            Submit
          </Button>
        </Stack>
      </Stack>

      <SnackBarAlert setMsg={setRes} msg={res} />
    </Box>
  );
}
