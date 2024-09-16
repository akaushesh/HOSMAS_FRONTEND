import * as React from 'react';
import { Grid, Paper } from '@mui/material';

import CleanerDetails from './Cleaners/CleanerDetails';
import FilterStatistics from './FilterStats/FilterStatistics';

export default function Statistics(): React.JSX.Element {
  return (
    <Paper sx={{ height: '70vh', width: '100%', mt: 4, p: 4 }} elevation={10}>
      <Grid container gap={3}>
        <Grid item lg={8} xs={12}>
          <FilterStatistics />
        </Grid>
        <Grid item lg={3.7} xs={12}>
          <CleanerDetails />
        </Grid>
      </Grid>
    </Paper>
  );
}