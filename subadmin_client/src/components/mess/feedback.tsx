'use client';

import * as React from 'react';
import { Box, Pagination, Paper, Stack, Typography } from '@mui/material';

import Reviews from './review-card';
import reviews from './temp';

export default function Feedback(): React.JSX.Element {
	const [page, setPage] = React.useState(1);

	const handleChangePage = (event: React.ChangeEvent<unknown>, value: number): void => {
	  setPage(value);
	};

	const totalPages=3;
  
  return (
    <Paper sx={{ minHeight: '65vh', width: '100%', mt: 4, p: { xs: 2, md: 4 } }} elevation={10}>
      <Typography variant="h4">Reviews</Typography>
      <Stack
        mt={2}
        direction="row"
        alignItems="stretch"
        justifyContent="space-between"
        gap={5}
        sx={{ background: 'var(--mui-palette-secondary-light)', p: 2, py: 3 }}
      >
        <Box height="43vh" width={1} sx={{ overflowY: 'auto', overflowX: 'hidden', pr: 1 }}>
          <Reviews arr={reviews} />
        </Box>
      </Stack>
        <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
          <Pagination count={totalPages} onChange={handleChangePage} variant="outlined" color="primary" />
        </Box>
    </Paper>
  );
}
