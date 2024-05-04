import * as React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import FAQGrid from '@/components/dashboard/faqs/faq-grid';

export default function AllFAQs(): React.JSX.Element {
  return (
    <Stack sx={{ position: 'relative', minHeight: '80vh' }} spacing={3}>
      <div>
        <Typography variant="h4">FAQs</Typography>
      </div>
      <FAQGrid />
    </Stack>
  );
}
