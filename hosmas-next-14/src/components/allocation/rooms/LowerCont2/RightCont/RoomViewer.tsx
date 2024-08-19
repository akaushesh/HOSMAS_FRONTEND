'use client';

import * as React from 'react';
import { Paper, Typography } from '@mui/material';

import type { SelectedRoomProps } from '@/hooks/mutation/use-room';

interface LowerCont2Props {
  selectedRooms: SelectedRoomProps[];
}

export default function RoomViewer({ selectedRooms }: LowerCont2Props): React.JSX.Element {
  return (
    <Paper sx={{ width: 1, p: 3, height: 1 }} elevation={10}>
      <Typography variant="h5">View Rooms</Typography>
    </Paper>
  );
}
