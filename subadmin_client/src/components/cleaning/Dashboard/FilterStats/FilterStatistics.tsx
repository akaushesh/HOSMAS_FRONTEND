'use client';

import * as React from 'react';
import { Button, Grid, Stack } from '@mui/material';

import CleaningDetails from './CleaningDetails';

export default function FilterStatistics(): React.JSX.Element {
  const [selectedFilter, setSelectedFilter] = React.useState<string>('daily');

  const handleFilterChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const filter = event.currentTarget.name;
    setSelectedFilter(filter);
  };

  return (
    <Stack spacing={4}>
      <Grid container>
        <Grid item lg={3} xs={12}>
          <Stack direction="row" spacing={2}>
            <Button
              name="daily"
              variant={selectedFilter === 'daily' ? 'contained' : 'outlined'}
              color="primary"
              onClick={handleFilterChange}
              sx={{ px: 5 }}
            >
              Daily
            </Button>
            <Button
              name="weekly"
              variant={selectedFilter === 'weekly' ? 'contained' : 'outlined'}
              color="primary"
              onClick={handleFilterChange}
              sx={{ px: 5 }}
            >
              Weekly
            </Button>
            <Button
              name="monthly"
              variant={selectedFilter === 'monthly' ? 'contained' : 'outlined'}
              color="primary"
              onClick={handleFilterChange}
              sx={{ px: 5 }}
            >
              Monthly
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={7} xs={12}>
          <CleaningDetails />
        </Grid>
      </Grid>
    </Stack>
  );
}