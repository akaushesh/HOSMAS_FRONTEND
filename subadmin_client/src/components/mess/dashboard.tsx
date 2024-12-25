'use client';

import * as React from 'react';
import { Box, Button, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import Reviews from './review-card';
import reviews from './temp';
import { useRouter } from 'next/navigation';


export default function Dashboard(): React.JSX.Element {
  const [duration, setDuration] = React.useState<'Weekly' | 'Today' | 'Monthly' | 'Yearly'>('Today');

  const rating = 4.2;
  const students = 520;
  const totalStudents = 990;

  const router=useRouter();
  const review4=reviews.slice(0,4);

  return (
    <Paper sx={{ minHeight: '65vh', width: '100%', mt: 4, p: {xs:2,md:4} }} elevation={10}>
      <Stack sx={{flexDirection:{xs:"column",md:"row"}}} alignItems="stretch" justifyContent="space-between" gap={6}>
       
        <Stack
          width={1}
          direction="row"
          alignItems="center"
          p={2}
          sx={{ background: 'var(--mui-palette-background-level3)', borderRadius: 1,justifyContent:{xs:"space-between",md:"center"},gap:{xs:3,md:6} }}
        >
          
          <Box>
            <Typography variant="h4" fontSize={{xs:"28px",sm:"2rem"}}>Average Mess Rating</Typography>
            <Typography variant="body1" mt={{xs:"3px",sm:0}} fontSize={{xs:"14px",sm:"16px"}}>Based Upon Student Feedback</Typography>
          </Box>

          <Stack alignItems="center" justifyContent="space-evenly">
            <Select
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value as 'Weekly' | 'Today' | 'Monthly' | 'Yearly');
              }}
              displayEmpty
              fullWidth
              sx={{
                fontSize: { xs: '12px', md: '15px', lg: '17px' },
                borderRadius: 0.7,
                fontWeight:600,
                borderWidth:"2px",
                mt: 1,
                mb: 3,
                width: { xs: 1, md: 'auto' },
                px: {xs:0.5,md:1.5},
              }}
              inputProps={{ 'aria-label': 'Without label' }}
              MenuProps={{
                sx: {
                    
                    '& fieldset': {
                      borderWidth: '2px',
                    },
                    '&:hover fieldset': {
                      borderWidth: '2px',
                    },
                    '&.Mui-focused fieldset': {
                      borderWidth: '2px',
                    },
                },
              }}
              size="small"
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>

            <Stack alignItems="center">
              <Typography variant="h1" fontWeight={700} sx={{ color: 'var(--mui-palette-primary-main)' }} fontSize={{xs:"2.8rem",sm:"3.5rem"}}>
                {rating}
              </Typography>
              <Typography variant="body1" fontSize={{xs:"14px",sm:"16px"}}>on scale of 5</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack  p={2} px={4} sx={{ background: 'var(--mui-palette-background-level3)',width:{xs:1,md:"70%"}, borderRadius: 1,flexDirection:{xs:"row",md:"column"},alignItems:{xs:"center",md:"stretch"},justifyContent:{xs:"space-between",md:"auto"},gap:{xs:3,md:0} }}  >
          <Box>
            <Typography variant="h4" fontSize={{xs:"28px",sm:"2rem"}}>No of Students</Typography>
            <Typography variant="body1" mt={{xs:"3px",sm:0}} fontSize={{xs:"14px",sm:"16px"}}>Based Upon Leave System</Typography>
          </Box>

          <Stack alignItems="flex-end">
            <Stack alignItems="center">
              <Typography variant="h1" fontWeight={700} sx={{ color: 'var(--mui-palette-primary-main)' }} fontSize={{xs:"2.8rem",sm:"3.5rem"}}>
                {students}
              </Typography>
              <Typography variant="body1" fontSize={{xs:"14px",sm:"16px"}}>out of total {totalStudents}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
              
      <Box mt={4} sx={{display:{md:"block",xs:"none"}}}>
        <Stack alignItems="center" justifyContent="space-between" direction="row" gap={3}>
            <Typography variant="h4">Critical Reviews</Typography>
            <Button variant="text" sx={{ fontSize:"20px",fontWeight:500,py: 0.7,px:4, borderRadius: 1 }} color="primary" onClick={() => {router.push('/mess/feedback')}}>
                          View All
                        </Button>
            </Stack>
            <Stack mt={2} direction="row" alignItems="stretch" justifyContent="space-between" gap={5} 
                sx={{ background: 'var(--mui-palette-secondary-light)',p:2 }}
                >
                <Reviews arr={review4} />
            </Stack>
          </Box>


    </Paper>
  );
}
