'use client';

import type * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import { Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';

import { useProfile } from '@/hooks/query/use-profile';

export function UserName(): React.JSX.Element {
  const { data: profile } = useProfile();
  const userProfile = profile as AxiosResponse<ProfileResponse>;

  return (
    <div>
      <Typography variant="h4">Hi, {userProfile?.data?.supervisor?.name}!</Typography>
    </div>
  );
}

export function HostelName(): React.JSX.Element {
  const { data: profile } = useProfile();
  const userProfile = profile as AxiosResponse<ProfileResponse>;

  return <>HOSTEL D</>;
}
