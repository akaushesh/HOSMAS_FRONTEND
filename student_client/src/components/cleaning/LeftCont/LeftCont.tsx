'use client';

import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { logger } from '@/lib/default-logger';
import { useCleaningRequests } from '@/hooks/query/use-cleaning';

import CleaningTable from './CleaningTable';

interface Task {
  id: string;
  date: string;
  janitor: string;
  status: string;
  rating: number;
}

export default function LeftCont(): React.JSX.Element {
  const { data: groupDetails } = useCleaningRequests({ room: 500, page: 1, page_size: 10 });
  logger.debug('useCleaningRequests', groupDetails);

  const [tasks] = React.useState<Task[]>([
    {
      id: 'task-1',
      date: '2024-07-31T00:00',
      janitor: 'Prakash',
      status: 'Pending',
      rating: 0,
    },
    {
      id: 'task-2',
      date: '2024-07-30T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 5,
    },
    {
      id: 'task-4',
      date: '2024-03-19T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 4,
    },
    {
      id: 'task-7',
      date: '2024-03-11T19:40',
      janitor: 'Prakash',
      status: 'Cancelled',
      rating: 1,
    },
  ]);

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Room Cleaning History</Typography>
      <Typography variant="body2" mt={1}>
        You can view your current and past room cleaning. Gets cleared after every 30 days.
      </Typography>

      <Box mt={2}>
        <CleaningTable tasks={tasks} />
      </Box>
    </Paper>
  );
}
