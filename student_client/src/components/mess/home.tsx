'use client';

import * as React from 'react';
import { Box, Button, CircularProgress, MenuItem, Paper, Select, type SelectChangeEvent } from '@mui/material';
import { Stack } from '@mui/system';

// import Complaint from './complaint';
import Feedback from './feedback';
import MenuTable from './menu';
import { useMessMenu } from '@/hooks/query/use-mess';
import { useProfile } from '@/hooks/query/use-profile';

 const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];





export default function Home(): React.JSX.Element {
  // 0 -> Mess Menu
  // 1 -> Feedback Menu
  // 2 -> Complaint Menu



  const {data:profile}=useProfile();
  const hostelId=profile?.data.student.room.hostel.id;
  
  const { data:messMenu, isLoading} = useMessMenu({hostelId:hostelId||0});
  const menuItems=messMenu?.data||{Breakfast:{},Lunch:{},Dinner:{}};

  const [pageState, setPagesState] = React.useState<number>(0);
  const [day, setDay] = React.useState<string>('Monday');
  const [messTiming, setMessTiming] = React.useState<"Breakfast" | "Lunch" | "Dinner">('Breakfast');

  const handleChangeDay = (event: SelectChangeEvent): void => {
    setDay(event.target.value);
  };

  const handleChangeMessTiming = (event: SelectChangeEvent): void => {
    setMessTiming(event.target.value as "Breakfast" | "Lunch" | "Dinner");
  };

  return (
    <Paper sx={{ p: 2, px: 3, minHeight: '65vh' }}>
      <Stack
        alignItems="flex-end"
        direction="row"
        sx={{
          justifyContent: { xs: 'space-around', md: 'flex-start' },
          gap: { xs: 1, md: 2 },
          mb: 1,
        }}
      >
        <Button
          variant={pageState === 0 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(0);
          }}
        >
          Mess Menu
        </Button>

        <Button
          variant={pageState === 1 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(1);
          }}
        >
          Feedback
        </Button>

     
        {pageState === 0 && (
        <Select
          value={messTiming}
          onChange={handleChangeMessTiming}
          displayEmpty
          sx={{
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'none', md: 'block' },
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </Select>)}

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

        {/* <Button
          variant={pageState === 2 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: { xs: 0.5, md: 1 },
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
            width: { xs: 1, md: 'auto' },
          }}
          onClick={() => {
            setPagesState(2);
          }}
        >
          Complaint
        </Button> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={1} sx={{display:pageState===1?"none":"flex"}}>
        <Select
          value={day}
          onChange={handleChangeDay}
          displayEmpty
          sx={{
            width: '40%',
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'block', md: 'none' },
            mt: 1,
            mb: 3,
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          {days.map((val) => {
            return (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            );
          })}
        </Select>

        <Select
          value={messTiming}
          disabled={pageState === 2}
          onChange={handleChangeMessTiming}
          displayEmpty
          sx={{
            width: '40%',
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'block', md: 'none' },
            mt: 1,
            mb: 3,
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </Select>
      </Stack>
       {isLoading ?(
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'52vh'}}>
          <CircularProgress/>
          </Box>
       ):(
        <>
        {pageState === 0 && <MenuTable menuItems={menuItems} timing={messTiming} day={day} />}
        </>
       )}   
        {pageState === 1 && <Feedback/>}
      {/* {pageState === 2 && <Complaint />} */}
    </Paper>
  );
}
