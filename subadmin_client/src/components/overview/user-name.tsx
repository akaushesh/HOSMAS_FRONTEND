'use client';

import type * as React from 'react';
import type { SupervisorProfileResponse } from '@/services/profile';
import { Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';

import { useProfile } from '@/hooks/query/use-profile';

export function UserName(): React.JSX.Element {
  const { data: profile } = useProfile();
  const userProfile = profile as AxiosResponse<SupervisorProfileResponse>;

  return (
    <div>
      <Typography variant="h4">Hi, {userProfile?.data?.supervisor?.name}!</Typography>
    </div>
  );
}

export function HostelName(): React.JSX.Element {
  const { data: profile } = useProfile();
  const userProfile = profile as AxiosResponse<SupervisorProfileResponse>;
  const hostelName = userProfile?.data?.supervisor?.hostel?.name;

  return <>{hostelName ? hostelName.toUpperCase() : '—'}</>;
}
