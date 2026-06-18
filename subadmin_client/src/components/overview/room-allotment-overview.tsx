'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
// import GroupIcon from '@mui/icons-material/Group';
// import Avatar from '@mui/material/Avatar';
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

export function RoomAllotmentOverview({ sx }: GroupOverviewProps): React.JSX.Element {
  const { data: profile } = useProfile();

  const userProfile = profile as unknown as AxiosResponse<ProfileResponse>;

  const roomData = userProfile?.data?.alloted_room;

  const roomText = roomData ? roomData?.number : 'None';

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Alloted Room
              </Typography>
              <Typography variant="h4">{roomText}</Typography>
            </Stack>
            {/* <Avatar sx={{ backgroundColor: 'var(--mui-palette-success-main)', height: '56px', width: '56px' }}>
              <GroupIcon />
            </Avatar> */}
          </Stack>
          <Stack spacing={1}>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Room Booking is not live
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
