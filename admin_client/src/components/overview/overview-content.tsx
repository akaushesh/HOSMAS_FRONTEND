'use client';

import * as React from 'react';
import { useProfile } from '@/hooks/query/use-profile';
import type { SupervisorProfileResponse } from '@/services/profile';
import type { AxiosResponse } from 'axios';
import { WelcomeHeader } from './welcome-header';
import { AllotmentIdCard } from './allotment-id-card';
import { Box, Stack, Skeleton } from '@mui/material';

export function OverviewContent(): React.JSX.Element {
  const { data: profile, isLoading } = useProfile();
  const userProfile = profile as AxiosResponse<SupervisorProfileResponse>;
  const supervisor = userProfile?.data?.supervisor;

  if (isLoading) {
    return (
      <Stack spacing={3}>
        <Skeleton variant="text" sx={{ fontSize: '2rem', width: '30%' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.2rem', width: '20%' }} />
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          <Skeleton variant="rounded" width="100%" height={280} sx={{ borderRadius: '16px', maxWidth: '480px' }} />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Skeleton variant="circular" width={8} height={8} />
          <Box sx={{ mx: 0.5 }} />
          <Skeleton variant="circular" width={8} height={8} />
          <Box sx={{ mx: 0.5 }} />
          <Skeleton variant="circular" width={8} height={8} />
        </Box>
      </Stack>
    );
  }

  return (
    <Stack spacing={4} sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Welcome Header */}
      <WelcomeHeader />

      {/* Centered Allotment ID Card Layout with decorative spacing */}
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
          name={supervisor?.name || 'N/A'}
          /* ponytail: Supervisor profile does not contain roll number or room fields since they are staff/admins.
             We fallback to supervisor.id as rollNumber and "Office" as room.
             Upgrade path: Add employee_id and room_number fields to the supervisor DB schema if needed. */
          rollNumber={supervisor?.id?.toString() || 'N/A'}
          hostel={supervisor?.hostel?.name || 'N/A'}
          room="Office"
        />
      </Box>
    </Stack>
  );
}
