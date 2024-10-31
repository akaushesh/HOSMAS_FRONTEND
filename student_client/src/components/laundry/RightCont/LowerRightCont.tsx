'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import QRCode from 'react-qr-code';
import LaundryForm from '../LaundryForm';
import Carousel from 'react-material-ui-carousel';
import dayjs from 'dayjs';
import { LaundrySlipResponse } from '@/services/laundry';
import { AxiosError, AxiosResponse } from 'axios';
import { ErrorResponse } from '@/services/auth';
import { logger } from '@/lib/default-logger';
import { useCreateLaundrySlip } from '@/hooks/mutation/use-laundry';


export interface QRDataProps {
  details: Record<string, number>; 
  LaundryId: string; 
  transactionId: string; 
}
interface CollectQRProps {
  transactionId: string; 
  date: string; 
}


export default function LowerRightCont(): React.JSX.Element {

  const [QRData,setQRData] = React.useState<QRDataProps|null>(null);
 
  const [collectQR, setcollectQR] = React.useState<CollectQRProps[]>([
    // { transactionId: '2123', date: '2022-09-17T17:00' },
    // { transactionId: '8971', date: '2022-09-19T17:00' },
    // { transactionId: '8789', date: '2022-09-21T17:00' },
  ]);


  const [active,isActive] = React.useState(true);


  const onSuccessCreate = async (res: AxiosResponse<LaundrySlipResponse>): Promise<void> => {
    // setLaundryData(res.data);
    logger.debug(res.data);
  };

  const onErrorCreate = (error: AxiosError<ErrorResponse>): void => {
    logger.error(error);
  };

  const { mutate: createSlip, isPending } = useCreateLaundrySlip({ onSuccess: onSuccessCreate, onError:onErrorCreate });


  const [toggleForm, setToggleForm] = React.useState(false);


  const fetchSubmit=():void=>{
    if(active){
      setToggleForm(true);
    }
    isActive(true);
  }

  const fetchCollect=():void=>{
    isActive(false);
  }

  return (
    <Paper
      elevation={10}
      sx={{
        width: 1,
        p: 3,
      }}
    >
      <Typography variant="h5">Laundry Checkout</Typography>

      <Box sx={{ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: 0 }}>
        <Stack alignItems="center" width={0.4} gap={2}>
          <Button fullWidth variant={!active?"outlined":"contained"} sx={{ py: 2 }}
            onClick={()=>{fetchSubmit();}} 
          >
            <Typography variant="body1" fontWeight={600}>
              {!QRData?'Submit Laundry': active?`Update Laundry`:`View submit QR`}
            </Typography>
          </Button>

          <Button fullWidth variant={active?"outlined":"contained"}  sx={{ py: 2 }}
            onClick={()=>{fetchCollect();}} 
          >
            <Typography variant="body1" fontWeight={600}>Collect Laundry</Typography>
          </Button>
        </Stack>
        
        <Box width={0.45} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {active ? 
            (!QRData)?(
              <Stack sx={{aspectRatio: '1/1', width: 1, p:2}} justifyContent="center"
              alignItems="center">

                <Stack sx={{aspectRatio: '1/1', width: 1,border:"1px dashed var(--mui-palette-secondary-main)", background:"var(--mui-palette-secondary-light)",cursor :"pointer",borderRadius: 2, fontWeight:500, fontSize:"28px"}} justifyContent="center"
                alignItems="center"
                onClick={()=>{setToggleForm(true);}}
                >
                  +
                </Stack>
              </Stack>
            ):(
              <QRCode style={{ aspectRatio: '1/1', width: '70%' }} value={QRData.transactionId} />
            )
            :
          (
            (collectQR.length===0)?(
              <Stack sx={{aspectRatio: '1/1', width: 1, p:2}} justifyContent="center"
              alignItems="center">

                <Stack sx={{aspectRatio: '1/1', width: 1,border:"1px dashed var(--mui-palette-secondary-main)", background:"var(--mui-palette-secondary-light)",borderRadius: 2, fontWeight:500, fontSize:"19px",textAlign:"center",p:3}} justifyContent="center"
                alignItems="center" 
                >
                  Nothing to Collect
                </Stack>
              </Stack>
            ):(
          <Carousel
            strictIndexing
            autoPlay={false}
            cycleNavigation={false}
            animation="slide"
            navButtonsAlwaysVisible
            interval={5000}
            navButtonsWrapperProps={{ style: { marginTop: '-42px' } }}
            navButtonsProps={{
              style: {
                // backgroundColor: 'transparent',
                borderRadius: '50%', // Keep the button round
                padding: '2px', // Adjust the size by reducing padding
              },
            }}
            sx={{
              width: 1,
            }}
          >
            {collectQR.map((val) => {
              return (
                <Stack
                  alignItems="center"
                  key={val.transactionId}
                >
                  <QRCode style={{ aspectRatio: 1 / 1, width: '55%' }} value={val.transactionId} />
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    mt="-30px"
                    color="var(--mui-palette-text-secondaryChannel)"
                  >
                    CODE: <span style={{ color: 'var(--mui-palette-text-primary)' }}>{val.transactionId}</span>
                  </Typography>
                  <Typography variant="body1" textAlign="center" mt={1} color="var(--mui-palette-text-primary)">
                    {dayjs(val.date).format('D MMMM, dddd')}
                  </Typography>
                </Stack>
              );
            })}
          </Carousel>
            )
          )
          }
        </Box>
      </Box>


      <LaundryForm QRData={QRData} setQRData={setQRData} toggleForm={toggleForm} setToggleForm={setToggleForm} />
    </Paper>
  );
}
