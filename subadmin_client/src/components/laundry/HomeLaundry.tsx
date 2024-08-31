'use client';

import * as React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';

interface HomeProps{
  setPageState: (val:number)=>void;
}

export default function HomeLaundry({setPageState}:HomeProps): React.JSX.Element {

  const hostel="Hostel O";

  const students=70;
  const garments=888;

  return (
    <Stack alignItems='center'>

      <Typography variant="h6" textAlign='left' width={1} color='var(--mui-palette-text-primary)' sx={{ mt:1,fontSize:"18px"}}>
          <span>
           {hostel} | {' '}
          </span>  
          <span>
           {dayjs().format('D MMMM, dddd')}
          </span>  
      </Typography>
      


      <Stack alignItems='center' sx={{width:{xs:1,sm:0.8,md:0.6,lg:0.4}}}>
      <Stack
        direction="row"
        mt={3}
        alignItems='stretch'
        justifyContent='center'
        sx={{
          backgroundColor:'#F1F1F1',
          boxShadow:10,
          border:'1px dashed var(--mui-palette-secondary-main)',
          borderRadius:1,
          width:'1',
        }}
        mx={3}
      >

        <Stack 
          alignItems='center' 
          justifyContent='center'
          spacing={2}
          width={1/2}
          sx={{
            backgroundColor:'transparent',
            padding:1,
            borderRadius:1,
            py:4
          }}
         >
          <Typography variant="h6" textAlign='center' color='var(--mui-palette-text-primary)'>
            Student <br/> Drop-Offs
          </Typography>
          <Box sx={{aspectRatio:1/1,p:1,borderRadius:1,width:'70%',display:"flex",alignItems:"center",justifyContent:"center"}} bgcolor='var(--mui-palette-primary-main)'>
            <Typography variant="h2" alignItems='center' color='var(--mui-palette-common-white)'>
              {students}
            </Typography>
          </Box>

        </Stack>

        <Divider orientation="vertical" flexItem />

        <Stack 
          alignItems='center' 
          justifyContent='center'
          spacing={2}
          width={1/2}
          sx={{
            backgroundColor:'transparent',
            padding:1,
            borderRadius:1,
            py:4
          }}
         >
          <Typography variant="h6" textAlign='center' color='var(--mui-palette-text-primary)'>
            Total <br/> Garments
          </Typography>
          <Box sx={{aspectRatio:1/1,p:1,borderRadius:1,width:'70%',display:"flex",alignItems:"center",justifyContent:"center"}} bgcolor='var(--mui-palette-primary-main)'>
            <Typography variant="h2" alignItems='center' color='var(--mui-palette-common-white)'>
              {garments}
            </Typography>
          </Box>

        </Stack>


      </Stack>





      <Button   sx={{ mt: 6,width:"80%",py:2 }} variant="contained"  onClick={()=>{setPageState(1)}}>
        <Typography variant="body1" color='var(-mui-palette-common-white)' fontWeight={600}>
          Register Laundry
        </Typography>
      </Button>
      
      <Button   sx={{ mt: 2,width:"80%",py:2 }} variant="contained"  onClick={()=>{setPageState(2)}}>
        <Typography variant="body1" color='var(-mui-palette-common-white)' fontWeight={600}>
          Return Laundry
        </Typography>
      </Button>

     </Stack>
    </Stack>
  );
}
