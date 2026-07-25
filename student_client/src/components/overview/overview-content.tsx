'use client';

import * as React from 'react';
import { useProfile } from '@/hooks/query/use-profile';
import type { CentralProfileResponse } from '@/services/profile';
import type { AxiosResponse } from 'axios';
import { WelcomeHeader } from './welcome-header';
import { AllotmentIdCard } from './allotment-id-card';
import { Box, Stack, Skeleton } from '@mui/material';

export function OverviewContent(): React.JSX.Element {
  const { data: profile, isLoading } = useProfile();
  const userProfile = profile as AxiosResponse<CentralProfileResponse>;
  const student = userProfile?.data?.student;

  if (isLoading) {
    return (
      <Stack spacing={3}>
        <Skeleton variant="text" sx={{ fontSize: '2rem', width: '30%' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.2rem', width: '20%' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 2 }}>
          <Box
            sx={{
              position: 'relative',
              width: '749px',
              height: '520px',
              transform: { xs: 'scale(0.45)', sm: 'scale(0.7)', md: 'scale(0.9)', lg: 'scale(1)' },
              transformOrigin: 'top center',
              mb: {
                xs: `-286px`,
                sm: `-156px`,
                md: `-52px`,
                lg: `0px`,
              },
            }}
          >
            <Skeleton variant="rounded" width="100%" height="100%" sx={{ borderRadius: '20px' }} />
          </Box>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack spacing={4} sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <WelcomeHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // py: { xs: 4, md: 8 },
          flex: '1 1 auto',
        }}
      >
        <AllotmentIdCard
          name={student?.name || 'N/A'}
          rollNumber={student?.roll_number?.toString() || 'N/A'}
          hostel={student?.room?.hostel?.name || 'N/A'}
          room={student?.room?.name || 'N/A'}
        />
      </Box>
    </Stack>
  );
}
