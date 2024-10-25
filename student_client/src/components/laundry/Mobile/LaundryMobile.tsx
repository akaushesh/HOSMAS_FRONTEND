'use client';

import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Stack } from '@mui/system';

import CheckoutLaundryMobile from './CheckoutLaundryMobile';
import HomeLaundryMobile from './HomeLaundryMobile';
import LeftCont from '../LeftCont/LeftCont';

export default function LaundryMobile(): React.JSX.Element {
  const [pageState, setPageState] = React.useState(0);
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History

  return (
    <Box>
      {pageState === 0 && <HomeLaundryMobile setPageState={setPageState} />}

      {pageState === 1 && <CheckoutLaundryMobile setPageState={setPageState} />}

      {pageState === 2 && (
        <Stack alignItems="center">
          <Button
            startIcon={<ArrowBackIosIcon />}
            sx={{ mt: 1, alignSelf: 'flex-start' }}
            onClick={() => {
              setPageState(0);
            }}
          >
            <Typography variant="body1" color="var(--mui-palette-text-primary)">
              back to main page
            </Typography>
          </Button>

            <Box mt={2}>
              <LeftCont/>
            </Box>
         
        </Stack>
      )}
    </Box>
  );
}
