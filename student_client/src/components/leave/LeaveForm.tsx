'use client';

import * as React from 'react';
import { Box, Button, Grid, Link, MenuItem, TextField, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

import { logger } from '@/lib/default-logger';
import { useCreateLeaveSlip } from '@/hooks/mutation/use-leave';

interface LeaveFormInputs {
  reason: string;
  startDate: string;
  endDate: string;
  place: string;
  parentEmail: string;
}

export default function LeaveForm(): React.JSX.Element {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaveFormInputs>();

  const onSuccess = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getLeaves'] });
  };

  const { mutate: createLeaveSlip } = useCreateLeaveSlip({ onSuccess });

  const onSubmit = (data: LeaveFormInputs): void => {
    const formattedData = {
      reason: data.reason,
      leaveDateFrom: dayjs(data.startDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      leaveDateTo: dayjs(data.endDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      place: data.place,
      parentEmail: data.parentEmail,
    };

    createLeaveSlip(formattedData);
    logger.debug('LeaveForm', formattedData);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Submit New Leave
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
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

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="startDate"
              control={control}
              defaultValue=""
              rules={{ required: 'Start date is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="From"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={Boolean(errors.startDate)}
                  helperText={errors.startDate?.message}
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
                <TextField
                  {...field}
                  label="To"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={Boolean(errors.endDate)}
                  helperText={errors.endDate?.message}
                />
              )}
            />
          </Grid>
        </Grid>

        <TextField
          label="Parent's Mail"
          type="email"
          fullWidth
          value="Caretaker.D@thapar.edu"
          disabled
          sx={{ mb: 3 }}
        />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
              <strong>To : </strong>
              <Link>Caretaker.D@thapar.edu</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              sx={{ pl: 6, pr: 6, mt: 2, fontSize: '1rem', fontWeight: 'bold' }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
