'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Typography } from '@mui/material';

export default function Page({ params }: { params: { cleaner: string } }): React.JSX.Element {
  const id = params.cleaner;

  const router = useRouter();

  return (
    <Box sx={{ position: 'relative', height: 'fit-content' }}>
      <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 1, alignSelf: 'flex-start' }}
        disableRipple
        onClick={() => {
          router.push(`/cleaners`);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          back to main page
        </Typography>
      </Button>
      <Typography variant="h4" sx={{ fontSize: '35px', color: 'var(--Page-HeadColor)' }}>
        {id}
      </Typography>
    </Box>
  );
}
