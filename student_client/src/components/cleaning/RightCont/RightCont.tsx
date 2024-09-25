'use client';

import * as React from 'react';
import { Grid } from '@mui/material';

import { logger } from '@/lib/default-logger';
import { useCleaningRequests } from '@/hooks/query/use-cleaning';

import LowerRightCont from './LowerRightCont';
import UpperRightCont from './UpperRightCont';

export interface SlotProps {
  from: string;
  to: string;
}

export default function RightCont(): React.JSX.Element {
  const { data: cleaningData } = useCleaningRequests({ page: 1, page_size: 10 });
  const cleaningRequests = cleaningData!;
  const previousCleaningRequest = cleaningRequests?.data.results[0];
  logger.debug('Right const ', previousCleaningRequest);

  return (
    <Grid container gap={3}>
      {previousCleaningRequest ? (
        <Grid xs={12}>
          <UpperRightCont {...previousCleaningRequest} />
        </Grid>
      ) : null}
      <Grid xs={12}>
        <LowerRightCont />
      </Grid>
    </Grid>
  );
}
