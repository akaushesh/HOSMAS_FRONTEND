'use client';

import * as React from 'react';
import { Box, Button, ButtonGroup, Divider, Paper, Stack, Typography } from '@mui/material';

import { tempRequests } from '../TempDataRequests';
import { type CleanerProps, type RequestProps } from './Assignment';

interface RequestsProps {
  selectedCleaner: CleanerProps;
}

export function Requests({ selectedCleaner }: RequestsProps): React.JSX.Element {
  const [cleaningRequests, setCleaningRequests] = React.useState<RequestProps[]>(tempRequests);

  return (
    <Paper elevation={10} sx={{ p: 2, width: 0.65 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Cleaning Requests</Typography>
        <Box>Filters</Box>
      </Stack>
      <Box mt={3} sx={{ overflowY: 'auto', height: '47vh', width: 1 }}>
        {cleaningRequests.map((request) => {
          return (
            <Box key={request.id}>
              <Stack direction="row" py={2} justifyContent="space-evenly" alignItems="center">
                <Typography variant="h5" fontWeight={500}>
                  {request.roomName}
                </Typography>

                <SpecialButton slots={request.slots} />
              </Stack>
              <Divider sx={{ my: 0.4 }} />
            </Box>
          );
        })}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack direction="row" justifyContent="space-between" mt={2} width={1}>
        <Typography variant="body1">Select a worker to assign cleaning</Typography>
        <Button variant="contained" sx={{ px: 6 }} color="primary">
          Save
        </Button>
      </Stack>
    </Paper>
  );
}

function SpecialButton({ Slots }: { slots: { from: string; to: string }[] }): React.JSX.Element {
  const timings = [10, 11, 12, 1, 2, 3, 4, 5];

  return (
    <Box>
      <ButtonGroup sx={{ borderRadius: 0 }}>
        {timings.map((time) => {
          const [selectSlot, setSelectSlot] = React.useState(false);
          return (
            <Button
              key={time}
              sx={{
                m:0,
                px: selectSlot ? 3.34 : 4,
                py: selectSlot ? 0.5 : 2,
                height: 1,
                borderRadius: 0,
                borderBlock: 'transparent',
                fontWeight: 800,
              }}
              onClick={() => {
                setSelectSlot(!selectSlot);
              }}
              color="primary"
            >
              {selectSlot ? '✓' : ''}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
