'use client';

import * as React from 'react';
import { type LaundryInitResponse } from '@/services/laundry';
import { Box } from '@mui/material';

import LowerRightCont from './LowerRightCont';
import UpperRightCont from './UpperRightCont';
import dayjs from 'dayjs';

export interface SlotProps {
  from: string;
  to: string;
}

interface RightContProps {
  data: LaundryInitResponse | null;
}

export default function RightCont({ data }: RightContProps): React.JSX.Element {
  const submitQr = data?.laundry_slips.find((item) => !item.is_checked_out) || null;
  const collectQrs = data?.laundry_slips.filter((item) => item.is_checked_out && !item.is_delivered) || null;

  const isAllowedSubmit = !data?.laundry_slips?.some(item => item.is_checked_out && dayjs(item.dropoff_time).format('DD MMM YYYY') === dayjs().format('DD MMM YYYY'));


  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 1,
        height: 1,
        flexDirection: 'column',
      }}
      gap="4%"
      width={1}
    >
      <Box sx={{ width: 1, height: 1 }}>
        <UpperRightCont laundryNumber={data?.laundry_number || ''} />
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,
          opacity: data?.is_active ? 1 : 0.45,
          pointerEvents: data?.is_active ? 'initial' : 'none',
        }}
      >
        <LowerRightCont
          isAllowedSubmit={isAllowedSubmit||false}
          isLaundry={data?.is_active || false}
          nextDate={data?.next_date || ''}
          submitQr={submitQr}
          collectQrs={collectQrs}
        />
      </Box>
    </Box>
  );
}
