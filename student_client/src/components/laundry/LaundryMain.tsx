'use client';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftCont from './LeftCont/LeftCont';
import RightCont from './RightCont/RightCont';
import LaundryMobile from './Mobile/LaundryMobile';
import {type LaundryInitResponse } from '@/services/laundry';
import { useLaundryData } from '@/hooks/query/use-laundry';
import { type AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import Profile from '../core/profile';



export default function LaundryMain(): React.JSX.Element {


  const { data, isLoading:_isLoading } = useLaundryData();
  const initData = data as AxiosResponse<LaundryInitResponse|null>;

  
  const laundryHistory = initData?.data?.laundry_slips
  ?.filter((item) => item.is_checked_out)
  .sort((a, b) => {
    if (a.is_delivered !== b.is_delivered) {
      return a.is_delivered ? 1 : -1; 
    }

    if (a.is_delivered) {
      return dayjs(b.delievery_time).diff(dayjs(a.delievery_time));
    }

    return dayjs(b.dropoff_time).diff(dayjs(a.dropoff_time));
  }) ?? null;

  if (initData?.data) {
    initData.data.is_active = true;
  }

  return (
    <Stack>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)' }}>
          Laundry Management
        </Typography>
        <Profile/>

        <Box
          sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', minHeight: '60vh', mt: 5 }}
          gap="4%"
          width={1}
        >
          <Box width="54%">
            <LeftCont historyData={laundryHistory} />
          </Box>
          <Box width="42%">
            <RightCont data={initData?.data}/>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Typography variant="h5" sx={{ fontSize: '25px', color: 'var(--Page-HeadColor)' }}>
          Laundry Management
        </Typography>

        <LaundryMobile data={initData?.data}/>
      </Box>
    </Stack>
  );
}
