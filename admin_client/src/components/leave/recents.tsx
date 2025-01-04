'use client';

import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import {type  Leave } from '@/services/leave';


interface RecentProps {
  arr: Leave[];
}

export default function RecentLeaves({ arr }: RecentProps): React.JSX.Element {
  return (
    <Stack width={1} gap={2}>
      {arr.map((record) => (
        <Stack
          width={1}
          direction="row"
          justifyContent="space-between"
          gap={1}
          alignItems="center"
          key={record.transactionID}
          sx={{ p: 2, background: 'white', borderRadius: 1 }}
        >
          <Stack width="45%" justifyContent="space-between">
            <Box>
              <Typography variant="h6" fontWeight={600} fontSize="19px" lineHeight={1} color="text.primary">
                {record.studentName}
              </Typography>
              <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                {record.rollNumber}
              </Typography>
            </Box>
          </Stack>

          <Stack alignSelf="flex-start" width="48%" direction="row" justifyContent="space-evenly" alignItems="center">
            <Box textAlign="center">
              <Typography
                variant="body1"
                sx={{ fontSize: '14px' , lineHeight: 1, mb: '1px' }}
                fontWeight={500}
              >
                {dayjs(record.leaveDateFrom).format('DD/MM/YY')}
              </Typography>
              <Typography variant="body2" sx={{ fontSize:'13px'  }} fontWeight={400}>
                Dept
              </Typography>
            </Box>
            <Box position="relative" width="20%" height="2px">
              <Box
                sx={{
                  width:  '70%',
                  ml: '15%',
                  height: '2px',
                  backgroundColor: dayjs().isBefore(dayjs(record.leaveDateTo))?'var(--mui-palette-success-main)':'var(--mui-palette-error-main)',
                  position: 'absolute',
                  top: '50%',
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="body1"
                sx={{ fontSize: '14px' , lineHeight: 1, mb: '1px' }}
                fontWeight={500}
              >
                {dayjs(record.leaveDateTo).format('DD/MM/YY')}
              </Typography>
              <Typography variant="body2" sx={{ fontSize:'13px'  }} fontWeight={400}>
                Arrival
              </Typography>
            </Box>
          </Stack>



          
          

        </Stack>
      ))}
    </Stack>
  );
}
