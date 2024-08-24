'use client';

import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventIcon from '@mui/icons-material/Event';
import RestoreIcon from '@mui/icons-material/Restore';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';

interface HomeProps{
  setPageState: (val:number)=>void;
}

export default function HomeLaundryMobile({setPageState}:HomeProps): React.JSX.Element {
  // 0 --> Home
  // 1 --> QR code
  // 0 --> History

  const isActive = true;
  const nextLaundry = '2022-09-17T17:00';
  const notice=""

  return (
    <Box>
      <Typography variant="h6" color='var(--mui-palette-text-primary)' sx={{ mt:0.5,fontSize:"18px"}}>
            {dayjs().format('D MMMM, dddd')}
      </Typography>
      
      <Box
        bgcolor={isActive ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-dark)'}
        sx={{ color: 'var(--mui-palette-common-white)', borderRadius: 1 }}
        my={3}
        p={1}
      >
        <Button
          onClick={()=>{isActive?setPageState(1):null}}
          // eslint-disable-next-line react/jsx-no-useless-fragment -- false positive
          endIcon={isActive?<ArrowForwardIosIcon />:<></>}
          fullWidth
          disableFocusRipple
          disableRipple
          sx={{ color: 'inherit', justifyContent: 'space-between', py: 2 }}
        >
          <Typography variant="h6" fontSize="19px">
            {isActive?'Check Out Laundry':'Upcoming Laundry'}
          </Typography>
        </Button>

        <Divider variant="middle" />

        <Stack direction="row" justifyContent="space-between" mt={2} mb={1} mx={1}>
          <Typography
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 0.6 }}
            variant="caption"
          >
            <EventIcon sx={{ fontSize: '20px' }} />
            <span>{ isActive? dayjs().format('D MMMM, dddd') : dayjs(nextLaundry).format('D MMMM, dddd')}</span>
          </Typography>
          <Typography
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 0.6 }}
            variant="caption"
          >
            <AccessTimeIcon sx={{ fontSize: '20px' }} />
            <span>12:00 PM - 06:30 PM</span>
          </Typography>
        </Stack>
      </Box>




      <Paper
        elevation={10}
        sx={{
          borderRadius: 1,
          border: '1px dashed var(--mui-palette-secondary-main)',
          background: '#ebebeb',
          p: 1.5,
          mt: 4,
        }}
      >
        <Typography variant="h6" fontWeight={700} sx={{ fontSize: '20px', color: 'var(--mui-palette-text-primary)' }}>
          Notice Board
        </Typography>
        <Box sx={{ height: '20vh', overflowY: 'auto' }}>
          {notice}
        </Box>
      </Paper>




      <Button fullWidth endIcon={<RestoreIcon />} sx={{ mt: 4 }} variant="outlined"  onClick={()=>{setPageState(2)}}>
        <Typography variant="body1" fontWeight={600}>
          Laundry History
        </Typography>
      </Button>
    </Box>
  );
}
