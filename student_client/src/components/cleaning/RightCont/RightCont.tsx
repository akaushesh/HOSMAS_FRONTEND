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
    <Grid container rowGap={3}>
      <Grid lg={12}>
        <UpperRightCont />
      </Grid>
      <Grid lg={12}>
        <LowerRightCont />
      </Grid>
    </Grid>
  );
}