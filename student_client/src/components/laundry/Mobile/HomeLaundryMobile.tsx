'use client';

import * as React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventIcon from '@mui/icons-material/Event';
import RestoreIcon from '@mui/icons-material/Restore';
import { Box, Button, Divider, List, ListItem, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';

interface HomeProps {
  setPageState: (val: number) => void;
  isActive: boolean;
  nextDate: string;
  laundryNumber: string;
}

export default function HomeLaundryMobile({
  isActive,
  nextDate,
  laundryNumber,
  setPageState,
}: HomeProps): React.JSX.Element {
  // 0 --> Home
  // 1 --> QR code
  // 2 --> History

  const nextLaundry = nextDate || '';
  const notice = `
    Laundry will start at 23rd November 2024, sharp at 12:00 PM. <br/>
    Make sure to submit/collect laundry before 06:00 PM. <br/>
    Next laundry will be on 27th November 2024.
  `;

  return (
    <Box>
      <Typography variant="h6" color="var(--mui-palette-text-primary)" sx={{ mt: 0.5, fontSize: '18px' }}>
        {dayjs().format('D MMMM, dddd')}
      </Typography>

      <Box
        bgcolor={isActive ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-secondary-dark)'}
        sx={{ color: 'var(--mui-palette-common-white)', borderRadius: 1 }}
        mt={3}
        p={1}
      >
        <Button
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- false positive
          onClick={() => {
            isActive ? setPageState(1) : null;
          }}
          // eslint-disable-next-line react/jsx-no-useless-fragment -- false positive
          endIcon={isActive ? <ArrowForwardIosIcon /> : <></>}
          fullWidth
          disableFocusRipple
          disableRipple
          sx={{ color: 'inherit', justifyContent: 'space-between', py: 2 }}
        >
          <Typography variant="h6" fontSize="19px">
            {isActive ? 'Check Out Laundry' : 'Upcoming Laundry'}
          </Typography>
        </Button>

        <Divider variant="middle" />

        <Stack direction="row" justifyContent="space-between" mt={2} mb={1} mx={1}>
          <Typography
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 0.6 }}
            variant="caption"
          >
            <EventIcon sx={{ fontSize: '20px' }} />
            <span>{isActive ? dayjs().format('D MMMM, dddd') : dayjs(nextLaundry).format('D MMMM, dddd')}</span>
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
        <Typography variant="h6" fontWeight={700} sx={{ fontSize: '22px', color: 'var(--mui-palette-text-primary)' }}>
          Notice Board
        </Typography>
        <Stack direction="row" gap={1} alignItems="flex-end" justifyContent="flex-start">
          <Typography fontSize="16px" sx={{ color: 'var(--mui-palette-text-secondaryChannel)' }} fontWeight={500}>
            Laundry No :{' '}
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight={500}
            sx={{ color: 'var(--mui-palette-text-primaryChannel)' }}
            display="block"
          >
            {laundryNumber || 'ABC-123'}
          </Typography>
        </Stack>

        <Box sx={{ height: '20vh', overflowY: 'auto',mt:2 }}>
          <Typography sx={{color:'var(--mui-palette-text-primary)'}} variant="body1" fontSize="14px" textAlign="center">
            <List sx={{ listStyleType: 'disc',p:0, pl: 2.5 }}>
              {notice.split(/<br\s*\/?>/).map((line, index) => (
                <ListItem key={`${String(index)}-${line}`} sx={{ display: 'list-item', p:0,mb:0.5  }}>
                  <span dangerouslySetInnerHTML={{ __html: line }} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      </Paper>

      <Button
        fullWidth
        endIcon={<RestoreIcon />}
        sx={{ mt: 4 }}
        variant="outlined"
        onClick={() => {
          setPageState(2);
        }}
      >
        <Typography variant="body1" fontWeight={600}>
          Laundry History
        </Typography>
      </Button>
    </Box>
  );
}
