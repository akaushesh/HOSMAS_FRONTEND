'use client';

import * as React from 'react';
import type { CentralProfileResponse } from '@/services/profile';
import DomainIcon from '@mui/icons-material/Domain';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { AxiosResponse } from 'axios';

import { useProfile } from '@/hooks/query/use-profile';

export interface GroupOverviewProps {
  sx?: SxProps;
}

export function HostelAllotmentOverview({ sx }: GroupOverviewProps): React.JSX.Element {
  const { data: profile } = useProfile();
  // const { data: preferenceStatus } = usePreferenceStatus();

  const userProfile = profile as AxiosResponse<CentralProfileResponse>;
  // const userPreferenceStatus = preferenceStatus as AxiosResponse<PreferenceStatusResponse>;

  const allotedHostel = userProfile?.data?.student?.room?.hostel;

  const hostelText = allotedHostel ? allotedHostel?.name : 'None';

  // const preferenceStatusText = !userPreferenceStatus?.data?.is_live
  //   ? 'Preference is not live'
  //   : userProfile?.data?.is_preference_filled
  //     ? 'Preference form has not been filled'
  //     : 'Preference form has been filled';

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Alloted Hostel
              </Typography>
              <Typography variant="h4">{hostelText}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-error-main)', height: '56px', width: '56px' }}>
              <DomainIcon />
            </Avatar>
          </Stack>
          {/* <Stack spacing={1}>
            <Typography color="text.secondary" gutterBottom variant="overline">
              {preferenceStatusText}
            </Typography>
          </Stack> */}
        </Stack>
      </CardContent>
    </Card>
  );
}
