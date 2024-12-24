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

interface AllLeaveProps {
  arr: CardProps[];
}

export default function AllLeaves({ arr }: AllLeaveProps ): React.JSX.Element {
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
          <Stack minWidth="18%" maxWidth="25%" justifyContent="space-between">
            <Box>
              <Typography variant="h6" fontWeight={600} fontSize="20px" lineHeight={1} color="text.primary">
                {approval.name}
              </Typography>
              <Typography variant="subtitle1" lineHeight={1} mt="4px" fontSize="14px" color="text.secondary">
                {approval.roll_num}
              </Typography>
            </Box>
          </Stack>

          <Stack alignSelf="flex-start" width="20%" direction="row" justifyContent="space-evenly" alignItems="center">
            <Box textAlign="center">
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: '14px', sm: '15px' }, lineHeight: 1, mb: '1px' }}
                fontWeight={500}
              >
                {dayjs(approval.leaveDateFrom).format('DD/MM/YY')}
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
                  backgroundColor: approval.status==='a'?'var(--mui-palette-success-main)':'var(--mui-palette-error-main)',
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
                {dayjs(approval.leaveDateTo).format('DD/MM/YY')}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: '13px', sm: '14px' } }} fontWeight={400}>
                Arrival
              </Typography>
            </Box>
          </Stack>



          <Stack width="25%" justifyContent="space-between" alignItems="flex-start" ml={8}>
            <Typography variant="body1"  fontWeight={600} fontSize="16px" color="text.primary">
              Place :<b style={{fontWeight:"400"}}> {approval.location}</b>
            </Typography>
            <Typography variant="body1"  fontWeight={600} fontSize="16px" color="text.primary">
              Reason :<b style={{fontWeight:"400"}}> {approval.reason}</b>
            </Typography>
          </Stack>
          
          

        </Stack>
      ))}
    </Stack>
  );
}
