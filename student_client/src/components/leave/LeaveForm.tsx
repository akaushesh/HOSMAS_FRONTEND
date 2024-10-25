'use client';

import * as React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useForm } from 'react-hook-form';

import { logger } from '@/lib/default-logger';

interface LeaveFormInputs {
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  reason: string;
}

interface LeaveFormProps {
  setPhaseOne: () => void;
}

export default function LeaveForm({ setPhaseOne }: LeaveFormProps): React.JSX.Element {
  const { control, handleSubmit } = useForm<LeaveFormInputs>({
    defaultValues: {
      startDate: null,
      endDate: null,
      location: null,
      reason: '',
    },
  });

  const onSubmit = (data: LeaveFormInputs): void => {
    logger.debug('LeaveForm', data);
    setPhaseOne();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 500,
        mx: 'auto',
        p: 3,
      }}
    >
      <Stack spacing={3}>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: 'Please enter start date' }}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Start Date"
              {...field}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: Boolean(error),
                  helperText: error?.message,
                },
              }}
            />
          )}
        />

        <Controller
          name="endDate"
          control={control}
          rules={{ required: 'Please enter end date' }}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="End Date"
              {...field}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: Boolean(error),
                  helperText: error?.message,
                },
              }}
            />
          )}
        />

        <Controller
          name="location"
          control={control}
          rules={{ required: 'Please enter your location' }}
          render={({ field, fieldState: { error } }) => (
            <TextField {...field} label="Location" error={Boolean(error)} helperText={error?.message} fullWidth />
          )}
        />

        <Controller
          name="reason"
          control={control}
          rules={{ required: 'Please fill the reason for this leave' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Reason for Leave"
              multiline
              rows={4}
              error={Boolean(error)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />

        <Button type="submit" variant="contained" size="large" endIcon={<ArrowRightAltIcon />} sx={{ mt: 2 }}>
          Next
        </Button>
      </Stack>
    </Box>
  );
}
