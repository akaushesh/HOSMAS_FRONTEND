import * as React from 'react';
import type { ErrorResponse } from '@/services/auth';
import { LoadingButton } from '@mui/lab';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { AxiosError } from 'axios';

import { useLeaveGroup } from '@/hooks/mutation/use-group';

interface LeaveConfirmationProps {
  onClose: () => void;
}

export default function LeaveConfirmation({ onClose }: LeaveConfirmationProps): React.JSX.Element {
  const onAccept = (): void => {
    leaveGroup({});
  };
  const onReject = (): void => {
    onClose();
  };

  const onError = (err: AxiosError<ErrorResponse>): void => {
    if (err?.response?.data?.detail) {
      setError(err?.response?.data?.detail);
    }
    setError('Something went wrong');
  };

  const { mutate: leaveGroup, isPending } = useLeaveGroup({ onError });

  const [error, setError] = React.useState('');

  return (
    <Box padding="1rem">
      <Typography variant="h4" marginBottom="1rem">
        Confirmation
      </Typography>

      <Typography variant="body1" textAlign="justify">
        If you leave your group you will only be able to rejoin it if you receive another joining request.
      </Typography>
      <br />
      <Typography variant="body1" textAlign="justify">
        Are you sure you want to leave?
      </Typography>
      {error !== '' && (
        <React.Fragment>
          <br />
          <Typography variant="body1" textAlign="justify" color="error.main">
            {error}
          </Typography>
        </React.Fragment>
      )}

      <Grid container marginTop="1rem" justifyContent="space-between" alignItems="center">
        <Grid item xs={5.5}>
          <LoadingButton loading={isPending} onClick={onAccept} variant="contained" fullWidth>
            Accept
          </LoadingButton>
        </Grid>
        <Grid item xs={5.5}>
          <Button onClick={onReject} variant="contained" fullWidth>
            Reject
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
