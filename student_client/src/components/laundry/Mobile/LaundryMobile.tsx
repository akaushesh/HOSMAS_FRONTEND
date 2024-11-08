'use client';

import * as React from 'react';
import { type LaundryInitResponse } from '@/services/laundry';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import LeftCont from '../LeftCont/LeftCont';
import CheckoutLaundryMobile from './CheckoutLaundryMobile';
import HomeLaundryMobile from './HomeLaundryMobile';
import dayjs from 'dayjs';

interface LaundryMobileProps {
  data: LaundryInitResponse|null;
}

export default function LaundryMobile({ data }: LaundryMobileProps): React.JSX.Element {
  const [pageState, setPageState] = React.useState(0);
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History
  const laundryHistory = data?.laundry_slips.filter((item) => item.is_checked_out) || null;
  const submitQr = data?.laundry_slips.find((item) => !item.is_checked_out) || null;
  const collectQrs= data?.laundry_slips.filter((item) => (item.is_checked_out&&!item.is_delivered))||null;

  const isAllowedSubmit = !data?.laundry_slips?.some(item => item.is_checked_out && dayjs(item.dropoff_time).format('DD MMM YYYY') === dayjs().format('DD MMM YYYY'));

  return (
    <Box>
      {pageState === 0 && <HomeLaundryMobile laundryNumber={data?.laundry_number||""}  isActive={data?.is_active||false}
         nextDate={data?.next_date||""}  setPageState={setPageState} />}

      {pageState === 1 && <CheckoutLaundryMobile isAllowedSubmit={isAllowedSubmit||false} submitQr={submitQr}
          collectQrs={collectQrs} setPageState={setPageState} />}

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
            <LeftCont historyData={laundryHistory} />
          </Box>
        </Stack>
      )}
    </Box>
  );
}
