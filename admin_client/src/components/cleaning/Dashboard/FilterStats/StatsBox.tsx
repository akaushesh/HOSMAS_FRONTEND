import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { primaryRed } from '@/styles/theme/colors';

export default function StatsBox({ title, value }: { title: string; value: number }): React.JSX.Element {
  return (
    <Box textAlign="center" width="30%" sx={{ backgroundColor: primaryRed[500], color: '#fff', p: 2, borderRadius: 2 }}>
      <Typography variant="h6" fontSize="1.1rem" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography fontSize="2rem" fontWeight="bold" variant="body2">
        {value}
      </Typography>
    </Box>
  );
}