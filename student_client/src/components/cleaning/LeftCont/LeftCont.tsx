'use client';

import * as React from 'react';
import { type CentralProfileResponse } from '@/services/profile';
import { Box, Paper, Typography } from '@mui/material';
import { type AxiosResponse } from 'axios';

import { logger } from '@/lib/default-logger';
import { useCleaningRequests } from '@/hooks/query/use-cleaning';
import { useProfile } from '@/hooks/query/use-profile';

import CleaningTable from './CleaningTable';

export default function LeftCont(): React.JSX.Element {
  const { data: profileData } = useProfile();
  const profile = profileData as AxiosResponse<CentralProfileResponse>;
  const room = profile?.data?.student?.room?.id;

  const { data: cleaningData } = useCleaningRequests({ room, page: 1, page_size: 10 });
  const cleaningRequests = cleaningData!;
  logger.debug('useCleaningRequests', cleaningRequests);

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Room Cleaning History</Typography>
      <Typography variant="body2" mt={1}>
        You can view your current and past room cleaning. Gets cleared after every 30 days.
      </Typography>

      <Box mt={2}>
        <CleaningTable tasks={cleaningData?.data?.results} />
      </Box>
    </Paper>
  );
}
