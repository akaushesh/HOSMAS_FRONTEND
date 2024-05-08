import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

interface InviteMemberProps {
  onClose: () => void;
}

export default function InviteMember({ onClose }: InviteMemberProps): React.JSX.Element {
  return (
    <Box padding="1rem">
      <Typography variant="h5" marginBottom="1rem">
        Invite Member
      </Typography>

      <Stack spacing={1}>
        <TextField variant="outlined" type="text" label="Enter Private Token" />
        <Button fullWidth onClick={onClose} variant="contained">
          Invite
        </Button>
      </Stack>
    </Box>
  );
}
