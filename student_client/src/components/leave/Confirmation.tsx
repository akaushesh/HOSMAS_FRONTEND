import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';

export default function Confirmation(): React.JSX.Element {
  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        disabled
        defaultValue="student@example.com"
        label="Guardian's Email Address"
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Typography color="secondary" variant="body2" sx={{ mt: 1 }}>
        A verification email has been sent to this address. Hall Pass will be generated post verification.
      </Typography>
    </Box>
  );
}
