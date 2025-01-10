'use client';

import * as React from 'react';
import {Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useProfile } from '@/hooks/query/use-profile';



export default function Profile(): React.JSX.Element {

  

  const { data: profile } = useProfile();

  const hostel=profile?.data.student.room.hostel.name;
  return (
      <Typography variant="h6" textAlign='left' width={1} color='var(--mui-palette-text-primary)' sx={{ mt:1,fontSize:"18px"}}>
          <span>
           {hostel} | {' '}
          </span>  
          <span>
           {dayjs().format('D MMMM, dddd')}
          </span>  
      </Typography>
      
  );
}
