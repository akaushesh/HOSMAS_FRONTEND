import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Stack, TextField, Typography } from '@mui/material';

import WorkerCard from './WorkerCard';

const workers = [
  {
    id: 1231343,
    name: 'Ajit Kumar',
    phone: '7009654454',
    totalDuties: 72,
    completedDuties: 60,
  },
  {
    id: 23842394,
    name: 'Rahul Singh',
    phone: '7009654455',
    totalDuties: 80,
    completedDuties: 68,
  },
  // Add more workers as needed
];

export default function CleanerDetails(): React.JSX.Element {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Sanitation Workers</Typography>

      <TextField
        placeholder="Cleaner Name"
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: '#eee',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Stack spacing={3}>
        {workers.map((worker) => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </Stack>
    </Stack>
  );
}