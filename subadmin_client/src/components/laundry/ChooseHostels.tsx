'use client';

import * as React from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

import hostels from './assets/HostelData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export interface HostelProps {
	hostelId: number;
	hostelName: string;
	hostelImg: string;
	hostelOtherName: string;
  }

interface ChooseHostelProps{
  setPageState: (val:number)=>void;
  setHostel: (val:HostelProps)=>void;
}


export default function ChooseHostels({setPageState,setHostel}:ChooseHostelProps): React.JSX.Element {


	const handleClick = (hostel:HostelProps): void => {
		  setPageState(0);
		  setHostel({
			hostelId: hostel.hostelId,
			hostelName: hostel.hostelName,
			hostelImg: hostel.hostelImg,
			hostelOtherName: hostel.hostelOtherName,
		  })
	};

  

  return (
		<Stack>
         <Button
        startIcon={<ArrowBackIosIcon />}
        sx={{ mt: 2, py: 0, alignSelf: 'flex-start' }}
        onClick={() => {
          setPageState(-2);
        }}
      >
        <Typography variant="body1" color="var(--mui-palette-text-primary)">
          Main Menu
        </Typography>
      </Button>
      <Paper sx={{ py: 3, px: 1, mt: 3 }} elevation={10}>
        <Box sx={{ overflowY: 'auto', px: 1.5, 
          height: '60vh', width: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 
              {
                sm:`repeat(auto-fill, minmax("300px", 1fr))`,
                xs:`repeat(auto-fill, minmax("100%", 1fr))`,
              },
              gap: 3,
              justifyItems: 'center',
            }}
            >
            {hostels.map((el) => {
              return (
                <Box
                key={el.hostelId}
                sx={{
                  width: '100%',
                  height: '23vh',
                  p: 1,
                  background: `url(${el.hostelImg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: '0 0',
                  position: 'relative',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onClick={() => {
                  handleClick(el);
                }}
                >
                  <Typography
                    sx={{
                      bottom: 9,
                      right: 15,
                      position: 'absolute',
                      background: 'white',
                      px: 1,
                      py: 0.5,
                      fontSize:"17px", 
                      borderRadius: 0.5,
                    }}
                    fontWeight={700}
                    color="var(--TextMain-Color)"
                    variant="h6"
                  >
                    {el.hostelName} | <span style={{fontSize:"14px",fontWeight:"500"}}>
						 {el.hostelOtherName}
						</span>
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Paper>
            </Stack>
  );
}
