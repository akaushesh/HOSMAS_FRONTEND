'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import { Box, Paper, Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';
import type { SelectedRoomProps } from '@/hooks/mutation/use-room';
import SelectionTray from './SelectionTray';
import RoomSelector from './RoomSelector';

interface RoomAllocatorProps {
  selectedRooms: SelectedRoomProps[];
  floor: string;
  setSelectedRooms: React.Dispatch<React.SetStateAction<SelectedRoomProps[]>>;
  user: AxiosResponse<ProfileResponse>;
}

export default function RoomAllocator({ selectedRooms, setSelectedRooms, floor, user }: RoomAllocatorProps): React.JSX.Element {
  const paperSx = { width: 1, p: 3, height: 1 } as const;
  return (
    <Paper sx={paperSx} elevation={10}>
      <Typography variant="h5">{`Select your rooms (Max ${String(user?.data?.group?.size)})`}</Typography>
      <Typography variant="body2">Shared washrooms between rooms is depicted via a line between them.</Typography>

      <Box width={1}>
        <SelectionTray selectedRooms={selectedRooms} setSelectedRooms={setSelectedRooms} />
      </Box>

      <Box sx={{ mt: 4 }}>
        <RoomSelector selectedRooms={selectedRooms} setSelectedRooms={setSelectedRooms} user={user} floor={floor} />
      </Box>
    </Paper>
  );
}
