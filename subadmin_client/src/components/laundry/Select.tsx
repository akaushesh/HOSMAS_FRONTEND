'use client';

import * as React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SearchIcon from '@mui/icons-material/Search';
import ChecklistIcon from '@mui/icons-material/Checklist';

export interface HostelProps {
  hostelId: number;
  hostelName: string;
  hostelImg: string;
  hostelOtherName: string;
}

interface SelectPageProps {
  setPageState: (val: number) => void;
}

export default function SelectPage({ setPageState }: SelectPageProps): React.JSX.Element {
  return (
    <Stack alignItems="center" py={8}>
      <Button
        sx={{ mt: 6, width: '80%', py: 2.6 }}
        variant="contained"
        onClick={() => {
          setPageState(-1);
        }}
        startIcon={<HomeWorkIcon />}
      >
        <Typography variant="body1" color="var(-mui-palette-common-white)" fontSize="18px" fontWeight={600}>
          Hostel Laundry
        </Typography>
      </Button>

      <Button
        sx={{ mt: 3, width: '80%', py: 2.6 }}
        variant="contained"
        onClick={() => {
          setPageState(5);
        }}
        startIcon={
          <Stack alignItems="center" justifyContent="center" sx={{ fontWeight: 800 }}>

            <SearchIcon sx={{fontWeight:800,fontSize:"26px"}} />
          </Stack>
      }
      >
        <Typography variant="body1" color="var(-mui-palette-common-white)" fontSize="18px" fontWeight={600}>
          Search Student
        </Typography>
      </Button>
      
	  <Button
        sx={{ mt: 3, width: '80%', py: 2.6 }}
        variant="contained"
        onClick={() => {
          setPageState(6);
        }}
        startIcon={
          <Stack alignItems="center" justifyContent="center" sx={{ fontWeight: 800 }}>

            <ChecklistIcon sx={{fontWeight:800,fontSize:"26px"}} />
          </Stack>
        }
      >
        <Typography variant="body1" color="var(-mui-palette-common-white)" fontSize="18px" fontWeight={600}>
          Verify Laundry
        </Typography>
      </Button>
    </Stack>
  );
}
