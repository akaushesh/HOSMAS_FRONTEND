'use client';

import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Stack } from '@mui/system';
import History from './History/History';
import HomeLaundry from './HomeLaundry';
import Scanner from './Scanner';


export default function Laundry(): React.JSX.Element {
  const [pageState, setPageState] = React.useState(0);
  const [QRData, setQRData] = React.useState('');
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History

  return (
    <Box>
      {pageState === 0 && <HomeLaundry setPageState={setPageState} />}

      {pageState === 1 && <Scanner setPageState={setPageState} setQRData={setQRData} mode='recieve' />}

      {pageState === 2 && <Scanner setPageState={setPageState} setQRData={setQRData} mode='return' />}

      {pageState === 3 && (
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
              <History/>
            </Box>
         
        </Stack>
      )}
    </Box>
  );
}
