'use client';

import * as React from 'react';
import { type CleaningRequest } from '@/services/cleaning';
import { type CentralProfileResponse } from '@/services/profile';
import { LoadingButton } from '@mui/lab';
import { Chip, Paper, Rating, Stack, Typography } from '@mui/material';
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
    markDone({ rating: value ? value : 0, comments: '' });
    await queryClient.invalidateQueries({ queryKey: ['getProfile'] });
    logger.debug('Cleaning request marked as done');
  };

  const { mutate: markDone } = useMarkCleaningRequestComplete({});

  const [value, setValue] = React.useState<number | null>(null);

  return (
    <Paper elevation={10} sx={{ p: 3, width: '100%' }}>
      <Typography variant="h5">
        {user?.data?.student?.room?.hostel?.name} {user?.data?.student?.room?.name || 'NULL'}
      </Typography>

      <Stack mt={1}>
        <Chip
          label={props.status}
          color={getStatusColor(props.status)}
          sx={{ mt: 1, width: '6rem', fontWeight: 'bold' }}
        />
      </Stack>

      <Rating
        name="worker-rating"
        disabled={props.status !== 'Assigned'}
        value={value}
        size="large"
        sx={{ mt: 3 }}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      />

      <Stack spacing={1} mt={3}>
        <LoadingButton loading={isPending} variant="contained" color="primary" onClick={handleSubmit}>
          Mark as done
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
