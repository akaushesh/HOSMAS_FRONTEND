'use client';

import { Paper, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { type CleanerProps } from './Assignment';

interface RequestsProps{
    selectedCleaner:CleanerProps
}

export function Requests({selectedCleaner}:RequestsProps): React.JSX.Element {
  return (
    <Paper elevation={10} sx={{p:2}}>
        <Typography variant="h5">Cleaning Requests</Typography>
        

    </Paper>
  );
}
