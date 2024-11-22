import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function Reviews(): React.JSX.Element {
  return (
    <Box mt={4}>
      <Typography variant="h4">Critical Reviews</Typography>
      <Stack mt={2} direction="row" alignItems="stretch" justifyContent="space-between" gap={5}>
        <Stack
          width={1}
          alignItems="center"
          p={2}
          sx={{ height:"27vh", overflowY:"auto", background: 'var(--mui-palette-secondary-light)' }}
        ></Stack>
        <Stack
          width={1}
          alignItems="center"
          p={2}
          sx={{ height:"27vh", overflowY:"auto", background: 'var(--mui-palette-secondary-light)' }}
        ></Stack>
      </Stack>
    </Box>
  );
}
