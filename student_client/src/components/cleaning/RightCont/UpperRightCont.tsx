'use client';

import * as React from 'react';
import { type CentralProfileResponse } from '@/services/profile';
import { Button, Paper, Rating, Stack, Typography } from '@mui/material';
import { type AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useMarkCleaningRequestComplete } from '@/hooks/mutation/use-cleaning';
import { useProfile } from '@/hooks/query/use-profile';
import TagButton from '@/components/core/tag-button';

export default function UpperRightCont(): React.JSX.Element {
  const { data: profile } = useProfile();
  const user = profile as AxiosResponse<CentralProfileResponse>;

  const handleSubmit = (): void => {
    markDone({ rating: value ? value : 0, comments: '' });
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
        <TagButton color="green">Assigned</TagButton>
      </Stack>

      <Rating
        name="worker-rating"
        value={value}
        size="large"
        sx={{ mt: 3 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <Stack spacing={1} mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Mark as done
        </Button>
        {/* <Button variant="outlined">Cancel Request</Button> */}
      </Stack>
    </Paper>
  );
}
