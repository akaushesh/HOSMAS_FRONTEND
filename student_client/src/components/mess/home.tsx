'use client';

import * as React from 'react';
import { Box, Button, MenuItem, Paper, Select, type SelectChangeEvent } from '@mui/material';
import { Stack } from '@mui/system';

import Complaint from './complaint';
import Feedback from './feedback';
import MenuTable from './menu';

export default function Home(): React.JSX.Element {
  // 0 -> Mess Menu
  // 1 -> Feedback Menu
  // 2 -> Complaint Menu

  const [pageState, setPagesState] = React.useState<number>(0);
  const [messTiming, setMessTiming] = React.useState<string>('Breakfast');

  const handleChangeMessTiming = (event: SelectChangeEvent): void => {
    setMessTiming(event.target.value);
  };

  return (
    <Paper sx={{ p: 2, px: 3, minHeight: '65vh' }}>
      <Stack
        alignItems="center"
        direction="row"
        sx={{
          justifyContent: { xs: "space-around", md: "flex-start" }, 
          gap:{xs:0,md:2},
          mb: 1,
        }}
      >
        <Button
          variant={pageState === 0 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: {xs:0.5,md:1},
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
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
            py: {xs:0.5,md:1},
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          }}
          onClick={() => {
            setPagesState(1);
          }}
        >
          Feedback
        </Button>

        <Select
          value={messTiming}
          disabled={pageState === 2}
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
        </Select>

        {/* Spacer to push the Complaint button to the right */}
        <Box sx={{ flexGrow: 1,display:{xs:"none",md:"flex" } }} />

        <Button
          variant={pageState === 2 ? 'contained' : 'outlined'}
          sx={{
            px: { xs: 1.3, md: 5 },
            borderRadius: 0.7,
            fontSize: { xs: '15px', lg: '17px' },
            py: {xs:0.5,md:1},
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          }}
          onClick={() => {
            setPagesState(2);
          }}
        >
          Complaint
        </Button>
      </Stack>

      
      <Select
          value={messTiming}
          disabled={pageState === 2}
          onChange={handleChangeMessTiming}
          displayEmpty
          sx={{
            width:"40%",
            ml:1.3,
            fontSize: { xs: '12px', md: '15px', lg: '17px' },
            borderRadius: 0.7,
            display: { xs: 'block', md: 'none' },
            mt:1,mb:3
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
        </Select>

      {pageState === 0 && <MenuTable timing={messTiming} />}
      {pageState === 1 && <Feedback timing={messTiming} />}
      {pageState === 2 && <Complaint />}
    </Paper>
  );
}
