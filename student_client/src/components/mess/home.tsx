'use client';

import * as React from 'react';
import { Button, MenuItem, Paper, Select, type SelectChangeEvent } from '@mui/material';
import { Stack } from '@mui/system';
import Feedback from './feedback';
import Complaint from './complaint';

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
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb:3}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button
            variant={pageState === 0 ? 'contained' : 'outlined'}
            
            sx={{ px: 5,borderRadius:0.7, fontSize:"17px",py:1,borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            }, }}
            onClick={() => {
              setPagesState(0);
            }}
          >
            Mess Menu
          </Button>

          <Button
            variant={pageState === 1 ? 'contained' : 'outlined'}
            
            sx={{ px: 5,borderRadius:0.7, fontSize:"17px",py:1,borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            }, }}
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
            inputProps={{ 'aria-label': 'Without label' }}
            size="small"
          >
            <MenuItem value="Breakfast">Breakfast</MenuItem>
            <MenuItem value="Lunch">Lunch</MenuItem>
            <MenuItem value="Dinner">Dinner</MenuItem>
          </Select>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button
            variant={pageState === 2 ? 'contained' : 'outlined'}
            
            sx={{ px: 5,borderRadius:0.7, fontSize:"17px",py:1,borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            }, }}
            onClick={() => {
              setPagesState(2);
            }}
          >
            Complaint
          </Button>
        </Stack>
      </Stack>

	  {pageState === 0 && <div>Mess Menu</div>}
	  {pageState === 1 && <Feedback timing={messTiming} />}
	  {pageState === 2 && <Complaint/> }

    </Paper>
  );
}
