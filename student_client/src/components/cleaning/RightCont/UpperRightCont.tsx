'use client';

import * as React from 'react';
import { type CleaningRequest } from '@/services/cleaning';
import { type CentralProfileResponse } from '@/services/profile';
import { LoadingButton } from '@mui/lab';
import { Chip, FormControl, Grid, InputLabel, OutlinedInput, Paper, Stack, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { type AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useMarkCleaningRequestComplete } from '@/hooks/mutation/use-cleaning';
import { useProfile } from '@/hooks/query/use-profile';

const getStatusColor = (status: string): 'default' | 'primary' | 'success' | 'warning' => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Assigned':
      return 'primary';
    default:
      return 'default';
  }
};

export default function UpperRightCont(props: CleaningRequest): React.JSX.Element {
  const { data: profile, isPending } = useProfile();
  const queryClient = useQueryClient();
  const user = profile as AxiosResponse<CentralProfileResponse>;
  logger.debug('UpperRightCont', props);

  const handleSubmit = async (): Promise<void> => {
    markDone({ rating: 0, comments: '' });
    await queryClient.invalidateQueries({ queryKey: ['getCleaningRequests'] });
    logger.debug('Cleaning request marked as done');
  };

  const { mutate: markDone } = useMarkCleaningRequestComplete({});

  // const [value, setValue] = React.useState<number | null>(null);

  return (
    <Paper elevation={10} sx={{ p: 3, width: '100%' }}>
      <Typography variant="h5">
        {user?.data?.student?.room?.hostel?.name} {user?.data?.student?.room?.name || 'NULL'}
      </Typography>

      <Stack mt={2} spacing={3}>
        <Chip label={props.status} color={getStatusColor(props.status)} sx={{ width: '6rem', fontWeight: 'bold' }} />

        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth disabled>
              <InputLabel>
                {props.slot ? `${props.slot_details.start} - ${props.slot_details.end}` : 'Slot not assigned'}
              </InputLabel>
              <OutlinedInput defaultValue="" label="Slot" />
            </FormControl>
          </Grid>

          <Grid item md={6} xs={12}>
            <FormControl fullWidth disabled>
              <InputLabel>{props.worker ? props.worker_details.name : 'Cleaner not assigned'}</InputLabel>
              <OutlinedInput defaultValue="" label="Cleaner" />
            </FormControl>
          </Grid>
        </Grid>

        {/* {props.status !== 'Pending' ? (
          <Rating
            name="worker-rating"
            disabled={props.status === 'Completed'}
            value={value}
            size="large"
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          />
        ) : null} */}

        <Stack spacing={1}>
          <LoadingButton
            disabled={props?.status !== 'Assigned'}
            loading={isPending}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Mark as done
          </LoadingButton>
        </Stack>
      </Stack>
    </Paper>
  );
}
