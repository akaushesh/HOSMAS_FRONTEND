'use client';

import * as React from 'react';
import { Stack } from '@mui/material';

import { Requests } from './Requests';

export interface RequestProps {
  id: string;
  roomName: string;
  slots: [string];
  assigned: string;
}

export interface CleanerProps {
  id: string;
  name: string;
  present: boolean;
  img: string;
  assigned: [{ roomName: string; slot: string }];
}

export function Assignment(): React.JSX.Element {
 
    const [selectedCleaner, setSelectedCleaner] = React.useState<CleanerProps>({
    id: '',
    name: '',
    present: false,
    img: '',
    assigned: [{
        roomName: '',
        slot: '',
    }],
  });

  return (
    <Stack direction="row" gap={2}>
      <Requests selectedCleaner={selectedCleaner} />
    </Stack>
  );
}
