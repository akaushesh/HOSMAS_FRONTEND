'use client';

import type * as React from 'react';
import { useProfile } from '@/hooks/query/use-profile';
import type { SupervisorProfileResponse } from '@/services/profile';
import { Typography, Stack } from '@mui/material';
import type { AxiosResponse } from 'axios';

export function WelcomeHeader(): React.JSX.Element {
  const { data: profile } = useProfile();
  const userProfile = profile as AxiosResponse<SupervisorProfileResponse>;
  const adminName = userProfile?.data?.supervisor?.name || 'Admin';

  return (
    <Stack spacing={0.5} sx={{ pt: 1 }}>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: { xs: '22.8px', md: '34.2px' },
          lineHeight: { xs: '34.2px', md: '51.3px' },
          color: '#7B0000',
        }}
      >
        Hi, {adminName}!
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: { xs: '15.2px', md: '19px' },
          lineHeight: { xs: '22.8px', md: '28.5px' },
          color: '#000000',
        }}
      >
        Welcome Back to Hosmas
      </Typography>
    </Stack>
  );
}
