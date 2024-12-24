import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Avatar, Box, Card, Grid, Stack, Typography } from '@mui/material';

interface Worker {
  id: number;
  name: string;
  phone: string;
  totalDuties: number;
  completedDuties: number;
}

export default function WorkerCard({ worker }: { worker: Worker }): React.JSX.Element {
  const pendingDuties = worker.totalDuties - worker.completedDuties;
  const efficiency = Math.round((worker.completedDuties / worker.totalDuties) * 100);

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: 'var(--mui-palette-background-level3)' }}>
      <Avatar variant="square" sx={{ width: 100, height: 120, borderRadius: '8px', bgcolor: '#ddd', mr: 3 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">{worker.name}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">{worker.phone}</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Box
              sx={{
                backgroundColor: '#d32f2f',
                color: '#fff',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              {efficiency}%
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} mt={2}>
          <Box textAlign="center" sx={{ backgroundColor: '#fff', p: 1, borderRadius: '10px' }}>
            <Typography variant="body2">Total</Typography>
            <Typography variant="h6" sx={{ color: '#d32f2f' }}>
              {worker.totalDuties}
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ backgroundColor: '#fff', p: 1, borderRadius: '10px' }}>
            <Typography variant="body2">Complete</Typography>
            <Typography variant="h6" sx={{ color: '#d32f2f' }}>
              {worker.completedDuties}
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ backgroundColor: '#fff', p: 1, borderRadius: '10px' }}>
            <Typography variant="body2">Pending</Typography>
            <Typography variant="h6" sx={{ color: '#d32f2f' }}>
              {pendingDuties}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}