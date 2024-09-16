'use client';

import * as React from 'react';
import { type ProfileResponse } from '@/services/profile';
import { Button, Paper, Rating, Stack, Typography } from '@mui/material';
import { type AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useProfile } from '@/hooks/query/use-profile';
import TagButton from '@/components/core/tag-button';

export default function UpperRightCont(): React.JSX.Element {
  const { data: profile } = useProfile();
  const user = profile as AxiosResponse<ProfileResponse>;

  const handleSubmit = (): void => {
    logger.debug('Request Cleaning');
  };

  const [value, setValue] = React.useState<number | null>(null);

  return (
    <Paper elevation={10} sx={{ p: 3, width: '100%' }}>
      <Typography variant="h5">
        {user?.data?.alloted_hostel?.hostel} {user?.data?.alloted_room?.number || 'NULL'}
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
        <Button variant="outlined">Cancel Request</Button>
      </Stack>
    </Paper>
  );
}