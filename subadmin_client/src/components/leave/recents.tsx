'use client';

import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface CardProps {
  id: string;
  name: string;
  roll_num: number;
  reason: string;
  location: string;
  leaveDateFrom: string;
  leaveDateTo: string;
  status: string;
}

interface RecentProps {
  arr: CardProps[];
}

export default function RecentLeaves({ arr }: RecentProps): React.JSX.Element {
  return (
    <Stack width={1} gap={2}>
      {arr.map((approval) => (
        <Stack
          width={1}
          direction="row"
          justifyContent="space-between"
          gap={1}
          alignItems="center"
          key={approval.id}
          sx={{ p: 2, background: 'white', borderRadius: 1 }}
        >
          <Stack width="45%" justifyContent="space-between">
            <Box>
              <Typography variant="h6" fontWeight={600} fontSize="19px" lineHeight={1} color="text.primary">
                {approval.name}
              </Typography>
              <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                {approval.roll_num}
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
                {dayjs(approval.leaveDateFrom).format('DD/MM/YY')}
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
                  backgroundColor: approval.status==='a'?'var(--mui-palette-success-main)':'var(--mui-palette-error-main)',
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
                {dayjs(approval.leaveDateTo).format('DD/MM/YY')}
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
