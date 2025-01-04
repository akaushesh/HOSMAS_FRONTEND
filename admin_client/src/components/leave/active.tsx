'use client';

import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { type Leave } from '@/services/leave';

interface ActiveCardProps {
  arr: Leave[];
}

export default function ActiveLeaves({ arr }: ActiveCardProps): React.JSX.Element {
  
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
          <Stack minWidth="20%" maxWidth="28%" justifyContent="space-between">
            <Box>
              <Typography variant="h6" fontWeight={600} fontSize="20px" lineHeight={1} color="text.primary">
                {record.studentName}
              </Typography>
              <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                {record.rollNumber}
              </Typography>
            </Box>
          </Stack>

          <Stack alignSelf="flex-start" width="24%" direction="row" justifyContent="space-evenly" alignItems="center">
            <Box textAlign="center">
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                fontWeight={500}
              >
                {dayjs(record.leaveDateFrom).format('DD MMM YY')}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                Dept
              </Typography>
            </Box>
            <Box position="relative" width="20%" height="2px">
              <Box
                sx={{
                  width: { xs: '50%', sm: '80%' },
                  ml: { xs: '25%', sm: '10%' },
                  height: '2px',
                  backgroundColor: 'var(--mui-palette-success-main)',
                  position: 'absolute',
                  top: '50%',
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                fontWeight={500}
              >
                {dayjs(record.leaveDateTo).format('DD MMM YY')}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                Arrival
              </Typography>
            </Box>
          </Stack>

          <Stack width="25%" justifyContent="space-between" alignItems="flex-start" ml={6}>
            <Typography variant="body1"  fontWeight={600} fontSize="16px" color="text.primary">
              Place :<b style={{fontWeight:"400"}}> {record.location}</b>
            </Typography>
            <Typography variant="body1"  fontWeight={600} fontSize="16px" color="text.primary">
              Reason :<b style={{fontWeight:"400"}}> {record.reason}</b>
            </Typography>
          </Stack>

          <Box sx={{ borderRadius: 1,py:0.8, px:3, fontSize:"16px", backgroundColor: 'var(--mui-palette-success-main)',color:"white",border:"2px solid var(--mui-palette-success-main)" }}>
                Active
          </Box>

        </Stack>
      ))}
    </Stack>
  );
}
