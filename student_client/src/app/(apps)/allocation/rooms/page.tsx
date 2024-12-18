'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import { Box, Button, Stack, Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';

import type { SelectedRoomProps } from '@/hooks/mutation/use-room';
import { useProfile2 } from '@/hooks/query/use-profile';
import { selectedRooms1 } from '@/components/allocation/rooms/LowerCont1/LeftCont/roomstemp';
import LowerCont1 from '@/components/allocation/rooms/LowerCont1/lower-cont1';
import LowerCont2 from '@/components/allocation/rooms/LowerCont2/lower-cont2';

export default function Rooms(): React.JSX.Element {
  const { data: profile } = useProfile2();
  const user = profile as AxiosResponse<ProfileResponse>;

  const [selectedRooms, setSelectedRooms] = React.useState<SelectedRoomProps[]>(selectedRooms1);
  const [floor, setFloor] = React.useState<string>('  ');

  const [stage, setStage] = React.useState<boolean>(false);

  const handlechange = ():void => {
    setStage(!stage);
  };

  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--Tray-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Tray-RoomColor': 'var(--mui-palette-primary-light)',
        '--Tray-Color': 'var(--mui-palette-secondary-light)',
        '--Room-color': 'var(--mui-palette-secondary-light)',
        '--Room-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Room-FontColor': 'var(--mui-palette-text-primary)',
        '--Map-Icon': 'var(--mui-palette-secondary-dark)',
        '--Cluster-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Room-ConnectorColor': 'var(--mui-palette-secondary-dark)',
        '--Room-Allotted': 'var(--mui-palette-success-main)',
        '--Room-Available': 'var(--mui-palette-primary-main)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 1 }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: 'var(--Page-HeadColor)', mb: 1 }}
          >{`Room Allocation - ${String(user?.data?.alloted_hostel?.hostel)}`}</Typography>
          <Typography>Team Leader can book rooms for the entire group.</Typography>
        </Box>
        <Box width="10%">
          <Button
            fullWidth
            variant="contained"
            disabled={selectedRooms.length < user?.data?.group?.size}
            onClick={() => {
              handlechange();
            }}
          >
            NEXT
          </Button>
        </Box>
      </Box>

      {stage ? (
        <LowerCont2 selectedRooms={selectedRooms} user={user} />
      ) : (
        <LowerCont1
          selectedRooms={selectedRooms}
          floor={floor}
          setSelectedRooms={setSelectedRooms}
          setFloor={setFloor}
          user={user}
        />
      )}
    </Stack>
  );
}
