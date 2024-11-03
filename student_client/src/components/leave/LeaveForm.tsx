'use client';

import * as React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

import { logger } from '@/lib/default-logger';
import { useCreateLeaveSlip } from '@/hooks/mutation/use-leave';

interface LeaveFormInputs {
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  reason: string | null;
}

export default function LeaveForm(): React.JSX.Element {
  const { control, handleSubmit, reset, watch } = useForm<LeaveFormInputs>({
    defaultValues: {
      startDate: null,
      endDate: null,
      location: null,
      reason: null,
    },
  });

  const queryClient = useQueryClient();

  const onSuccess = async (): Promise<void> => {
    await queryClient.invalidateQueries({ queryKey: ['getLeaves'] });
    reset();
  };

  const { mutate: createLeaveSlip, isPending } = useCreateLeaveSlip({ onSuccess });

  const startDate = watch('startDate');

  const onSubmit = (data: LeaveFormInputs): void => {
    const formattedData = {
      leaveDateFrom: dayjs(data.startDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
      leaveDateTo: dayjs(data.endDate).format('YYYY-MM-DDTHH:mm:ss[Z]'),
    };

    createLeaveSlip(formattedData);

    logger.debug('LeaveForm', formattedData);
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
          render={({ field: { onChange, value, ...fieldProps }, fieldState: { error } }) => (
            <DatePicker
              label="Start Date"
              value={value}
              onChange={onChange}
              format="DD/MM/YYYY"
              minDate={dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: Boolean(error),
                  helperText: error?.message,
                  ...fieldProps,
                },
              }}
            />
          )}
        />

        <Controller
          name="endDate"
          control={control}
          rules={{
            required: 'Please enter end date',
            validate: (value) =>
              !startDate || dayjs(value).isAfter(dayjs(startDate)) || 'End date must be after start date',
          }}
          render={({ field: { onChange, value, ...fieldProps }, fieldState: { error } }) => (
            <DatePicker
              label="End Date"
              value={value}
              onChange={onChange}
              format="DD/MM/YYYY"
              minDate={startDate ? dayjs(startDate).add(1, 'day') : dayjs()}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: Boolean(error),
                  helperText: error?.message,
                  ...fieldProps,
                },
              }}
            />
          )}
        />

        <Controller
          name="location"
          control={control}
          rules={{ required: 'Please enter your location' }}
          render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
            <TextField
              inputRef={ref}
              {...fieldProps}
              label="Location"
              error={Boolean(error)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="reason"
          control={control}
          rules={{ required: 'Please fill the reason for this leave' }}
          render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
            <TextField
              inputRef={ref}
              {...fieldProps}
              label="Reason for Leave"
              multiline
              rows={4}
              error={Boolean(error)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />

        <LoadingButton
          loading={isPending}
          type="submit"
          variant="contained"
          size="large"
          endIcon={<ArrowRightAltIcon />}
          sx={{ mt: 2 }}
        >
          Next
        </LoadingButton>
      </Stack>
    </Box>
  );
}
