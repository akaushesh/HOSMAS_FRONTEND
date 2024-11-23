'use client';

import * as React from 'react';
import { Box, Button, CircularProgress, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useProfile } from '@/hooks/query/use-profile';
import { type AxiosError, type AxiosResponse } from 'axios';
import { type SupervisorProfileResponse } from '@/services/profile';
import { useLaundryDetails } from '@/hooks/mutation/use-laundry';
import {type  LaundryDetailsResponse } from '@/services/laundry';
import { type ErrorResponse } from '@/services/auth';
import { logger } from '@/lib/default-logger';

interface HomeProps{
  setPageState: (val:number)=>void;
}


export default function HomeLaundry({setPageState}:HomeProps): React.JSX.Element {

  

  const [laundryDetails,setLaundryDetails]=React.useState<LaundryDetailsResponse|null>(null)
  
  const { data: profile } = useProfile();
  const user = profile as AxiosResponse<SupervisorProfileResponse>;
  const hostelID=user?.data?.supervisor?.hostel?.id;

  
  const onSuccess = async (res: AxiosResponse<LaundryDetailsResponse>): Promise<void> => {
    setLaundryDetails(res.data);
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    logger.error(error);
  };

  const {mutate:laundryDetailsRes, }=useLaundryDetails({onSuccess,onError});

  React.useEffect(()=>{
    if(hostelID){
      laundryDetailsRes(hostelID);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps -- single dep
  },[hostelID])

  return (
    <Stack alignItems='center'>
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
              {laundryDetails?laundryDetails.total_slips:(
                <CircularProgress size="35px" thickness={6} sx={{color:"white"}}/>
              )}
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
              {laundryDetails?laundryDetails.total_items:(
                <CircularProgress size="35px" thickness={6} sx={{color:"white"}}/>
              )}
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
      
      {/* <Button   sx={{ mt: 2,width:"80%",py:1.6 }} variant="outlined"  onClick={()=>{setPageState(5)}}>
        <Typography variant="body1" color='var(-mui-palette-common-white)' fontWeight={600}>
          Search Transaction
        </Typography>
      </Button> */}

     </Stack>
    </Stack>
  );
}
