'use client';

import * as React from 'react';
import { Grid } from '@mui/material';

import LowerRightCont from './LowerRightCont';
import UpperRightCont from './UpperRightCont';

export interface SlotProps {
  from: string;
  to: string;
}

export default function RightCont(): React.JSX.Element {
  return (
    <Grid container gap={3}>
      <Grid xs={12}>
        <UpperRightCont />
      </Grid>
      <Grid xs={12}>
        <LowerRightCont />
      </Grid>
    </Grid>
  );
}
