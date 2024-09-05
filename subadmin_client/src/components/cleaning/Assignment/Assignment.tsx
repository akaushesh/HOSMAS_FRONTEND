'use client';

import * as React from 'react';
import { Stack } from '@mui/material';

import { Requests } from './Requests';
import { CleanerSelect } from './CleanerSelect';

export interface RequestProps {
  id: string;
  roomName: string;
  slots: { from: string; to: string }[];
  assigned?: string;
}

export interface CleanerProps {
  id: string;
  name: string;
  present: boolean;
  img: string;
  assigned?: [{ roomName: string; slot:{from: string; to: string}}];
}

export function Assignment(): React.JSX.Element {
 
    const [selectedCleaner, setSelectedCleaner] = React.useState<CleanerProps>({
    id: '',
    name: '',
    present: false,
    img: '',
    assigned: [{
        roomName: '',
        slot: {from: '', to: ''},
    }],
  });

  return (
    <Stack direction="row" justifyContent='space-between' alignItems='stretch' height='66vh' width={1} mt={4}>
      <Requests selectedCleaner={selectedCleaner} />
      <CleanerSelect selectedCleaner={selectedCleaner} setSelectedCleaner={setSelectedCleaner} />
    </Stack>
  );
}
