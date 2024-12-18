'use client';

import type * as React from 'react';
import type { CentralProfileResponse } from '@/services/profile';
import { Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';

import { useProfile2 } from '@/hooks/query/use-profile';

export function UserName(): React.JSX.Element {
  const { data: profile } = useProfile2();
  const userProfile = profile as AxiosResponse<CentralProfileResponse>;

  return (
    <div>
      <Typography variant="h4">Hi, {userProfile?.data?.student?.name}!</Typography>
    </div>
  );
}
