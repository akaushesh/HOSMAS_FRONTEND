import * as React from 'react';
import { Grid } from '@mui/material';

import LeaveDetails from './LeaveDetails';
import LeaveStatus from './LeaveStatus';
import { type Leave } from '@/services/leave';

interface LeaveInfoProps {
  phase: number;
  currentApp: Leave|undefined;
  refetch: () => void;
}

export default function LeaveInfo({ refetch,phase,currentApp }: LeaveInfoProps): React.JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
        <LeaveDetails refetch={refetch} details={currentApp} phase={phase} />
      </Grid>
      <Grid item xs={12} lg={5}>
        <LeaveStatus phase={phase} status={currentApp?.leaveStatus} id={currentApp?.transactionID||""} />
      </Grid>
    </Grid>
  );
}
