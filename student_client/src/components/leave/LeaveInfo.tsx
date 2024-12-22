import * as React from 'react';
import { Grid } from '@mui/material';

import LeaveDetails from './LeaveDetails';
import LeaveStatus from './LeaveStatus';

interface LeaveInfoProps {
  phase: number;
  currentApp: {
    reason: string;
    location: string;
    leaveDateFrom: string;
    leaveDateTo: string;
    id:string;
  };
}

export default function LeaveInfo({ phase,currentApp }: LeaveInfoProps): React.JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={7}>
        <LeaveDetails details={currentApp} phase={phase} />
      </Grid>
      <Grid item xs={12} lg={5}>
        <LeaveStatus phase={phase} id={currentApp.id} />
      </Grid>
    </Grid>
  );
}
